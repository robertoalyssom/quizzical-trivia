import "../styles/menu-screen.css";

export default function MenuScreen(props) {
  return (
    <div className="menu-ctn">
      <h2 className="menu-title">Quizzical</h2>
      <p className="menu-text">
        Test your knowledge with this funny quiz. Are you ready?
      </p>
      <button className="btn" onClick={props.startGame}>
        Start quiz
      </button>
    </div>
  );
}
