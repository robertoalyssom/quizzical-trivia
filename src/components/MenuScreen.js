import "../styles/menu-screen.css";

export default function MenuScreen() {
  return (
    <div className="menu-ctn">
      <h2 className="menu-title">Quizzical</h2>
      <p className="menu-text">
        Test your knowledge with our fun quiz. Just start answering questions.
        Are you ready?
      </p>
      <button className="btn">Start quiz</button>
    </div>
  );
}
