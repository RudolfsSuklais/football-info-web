import React from "react";

import boxInfo from "../Data";
import "./PlayersPages.css";
function WayneRooney() {
  const rows = [];
  for (let i = 0; i < boxInfo.length; i += 2) {
    rows.push(boxInfo.slice(i, i + 2));
  }
  console.log("Rows array", rows);

  return (
    <div className="container">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map(
            (box, boxIndex) =>
              box.title === "Wayne Rooney" ? (
                <div className="players-page">
                  <h1>{box.title}</h1>
                  <img src={box.image} alt="" />
                  <div className="players-page-wrapper">
                    <div className="players-page-description">
                      <p>{box.description}</p>
                    </div>
                    <div className="players-page-video">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/jpbg-AjUq5Y?si=-eeyc-rdpM2FXkS8"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              ) : null //Neko nerendere
          )}
        </div>
      ))}
    </div>
  );
}

export default WayneRooney;
