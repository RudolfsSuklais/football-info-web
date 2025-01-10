import React from "react";
import BoxCard from "../components/BoxCard";
import boxInfo from "../Data";

function PremierLeague() {
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
              box.title === "Wayne Rooney" ||
              box.title === "Juan Mata" ||
              box.title === "Raheem Sterling" ? (
                <BoxCard
                  key={boxIndex}
                  title={box.title}
                  description={box.description}
                  image={box.image}
                  reverse={rowIndex % 2 !== 0}
                  isBackground={
                    rowIndex % 2 === 0 ? boxIndex === 0 : boxIndex === 1
                  }
                />
              ) : null //Neko nerendere
          )}
        </div>
      ))}
    </div>
  );
}

export default PremierLeague;
