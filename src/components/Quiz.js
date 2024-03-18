// now I need to style answers
import "../styles/quiz.css";
import { useState } from "react";

export default function Quiz(props) {
  const [answers, setAnswers] = useState(shuffleAnswer());

  function shuffleAnswer() {
    let answers = [...props.incorrectAnswers];
    const correctAnswer = props.correctAnswer;
    const randonIndex = Math.floor(
      Math.random() * (props.incorrectAnswers.length + 1)
    );
    answers.splice(randonIndex, 0, correctAnswer);
    return answers;
  }

  const answerElement = answers.map((answer, i) => (
    <span key={i + 1} className="quiz-answer">
      {answer}
    </span>
  ));

  function decodeText(text) {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = text;
    return tempElement.textContent || tempElement.innerText;
  }

  return (
    <div className="quiz-ctn">
      <h3 className="quiz-question">{decodeText(props.question)}</h3>
      <div className="quiz-alternatives_ctn">{answerElement}</div>
    </div>
  );
}
