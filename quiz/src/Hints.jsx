import { useState } from "react";

export default function Hints({question, setFilteredAnswers, usedFiftyFifty, setUsedFiftyFifty, usedAudienceHelp, setUsedAudienceHelp}) {
   //50:50 hint
   const handleFifyFifty = () => {
    if (usedFiftyFifty) return; // can be used only once

    const incorrectAnswers = question.answers.filter(a => !a.correct);
    const twoIncorrect =  incorrectAnswers.slice(0, 2); //pick two incorrect answers
    const remainingAnswers = question.answers.filter(a => !twoIncorrect.includes(a));

    setFilteredAnswers(remainingAnswers);
    setUsedFiftyFifty(true);
   };

   //Help from audience

   const handleAudienceHelp = () => {
    if(usedAudienceHelp) return;

    const votes = question.answers.map(a =>({
        ...a,
        vote: a.correct ? Math.floor(Math.random() * (40 - 30 + 1) + 30) : Math.floor(Math.random() * 30)

    }));
    setFilteredAnswers(votes);
    setUsedAudienceHelp(true);
   };

    return (
   <div className="hints">
   <button onClick={handleFifyFifty} disabled={usedFiftyFifty}>50:50</button>
   <button onClick={handleAudienceHelp} disabled={usedAudienceHelp}>Помощ от публиката</button>
   </div>     
    );
}