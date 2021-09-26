import React, { useContext } from "react";
import { Row, Col } from "antd";

import { ThemeContext } from "../contexts/ThemeContext";
import Projects from "./Projects";
import "./Header.css";

const Header = () => {
  const { state, dispatch } = useContext(ThemeContext);

  const handleShow = (e) => {
    e.currentTarget.scrollTop > 0.1 * +e.currentTarget.scrollHeight
      ? dispatch({ type: "isShow", payload: false })
      : dispatch({ type: "isShow", payload: true });
  };

  return (
    <Row
      className="header"
      onScroll={handleShow}
      style={{ height: "100vh", overflowY: "scroll" }}
    >
      <Row
        style={{
          width: "100%",
          minHeight: "30vh",
          background: state.headerColor,
          padding: "20px",
        }}
      >
        <Col span={20} xs={{ span: 22 }}>
          <h1
            style={{
              color: state.headerTitle,
              fontWeight: "700",
              borderLeft: `5px solid ${state.navColor}`,
              paddingLeft: "20px",
            }}
          >
            About
          </h1>

          <span
            style={{
              color: state.headerText,
              fontSize: "16px",
              letterSpacing: "1.5px",
              display: "block",
              marginLeft: "26px",
            }}
          >
            <p>
              3+ years of UI / Front End experience in the new web technologies in the front - end side, experience encompassing various facets of web-based application
              development highly adaptable and good team player, well organized, self-starter with technical and interpersonal skills.
            </p>
            <p>
              Experience in working in a Fast paced Agile (Scrum) Development Team to deliver regular updates to business team and project managers
            </p>
            <p>
              Strong focus on Responsive Web Design, compliance with W3C Web Standards, applying best practices and leveraging web development by using
              modern UI/Front-End libraries, frameworks and tools such as HTML4/5, CSS2/3, JavaScript, ReactJs.
            </p>
            <p>
              Currently working on project
              <a
                className="header__link"
                style={{ color: "grey" }}
                href="https://app.joyn.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                JOYNAI
              </a> at Seven Lakes Technologies.
            </p>
            <p>
              This portfolio webapp has been created using modern react tools.The source code can be found{" "}
              <a
                className="header__link"
                style={{ color: "grey" }}
                href="https://github.com/concod/pratik-portfilio-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                here.
              </a>{" "}
            </p>
          </span>
        </Col>
      </Row>
      <Projects />
    </Row>
  );
};

export default Header;
