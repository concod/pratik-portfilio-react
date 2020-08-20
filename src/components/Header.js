import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Projects from "./Projects";
import "./Header.css";
import { Row, Col } from "antd";

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
              Meticulous and motivated web developer with a flair for creating
              elegant solutions in the least amount of time. Developed an E-chat
              webapp,an activity logger for different TZs,a Netflix-clone app,
              and a Github profile card using React as a front-end tool and
              express/firebase for managing back-end.
            </p>
            <p>
              Developed 4 landing pages,2 DOM games and a portfolio website
              using vanilla Javascript and CSS. All of my static projects are
              deployed on Netlify.
            </p>
            <p>
              Currently working on a project which requires a complete overhaul
              of the UI.Using Next.JS as a frontend SSR tool and Strapi(headless
              CMS) for content management.
            </p>
            <p>
              Passionate about responsive and elegant web design. Enjoys
              developing scalable web applications with cutting edge
              technologies.
            </p>
            <p>
              This portfolio webapp has been created using modern react tools.I
              have used context api and reducers for managing themes and
              states.The source code can be found{" "}
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
