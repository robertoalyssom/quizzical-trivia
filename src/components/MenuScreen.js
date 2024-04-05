import "../styles/menu-screen.css";
import { useState, useEffect } from "react";
import CategoriesSelection from "./CategoriesSelection";

export default function MenuScreen(props) {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    props.selectCategory(selectedValue);
  }, [selectedValue]);

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="menu-ctn">
      <h2 className="menu-title">Quizzical</h2>
      <p className="menu-text">
        Test your knowledge with this funny quiz. Are you ready?
      </p>
      <CategoriesSelection
        selectedValue={selectedValue}
        handleSelectChange={handleSelectChange}
      />
      <button className="btn" onClick={props.startGame}>
        Start quiz
      </button>
    </div>
  );
}
