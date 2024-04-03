import "../styles/quiz.css";

export default function Answer(props) {
  const styles = () => {
    if (props.checkGame) {
      if (props.isCorrect) return styleColors("#BFEA7C", "#114232", "#114232");
      else if (props.isClicked)
        return styleColors("#FF8E9E", "#DC0000", "#DC0000");
    } else if (props.isClicked) {
      return styleColors("#d6dbf5", "#4d5b9e", "#293264");
    }
  };

  const styleColors = (backgroundColor, color, borderColor) => {
    return {
      backgroundColor: backgroundColor,
      color: color,
      borderColor: borderColor,
    };
  };

  return (
    <span className="quiz-answer" onClick={props.click} style={styles()}>
      {props.answer}
    </span>
  );
}
