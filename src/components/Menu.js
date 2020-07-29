import "./Menu.css";

import React, { useContext } from "react";
import { NavToggleContext } from "../contexts/NavContext";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { ThemeContext } from "../contexts/ThemeContext";

const Menu = () => {
  const [open, setOpen] = useContext(NavToggleContext);
  const { state } = useContext(ThemeContext);
  console.log();

  return (
    <div className={`menu ${!state.show && "hide"}`}>
      <button
        className="menu__btn"
        style={{ color: state.navTitle, backgroundColor: state.navColor }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {React.createElement(open ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </button>
    </div>
  );
};

export default Menu;
