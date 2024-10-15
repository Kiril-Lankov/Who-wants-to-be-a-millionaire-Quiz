import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "./sounds/play.mp3";
import correct from "./sounds/correct.mp3";
import wrong from "./sounds/wrong.mp3";

export default function Quiz({ data, setStop, questionNumber, setQuestionNumber, filteredAnswers }) {
    const [question, setQuestion] = useState(null);
    const [questionMarker, setQuestionMarker] = useState(null);
    const [className, setClassName] = useState("answer");
    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    useEffect(()=>{
        letsPlay();
    }, [letsPlay]);

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
      delay(5000, ()=> {
        if (a.correct) {
            correctAnswer();
            delay(1000, () => {
                setQuestionNumber((prev)=> prev + 1);
                setQuestionMarker(null);
            });
           
        } else {
            wrongAnswer();
            delay(1000, ()=> {
                setStop(true);
            });
         
        }
      });
    };

    return (
        <div className="quiz">

            <div className="question">{question?.question}</div>


            <div className="answers">
                {question?.answers?.map((a, index) => (
                    <div key={index} className={questionMarker === a ? className : "answer"} onClick={() => handleClick(a)}>
                        {a.text}
                        {a.vote !== undefined && <span className="audienceVote">({a.vote}%)</span>}
                    </div>
                ))}
            </div>
        </div>
    );
}