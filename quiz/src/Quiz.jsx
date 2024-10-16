import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "./sounds/play.mp3";
import correct from "./sounds/correct.mp3";
import wrong from "./sounds/wrong.mp3";

export default function Quiz({ data, setStop, questionNumber, setQuestionNumber, filteredAnswers, setFilteredAnswers,handleNextQuestion }) {
    const [question, setQuestion] = useState(null);
    const [questionMarker, setQuestionMarker] = useState(null);
    const [className, setClassName] = useState("answer");
    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    useEffect(()=>{
        letsPlay();
    }, [letsPlay]);

    // Fetch question based on question number and reset filtered answers when question changes
    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
        
    }, [data, questionNumber, setFilteredAnswers]);

    const delay = (duration, callback) => {
        setTimeout(()=> {
            callback();
        }, duration);
    };
    // Function to choose an answer of the question and check if it is correct or not 
    const handleClick = (a) => {
        setQuestionMarker(a);
        setClassName("answer active");
        // Delay the answer animation (blinking)
        delay(3000, ()=> setClassName(a.correct ? "answer correct" : "answer wrong")
      );

      //After animation , either move to the next question 
      delay(5000, ()=> {
        if (a.correct) {
            correctAnswer();
            delay(1000, () => {
                setQuestionNumber((prev)=> prev + 1);
                setQuestionMarker(null);
                handleNextQuestion();
            });
           
        } else {
            wrongAnswer();
            delay(1000, ()=> {
                setStop(true);
            });
         
        }
      });
    };

    const answersToShow = filteredAnswers.length ? filteredAnswers : question?.answers;

  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {answersToShow?.map((a, index) => (
          <div key={index} className={questionMarker === a ? className : "answer"} onClick={() => handleClick(a)}>
            {a.text}
            {a.vote !== undefined && <span className="audienceVote"> ({a.vote}%)</span>}
          </div>
        ))}
      </div>
    </div>
  );
}