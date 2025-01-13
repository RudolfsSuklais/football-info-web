import React from "react";
import { Card, Typography, Space } from "antd";
import "./BoxCard.css";
import { Link } from "react-router-dom";

const shortenDescription = (description, wordLimit = 20) => {
  const words = description.split(" ");
  if (words.length <= wordLimit) {
    return description;
  }

  return words.slice(0, wordLimit).join(" ") + "...";
};

const BoxCard = ({
  playerID,
  playerName,
  description,
  image,
  reverse,
  isBackground,
  leagueName,
}) => (
  <Card
    hoverable
    className="card-container"
    style={{ background: isBackground ? "#333" : "#eee" }}
  >
    <Space
      className="space-content"
      align="center"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: reverse ? "row-reverse" : "row",
      }}
    >
      <img alt="image" src={image} className="card-image" />
      <Space direction="vertical" className="card-content">
        <Typography.Title
          level={3}
          className="card-title"
          style={{ color: isBackground ? "#79D7BE" : "#333" }}
        >
          {playerName}
        </Typography.Title>
        <Typography.Text
          className="league-name"
          style={{ color: isBackground ? "#79D7BE" : "#666", fontSize: "14px" }}
        >
          League: {leagueName}
        </Typography.Text>
        <Typography.Paragraph
          className="card-description"
          style={{ color: isBackground ? "#eee" : "#333" }}
        >
          {shortenDescription(description)}
        </Typography.Paragraph>
        <Link to={"/" + playerID}>
          <button
            className={isBackground ? "card-button-dark" : "card-button-bright"}
          >
            READ MORE
          </button>
        </Link>
      </Space>
    </Space>
  </Card>
);

export default BoxCard;
