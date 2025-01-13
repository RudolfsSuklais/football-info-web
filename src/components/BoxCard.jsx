import React from "react";
import { Button, Card, Typography, Space } from "antd";
import "./BoxCard.css";

const shortenDescription = (description, wordLimit = 20) => {
  const words = description.split(" ");
  if (words.length <= wordLimit) {
    return description;
  }
  return words.slice(0, wordLimit).join(" ") + "...";
  console.log(words);
};

const BoxCard = ({ title, description, image, reverse, isBackground }) => (
  <Card
    hoverable
    className="card-container"
    style={{ background: isBackground ? "#F6F4F0" : "#fff" }}
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
        <Typography.Title level={3} className="card-title">
          {title}
        </Typography.Title>
        <Typography.Paragraph className="card-description">
          {shortenDescription(description)}
        </Typography.Paragraph>
        <Button
          className="card-button"
          href={"/" + title.trim().replace(" ", "-")}
        >
          READ MORE
        </Button>
      </Space>
    </Space>
  </Card>
);

export default BoxCard;
