import { useEffect, useState } from "react";

export default function Quiz({ data, setStop, questionNumber, setQuestionNumber }) {
    const [question, setQuestion] = useState(null);
    const [questionMarker, setQuestionMarker] = useState(null);
    const [className, setClassName] = useState("answer");

    // Fetch question based on question number
    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);

    const delay = (duration, callback) => {
        setTimeout(()=> {
            callback();
        }, duration);
    };
    // Function to choose an answer of the question and check if it is correct or not 
    const handleClick = (a) => {
        setQuestionMarker(a);
        setClassName("answer active");
        delay(3000, ()=> setClassName(a.correct ? "answer correct" : "answer wrong")
      );
      delay(6000, ()=> {
        if (a.correct) {
            setQuestionNumber((prev)=> prev + 1);
            setQuestionMarker(null);
        } else {
            setStop(true);
        }
      }
    );
    };

    return (
        <div className="quiz">

            <div className="question">{question?.question}</div>


            <div className="answers">
                {question?.answers?.map((a, index) => (
                    <div key={index} className={questionMarker === a ? className : "answer"} onClick={() => handleClick(a)}>
                        {a.text}
                    </div>
                ))}
            </div>
        </div>
    );
}