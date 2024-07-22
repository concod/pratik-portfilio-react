import React, { useContext } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { routes } from "utils/routes";
import { SunOutlined, MoonOutlined, HomeOutlined } from "@ant-design/icons";
import { Button } from "antd";

function NavBar({}) {
  const { state, dispatch } = useContext(ThemeContext);

  const content = [{ name: "Questions", path: `${routes.questions.js.path}` }];

  const isDark = state.themeCurrent === "dark";

  const toggleTheme = () => {
    isDark
      ? dispatch({ type: "light", payload: "glossyBlue" })
      : dispatch({ type: "dark", payload: "dark" });
  };

  return (
    <nav className={`navbar ${isDark ? "dark" : "light"}`}>
      <div className="left">
        <HomeOutlined /> <Link to={routes.home.path}>Home</Link>
      </div>
      <div className="right">
        {content.map((item, i) => (
          <Link key={item.name} to={item.path}>
            {item.name}
          </Link>
        ))}
        <Button
          className={isDark ? "bt-dark" : "bt-light"}
          onClick={toggleTheme}
          style={{ color: isDark ? "white" : "unset" }}
          type="text"
          icon={isDark ? <SunOutlined size={"large"} /> : <MoonOutlined />}
        />
        {/* <div className="theme-icon">{}</div> */}
      </div>
    </nav>
  );
}

export default NavBar;
