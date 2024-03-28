import "../styles/quiz.css";

const Answer = (props) => {
  function styles() {
    if (props.checkGame) {
      if (props.isCorrect)
        return {
          backgroundColor: "#BFEA7C",
          color: "#114232",
          borderColor: "#114232",
        };
      else if (props.isClicked)
        return {
          backgroundColor: "#FF8E9E",
          color: "#DC0000",
          borderColor: "#DC0000",
        };
    } else if (props.isClicked) {
      return {
        backgroundColor: "#d6dbf5",
        color: "#4d5b9e",
        borderColor: "#293264",
      };
    }
  }

  return (
    <span className="quiz-answer" onClick={props.click} style={styles()}>
      {props.answer}
    </span>
  );
};

export default Answer;
