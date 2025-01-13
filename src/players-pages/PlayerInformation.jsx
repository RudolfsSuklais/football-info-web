import { useParams } from "react-router-dom";
import boxInfo from "../Data";
import "./PlayersPages.css";

function PlayerInformation() {
  const { playerID } = useParams();
  const player = boxInfo.find((box) => box.playerID === playerID);

  return player ? (
    <div className="players-page">
      <h1>{player.playerName}</h1>
      <img src={player.image} alt={player.title} />
      <div className="players-page-wrapper">
        <div className="players-page-description">
          <p>{player.description}</p>
        </div>
        <div className="players-page-video">
          <iframe
            width="560"
            height="315"
            src={player.video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  ) : (
    <p>Player not found</p>
  );
}

export default PlayerInformation;
