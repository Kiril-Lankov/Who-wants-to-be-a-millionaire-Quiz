import { useEffect, useState } from "react"


export default function Quiz({data, setTimeOut, questionNumber, setQuestionNumber}) {
    const [question, setQuestion] =useState(null);

    //fetch questions
    useEffect(()=> {
        setQuestion(data[questionNumber-1])
    },[])
    return (
        <div className="quiz">
            <div className="question">Who is the richest people in the world?</div>
            <div className="answers">
                <div className="answer ">Me</div>
                <div className="answer">Me</div>
                <div className="answer">Me</div>
                <div className="answer">Meee</div>
            </div>
        </div>
    )
};