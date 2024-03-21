import React from "react";

function TitleSection({ name, note }) {
  return (
    <div className="title-section">
      <div className="title mt-5 d-flex align-items-center">
        <span></span>
        <h2>{name}</h2>
      </div>
      <div className="info">
        <p>{note ? note : "عطر لسانك بذكر الله"}</p>
      </div>
    </div>
  );
}

export default TitleSection;
