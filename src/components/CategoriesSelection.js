import React from "react";

export default function CategoriesSelection(props) {
  const categories = [
    "General Knowledge",
    "Books",
    "Film",
    "Music",
    "Musicals & Theatres",
    "Television",
    "Video Games",
    "Board Games",
    "Science & Nature",
    "Computers",
    "Mathematics",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Politics",
    "Art",
    "Celebrities",
    "Animals",
    "Vehicles",
    "Entertainment: Comics",
    "Science: Computers",
    "Entertainment: Japanese Anime & Manga",
    "Entertainment: Cartoon & Animations",
  ];

  const optionElements = categories.map((category, i) => (
    <option value={i + 9} key={i}>
      {category}
    </option>
  ));

  return (
    <div className="menu-select_ctn">
      <label className="menu-select_label">
        Select Categories
        <select value={props.selectedValue} onChange={props.handleSelectChange}>
          <option value={""}>Any category</option>
          {optionElements}
        </select>
      </label>
    </div>
  );
}
