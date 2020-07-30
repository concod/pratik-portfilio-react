import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Row, Col } from "antd";
import FlipCard from "./Card";
import cardsInfo from "../utils/constants";

const Projects = () => {
  const { state } = useContext(ThemeContext);

  return (
    <Row
      style={{
        padding: "20px",
        backgroundColor: state.projectBody,
      }}
    >
      <Col span={24}>
        <h1
          style={{
            color: state.projectTitle,
            fontWeight: "700",
            borderLeft: `5px solid ${state.navColor}`,
            paddingLeft: "20px",
          }}
        >
          Projects
        </h1>
      </Col>
      <Col
        span={24}
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {cardsInfo.map((cardinfo, index) => {
          return (
            <FlipCard
              key={index}
              src={cardinfo.imgsrc}
              title={cardinfo.title}
              desc={cardinfo.desc}
              link={cardinfo.link}
              linkRepo={cardinfo.linkRepo}
              alt={cardinfo.alt}
            />
          );
        })}
      </Col>
    </Row>
  );
};

export default Projects;
