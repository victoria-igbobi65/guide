import React from "react";
import "./note.css";

function Note() {
  return (
    <div className="container">
      <div className="header">
        <div className="search-bar">
          <div className="menu-icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="content">{/* Your page content goes here */}</div>
      <div className="plus-icon">
        <i className="fa fa-plus">+</i>
      </div>
    </div>
  );
}

export default Note;
