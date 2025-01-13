import React from "react";
import "./PageNotFound.css";
import { Button } from "antd";
function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className="page-not-found-container">
        <div className="page-not-found-btn-container">
          <Button className="page-not-found-btn" href={"/"}>
            <i class="fa-solid fa-arrow-left"></i> Home
          </Button>
        </div>
        <div className="page-not-found-text">
          <p>Page Not Found!</p>
        </div>
        <div></div>
      </div>
      <div className="page-not-found-image">
        <img
          src="https://img.freepik.com/premium-photo/football-referee-showing-red-card-displeased-player-isolated-white-background_489646-5177.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default PageNotFound;
