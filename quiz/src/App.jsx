import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Quiz from "./Quiz";
import Timer from "./Timer";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0 BGN");

  const data = [
    {id:1,
      question: "Ролекс е компания, която произвежда:",
      answers: [
      {
        text: "Телефони",
        correct: false,  
      },
      {
        text: "Часовници",
        correct: true,  
      },
      {
        text: "Детски дрехи",
        correct: false,  
      },
      {
        text: "Автомобили",
        correct: false,  
      }
      ]
    },
    {id:2,
      question: "Ролекс е компания, която произвежда:",
      answers: [
      {
        text: "Телефони",
        correct: false,  
      },
      {
        text: "Часовници",
        correct: true,  
      },
      {
        text: "Детски дрехи",
        correct: false,  
      },
      {
        text: "Автомобили",
        correct: false,  
      }
      ]
    }
  ]
  const moneyPyramid = useMemo (()=> 
    [
      {id:1, amount: "BGN 100"},
      {id:2, amount: "BGN 200"},
      {id:3, amount: "BGN 300"},
      {id:4, amount: "BGN 400"},
      {id:5, amount: "BGN 500"},
      {id:6, amount: "BGN 1000"},
      {id:7, amount: "BGN 2000"},
      {id:8, amount: "BGN 3000"},
      {id:9, amount: "BGN 5000"},
      {id:10, amount: "BGN 10000"},
      {id:11, amount: "BGN 15000"},
      {id:12, amount: "BGN 20000"},
      {id:13, amount: "BGN 25000"},
      {id:14, amount: "BGN 50000"},
      {id:15, amount: "BGN 100000"},
    ].reverse(),
  []);

  // Shows the earned money
  useEffect(()=>{
    questionNumber > 1 && 
    setEarned(moneyPyramid.find((m)=> m.id === questionNumber - 1).amount); 
  },[moneyPyramid, questionNumber]);
  return (
    <div className="app">
     <div className="main">
      {stop ? (
         <h1 className="endText">Вие спечелихте: {earned}</h1>
      ): (
        <>
      <div className="top">
        <div className="timer"> 
          <Timer/>
        </div>
      </div>
      <div className="bottom"><Quiz data={data} 
      setStop={setStop}
       setQuestionNumber={setQuestionNumber}
       questionNumber={questionNumber}/>
       </div>
       </>
      )}
     </div>
     <div className="pyramid">
      <ul className="moneyList">
        {moneyPyramid.map((m) => (
        <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"} >
          <span className="moneyListItemNumber">{m.id}</span>
          <span className="moneyListItemAmount">{m.amount}</span>
        </li>
        ))}
        
      </ul>
     </div>
    </div>
  );
}

export default App;
