import React from "react";
import "./App.css";
import Nav from "./Nav";
import Header from "./Header";
import Menu from "./Menu";
import { ThemeProvider } from "../contexts/ThemeContext";
import { NavToggleProvider } from "../contexts/NavContext";

function App() {
  return (
    <ThemeProvider>
      <NavToggleProvider>
        <div className="App">
          <Menu />
          <div style={{ display: "flex", position: "relative" }}>
            <Nav />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Header />
            </div>
          </div>
        </div>
      </NavToggleProvider>
    </ThemeProvider>
  );
}

export default App;
