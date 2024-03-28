import "./App.css";
import MenuScreen from "./components/MenuScreen";
import Quiz from "./components/Quiz";
import { useState, useEffect } from "react";
import conectApi from "./api";

function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [checkGame, setCheckGame] = useState(false);

  useEffect(() => {
    async function takeData() {
      const data = await conectApi();
      setQuizzes(data.results);
    }
    takeData();
  }, []);

  const checkAnswers = () => {
    if (!checkGame) setCheckGame((prevState) => (prevState = !prevState));
  };

  const quizElements = quizzes.map((quiz, i) => (
    <Quiz
      key={i + 1}
      question={quiz.question}
      correctAnswer={quiz.correct_answer}
      incorrectAnswers={quiz.incorrect_answers}
      checkGame={checkGame}
    />
  ));

  return (
    <div className="App">
      <div className="blob-yellow_img"></div>
      {/* <MenuScreen /> */}
      <div className="quizzes_ctn">{quizElements}</div>
      <button className="btn check_btn" onClick={checkAnswers}>
        Check Answers
      </button>
      <div className="blob-blue_img"></div>
    </div>
  );
}

export default App;
