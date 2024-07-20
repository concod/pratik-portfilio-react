import React, { useContext, useState, useEffect } from "react";
import "./Nav.css";
import profile from "../img/profile.jpg";
import resume from "../utils/Pratik resume.pdf";
import { Typography, Button, Switch } from "antd";
import { ThemeContext } from "../contexts/ThemeContext";
import { themes } from "../utils/themes";
import {
  LinkedinFilled,
  FacebookFilled,
  InstagramFilled,
  GithubFilled,
  DownloadOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";
import { NavToggleContext } from "../contexts/NavContext";
const { Title } = Typography;

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { state, dispatch } = useContext(ThemeContext);
  const [navState] = useContext(NavToggleContext);

  useEffect(() => {
    darkMode
      ? dispatch({ type: "dark", payload: "dark" })
      : dispatch({ type: "light", payload: "glossyBlue" });
  }, [darkMode]);

  return (
    <div
      className={`nav__col ${!navState && "unhide"} ${navState && "hide"}  `}
      style={{ backgroundColor: state.navColor, color: state.navText }}
    >
      <Title className="nav__title" style={{ color: state.navTitle }}>
        Pratik Vermun
      </Title>
      <img src={profile} alt="Profile" />
      <div className="nav__text">
        Hi, my name is Pratik vermun and I'm a professional web developer.
        Welcome to my portfolio website.
      </div>
      <div className="nav__social">
        <a
          href="https://www.linkedin.com/in/pratik-vermun-b72795146/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinFilled
            style={{ color: state.navIcon }}
            className="nav__social__icons"
          />
        </a>
        <a
          href="https://github.com/concod"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubFilled
            style={{ color: state.navIcon }}
            className="nav__social__icons"
          />
        </a>
        <a
          href="https://www.facebook.com/pratik.vermun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookFilled
            style={{ color: state.navIcon }}
            className="nav__social__icons"
          />
        </a>
        <a
          href="https://www.instagram.com/the_pensive_wanderer2019/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramFilled
            style={{ color: state.navIcon }}
            className="nav__social__icons"
          />
        </a>
      </div>

      <a href={resume} download="Pratik resume.pdf">
        <Button
          size={"large"}
          className="nav__resumebtn"
          style={{ color: state.navText }}
          icon={<DownloadOutlined style={{ color: state.navText }} />}
        >
          Resume
        </Button>
      </a>

      <div className="nav__darkMode">
        <h2 style={{ color: state.navText }}> Dark Mode</h2>
        <Switch onChange={(e) => setDarkMode(!darkMode)} />
      </div>

      <div
        className="nav__themeSelect "
        style={{
          right: state.show ? "-170px" : "-290px",
        }}
      >
        <BgColorsOutlined
          style={{
            fontSize: "30px",
            backgroundColor: "rgba(0,0,0,.9)",
            borderRadius: "5px 0 0 5px",
            padding: "5px",
            color: "white",
          }}
        />
        <div
          className="nav__icons "
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "160px",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            justifyContent: "center",
            borderRadius: "5px 0 0 5px",
            padding: "10px",
          }}
        >
          {Object.entries(themes).map(([key, value]) => {
            return (
              key !== "dark" &&
              value.navColor && (
                <div
                  key={key}
                  className="nav__themeBtn"
                  style={{ backgroundColor: value.navColor }}
                  onClick={(e) => {
                    dispatch({ type: "light", payload: key });
                  }}
                ></div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nav;
