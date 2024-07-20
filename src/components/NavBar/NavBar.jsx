import React, { useContext } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { routes } from "utils/routes";

function NavBar({}) {
  const { state } = useContext(ThemeContext);

  const content = [
    { name: "JS Questions", path: `${routes.questions.js.path}` },
    { name: "React Questions", path: `${routes.questions.react.path}` },
  ];

  return (
    <nav
      className={`navbar ${state.themeCurrent === "dark" ? "dark" : "light"}`}
    >
      <div className="left">
        <Link to={routes.home.path}>About</Link>
      </div>
      <div className="right">
        {content.map((item, i) => (
          <Link key={item.name} to={item.path}>
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
