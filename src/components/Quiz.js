import "../styles/quiz.css";
import { useState, useEffect } from "react";
import Answer from "./Answer";

export default function Quiz(props) {
  const [answers, setAnswers] = useState(shuffleAnswers());
  const [clickedIndex, setClickedIndex] = useState(null);

  useEffect(() => {
    if (!props.checkGame) {
      setClickedIndex(null);
      setAnswers(shuffleAnswers());
    }
  }, [props.question]);

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

  function handleAnswerClick(i) {
    !props.checkGame && setClickedIndex(i);
    props.numAnswered();
  }

  const answerElement = answers.map((answer, i) => (
    <Answer
      key={i + 1}
      className="quiz-answer"
      answer={decodeText(answer)}
      click={() => handleAnswerClick(i)}
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
