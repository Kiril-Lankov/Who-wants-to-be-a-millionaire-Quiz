import { useEffect, useState } from "react";

export default function Quiz({ data, setTimeOut, questionNumber, setQuestionNumber }) {
    const [question, setQuestion] = useState(null);
    const [questionMarker, setQuestionMarker] = useState(null);
    const [className, setClassName] = useState("answer");

    // Fetch question based on question number
    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);
    // Function to choose an answer of the question
    const handleClick = (a) => {
        setQuestionMarker(a);
        setClassName("answer active");
        // Check if the answer is correct
        setTimeout(() => {
            setClassName(a.correct ? "answer correct" : "answer wrong")
        }, 3000);
    }

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