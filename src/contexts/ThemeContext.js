import React, { createContext, useReducer } from "react";
import { themeReducer } from "../components/Reducers";

export const ThemeContext = createContext();
const currentTheme = {
  navColor: "#e0d7ce",
  navText: "#4c4c4c",
  navTitle: "#4c4c4c",
  navIcon: "#4c4c4c",
  headerColor: "#454641",
  headerTitle: "#fcfcfc",
  headerText: "#fcfcfc",
  projectTitle: "#fcfcfc",
  projectBody: "lightgrey",
  show: true,
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, currentTheme);

  return (
    <ThemeContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
