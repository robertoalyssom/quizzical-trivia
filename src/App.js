import "./App.css";
import MenuScreen from "./components/MenuScreen";
import Quiz from "./components/Quiz";
import { useState, useEffect } from "react";
import conectApi from "./api";
import Loading from "./components/Loading";

export default function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [startGame, setStartGame] = useState(false);
  const [checkGame, setCheckGame] = useState(false);
  const [numQuizAnswered, setNumQuizAnswered] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (startGame && !checkGame) {
      setQuizzes([]);
      async function takeData() {
        const data = await conectApi(category);
        setQuizzes(data.results);
      }
      takeData();
    }
  }, [startGame, checkGame]);

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

  const selectCategory = (selectValue) => {
    setCategory(selectValue);
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

  const quizContent = () => {
    if (!quizzes.length) return <Loading />;
    else
      return (
        <main className="main">
          <div className="quizzes_ctn">{quizElements}</div>
          <button className="btn check_btn" onClick={checkAnswers}>
            {checkGame ? "New Quizzes" : "Check Answers"}
          </button>
        </main>
      );
  };

  return (
    <div className="App">
      <div className="blob-yellow_img"></div>
      {!startGame ? (
        <MenuScreen
          startGame={() => setStartGame(true)}
          selectCategory={(selectValue) => selectCategory(selectValue)}
        />
      ) : (
        quizContent()
      )}
      <div className="blob-blue_img"></div>
    </div>
  );
}
