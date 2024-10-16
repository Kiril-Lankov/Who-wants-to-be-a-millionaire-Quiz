import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Quiz from "./Quiz";
import Timer from "./Timer";
import Start from "./Start";
import Hints from "./Hints";

function App() {
  const [userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0 BGN");

  const [usedFIftyFifty, setUsedFiftyFifty] = useState(false);
  const [usedAudienceHelp, setUsedAudienceHelp] = useState(false);
  const [filteredAnswers, setFilteredAnswers] = useState([]);


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
      question: "Коя от знаменитостите не е родена в Канада:",
      answers: [
      {
        text: "Селин Дион",
        correct: false,  
      },
      {
        text: "Нина Добрев",
        correct: true,  
      },
      {
        text: "Памела Андерсън",
        correct: false,  
      },
      {
        text: "Рейчъл Макадамс",
        correct: false,  
      }
      ]
    }
    ,
    {id:3,
      question: "Кой уред от изброените се използва за измерване:",
      answers: [
      {
        text: "Такер",
        correct: false,  
      },
      {
        text: "Шублер",
        correct: true,  
      },
      {
        text: "Тример",
        correct: false,  
      },
      {
        text: "Зегер",
        correct: false,  
      }
      ]
    },
    {id:4,
      question: "През коя от държавите не минава Гринуичкият меридиан? :",
      answers: [
      {
        text: "Алжир",
        correct: false,  
      },
      {
        text: "Тунис",
        correct: true,  
      },
      {
        text: "Франция",
        correct: false,  
      },
      {
        text: "Испания",
        correct: false,  
      }
      ]
    },
    {id:5,
      question: "Коя държава от изброените не е анклав?:",
      answers: [
      {
        text: "Ватикана",
        correct: false,  
      },
      {
        text: "Лихтенщайн",
        correct: true,  
      },
      {
        text: "Сан Марино",
        correct: false,  
      },
      {
        text: "Лесото",
        correct: false,  
      }
      ]
    },
    {id:6,
      question: "Кой от  изброените не е от главните острови на японския архипелаг? :",
      answers: [
      {
        text: "Хокайдо",
        correct: false,  
      },
      {
        text: "Осака",
        correct: true,  
      },
      {
        text: "Кюшу",
        correct: false,  
      },
      {
        text: "Шикоку",
        correct: false,  
      }
      ]
    },
    {id:7,
      question: "Кой български премиер от изброените е бил председател на Българския червен кръст? :",
      answers: [
      {
        text: "Митрополит Климент",
        correct: false,  
      },
      {
        text: "Иван Гешов",
        correct: false,  
      },
      {
        text: "Стоян Даневне",
        correct: false,  
      },
      {
        text: "Стефан Стамболов",
        correct: true,  
      }
      ]
    },
    {id:8,
      question: "По какъв необичаен за европейците критерий южнокорейците често избират половинките  си?:",
      answers: [
      {
        text: "Харесване",
        correct: false,  
      },
      {
        text: "Врачка",
        correct: false,  
      },
      {
        text: "Кръвна група",
        correct: true,  
      },
      {
        text: "Случаен",
        correct: false,  
      }
      ]
    },
    {id:9,
      question: "Каква е причината за изчезването на студентите в прохода Дятлов:",
      answers: [
      {
        text: "Извънземни",
        correct: false,  
      },
      {
        text: "Убити от животно",
        correct: false,  
      },
      {
        text: "Неизвестна",
        correct: false,  
      },
      {
        text: "Лавина",
        correct: false,  
      }
      ]
    },
    {id:10,
      question: "Кой език използва американската армия, за да криптира съобщенията си по време на Втората световна война? :",
      answers: [
      {
        text: "Английски",
        correct: false,  
      },
      {
        text: "Немски",
        correct: false,  
      },
      {
        text: "Японски",
        correct: false,  
      },
      {
        text: "На индианците Навахо",
        correct: true,  
      }
      ]
    },
    {id:11,
      question: "Коя европейска столица от изброените не е била столица на летни или зимни олимпийски игри?:",
      answers: [
      {
        text: "Будапеща",
        correct: true,  
      },
      {
        text: "Сараево",
        correct: false,  
      },
      {
        text: "Осло",
        correct: false,  
      },
      {
        text: "Берлин",
        correct: false,  
      }
      ]
    },
    {id:12,
      question: "Коя държава от изброените не е африканска? :",
      answers: [
      {
        text: "Малави",
        correct: false,  
      },
      {
        text: "Бенин",
        correct: true,  
      },
      {
        text: "Сиера Леоне",
        correct: false,  
      },
      {
        text: "Белиз",
        correct: false,  
      }
      ]
    },
    {id:13,
      question: "В коя държава булката се затваря в специална стая, за да плаче две седмици до сватбата?:",
      answers: [
      {
        text: "Ангола",
        correct: false,  
      },
      {
        text: "Сомалия",
        correct: false,  
      },
      {
        text: "Китай",
        correct: true,  
      },
      {
        text: "Филипини",
        correct: false,  
      }
      ]
    },
    {id:14,
      question: "Коя холивудска актриса убива Чарлз Менсън през 1969 г.?:",
      answers: [
      {
        text: "Шарън Тейт",
        correct: true,  
      },
      {
        text: "Мерлин Монро",
        correct: false,  
      },
      {
        text: "Одри Хепбърн",
        correct: false,  
      },
      {
        text: "Полет Годар",
        correct: false,  
      }
      ]
    },
    {id:15,
      question: "Кой от тези американски президенти се е появявал в сериала Laugh-in:",
      answers: [
      {
        text: "Линдън Джонсън",
        correct: false,  
      },
      {
        text: "Джими Картър",
        correct: false,  
      },
      {
        text: "Джерард Форд",
        correct: false,  
      },
      {
        text: "Ричард Никсън",
        correct: true,  
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
      {userName ? (
        <><div className="main">
        {stop ? (
           <h1 className="endText">Вие спечелихте: {earned}</h1>
        ): (
          <>
        <div className="top">
          <div className="timer"> 
            <Timer setStop={setStop} questionNumber={questionNumber}/>
          </div>
        </div>
        <div className="bottom">
          <Quiz 
          data={data} 
        setStop={setStop}
         setQuestionNumber={setQuestionNumber}
         questionNumber={questionNumber}
         filteredAnswers={filteredAnswers}
         setFilteredAnswers={setFilteredAnswers}
         />
         </div>
         </>
        )}
       </div>
       <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
          <li key={m.id} 
          className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"} >
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
          ))}
          
        </ul>
       </div>
       <Hints
       question={data[questionNumber -1 ]}
       setFilteredAnswers={setFilteredAnswers}
       usedFiftyFifty={usedFIftyFifty}
       setUsedFiftyFifty={setUsedFiftyFifty}
       usedAudienceHelp={usedAudienceHelp}
       setUsedAudienceHelp={setUsedAudienceHelp}
       />
       </>
      ) : ( <Start setUserName={setUserName}/>
      )}
     
    </div>
  );
}

export default App;
