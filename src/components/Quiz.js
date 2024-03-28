import "../styles/quiz.css";
import { useEffect, useState } from "react";
import Answer from "./Answer";

export default function Quiz(props) {
  const [answers, setAnswers] = useState(shuffleAnswers());
  const [clickedIndex, setClickedIndex] = useState(null);

  function shuffleAnswers() {
    let answersArr = [...props.incorrectAnswers];
    const correctAnswer = props.correctAnswer;
    const randonIndex = Math.floor(
      Math.random() * (props.incorrectAnswers.length + 1)
    );
    answersArr.splice(randonIndex, 0, correctAnswer);
    return answersArr;
  }

  const decodeText = (text) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = text;
    return tempElement.textContent || tempElement.innerText;
  };

  const answerElement = answers.map((answer, i) => (
    <Answer
      key={i + 1}
      className="quiz-answer"
      answer={decodeText(answer)}
      click={() => !props.checkGame && setClickedIndex(i)}
      isClicked={clickedIndex === i}
      isCorrect={answer === props.correctAnswer}
      checkGame={props.checkGame}
    />
  ));

  return (
    <div className="quiz-ctn">
      <h3 className="quiz-question">{decodeText(props.question)}</h3>
      <div className="quiz-answers_ctn">{answerElement}</div>
    </div>
  );
}
