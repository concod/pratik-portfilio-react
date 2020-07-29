import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import ReactCardFlip from "react-card-flip";
import { GithubFilled, GlobalOutlined } from "@ant-design/icons";
import { Card, Button } from "antd";
import "./Card.css";

//Flip card
const FlipCard = ({ src, title, link, desc, linkRepo }) => {
  const { state } = useContext(ThemeContext);

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div style={{ margin: "30px" }}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
          <Card
            hoverable
            style={{
              width: 301,
              height: 500,
              position: "relative",
              backgroundColor: state.headerColor,
              boxShadow: "none",
            }}
            cover={<img alt="example" src={src} style={{ width: "300px" }} />}
            onMouseEnter={handleClick}
            onClick={handleClick}
          >
            <span
              style={{
                display: "flex",
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Roboto,sans-serif",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                justifyContent: "center",
                marginTop: "15px",
                color: `${state.headerText}`,
              }}
            >
              {title}
            </span>
          </Card>
        </div>

        <div>
          <Card
            hoverable
            style={{
              width: 301,
              height: 500,
              position: "relative",
              backgroundColor: state.headerColor,
              border: "none",
            }}
            onMouseLeave={handleClick}
            onClick={handleClick}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                height: "400px",
              }}
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Button className="card__btn" style={{ color: "#767070" }}>
                  <GlobalOutlined />
                  Project
                </Button>
              </a>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  color: `${state.headerText}`,
                }}
              >
                {desc}
              </span>
              <a href={linkRepo} target="_blank" rel="noopener noreferrer">
                <Button className="card__btn" style={{ color: "#767070" }}>
                  <GithubFilled /> Code
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;
