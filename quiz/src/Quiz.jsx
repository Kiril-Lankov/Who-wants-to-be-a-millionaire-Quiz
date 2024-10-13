import { useEffect, useState } from "react";

export default function Quiz({ data, setTimeOut, questionNumber, setQuestionNumber }) {
  const [question, setQuestion] = useState(null);

  // Fetch question based on question number
  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  return (
    <div className="quiz">
      
      <div className="question">{question?.question}</div>
      
      
      <div className="answers">
        {question?.answers?.map((a, index) => (
          <div key={index} className="answer">
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}