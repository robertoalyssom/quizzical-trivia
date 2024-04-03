import "./App.css";
import MenuScreen from "./components/MenuScreen";
import Quiz from "./components/Quiz";
import { useState, useEffect } from "react";
import conectApi from "./api";

export default function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [checkGame, setCheckGame] = useState(false);
  const [numQuizAnswered, setNumQuizAnswered] = useState([]);
  const [startGame, setStartGame] = useState(false);

  useEffect(() => {
    if (!checkGame) {
      async function takeData() {
        const data = await conectApi();
        setQuizzes(data.results);
      }
      takeData();
    }
  }, [checkGame]);

  const checkAnswers = () => {
    if (numQuizAnswered.length >= quizzes.length) {
      setCheckGame((prevState) => (prevState = !prevState));
      if (checkGame) setNumQuizAnswered([]); // resetting array here
    }
  };

  const handleQuizAnswered = (i) => {
    setNumQuizAnswered((prevArray) => {
      return prevArray.includes(i) ? [...prevArray] : [...prevArray, i];
    });
  };

  const quizElements = quizzes.map((quiz, i) => (
    <Quiz
      key={i + 1}
      question={quiz.question}
      correctAnswer={quiz.correct_answer}
      incorrectAnswers={quiz.incorrect_answers}
      checkGame={checkGame}
      numQuizAnswered={() => handleQuizAnswered(i)}
    />
  ));

  return (
    <div className="App">
      <div className="blob-yellow_img"></div>
      {!startGame ? (
        <MenuScreen startGame={() => setStartGame(true)} />
      ) : (
        <main className="main">
          <div className="quizzes_ctn">{quizElements}</div>
          <button className="btn check_btn" onClick={checkAnswers}>
            {checkGame ? "New Quizzes" : "Check Answers"}
          </button>
          <div className="blob-blue_img"></div>
        </main>
      )}
    </div>
  );
}
