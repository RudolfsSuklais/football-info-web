import React from "react";
import BoxCard from "../components/BoxCard";
import boxInfo from "../Data";
import LeagueData from "../LeagueData";

function PremierLeague() {
  const BoxInfoDisplay = boxInfo.map((player) => {
    const league = LeagueData.find(
      (league) => league.leagueID === player.leagueID
    );
    return {
      ...player,
      leagueName: league ? league.leagueName : "Unknown League",
    };
  });

  const rows = [];
  for (let i = 0; i < BoxInfoDisplay.length; i += 2) {
    rows.push(BoxInfoDisplay.slice(i, i + 2));
  }

  return (
    <>
      <h1>Premier League</h1>
      <div className="container">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map(
              (box, boxIndex) =>
                box.leagueID == 3 ? (
                  <BoxCard
                    playerID={box.playerID}
                    key={boxIndex}
                    playerName={box.playerName}
                    description={box.description}
                    image={box.image}
                    reverse={rowIndex % 2 !== 0}
                    isBackground={
                      rowIndex % 2 === 0 ? boxIndex === 0 : boxIndex === 1
                    }
                    leagueName={box.leagueName}
                  />
                ) : null //Neko nerendere
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default PremierLeague;
