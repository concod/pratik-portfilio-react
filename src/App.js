import React from "react";
import "./App.css";

import { ThemeProvider } from "./contexts/ThemeContext";
import { NavToggleProvider } from "./contexts/NavContext";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Questions from "./pages/Questions/Questions";
import { routes } from "./utils/routes";

function App() {
  return (
    <ThemeProvider>
      <NavToggleProvider>
        <BrowserRouter>
          <div className="App">
            <NavBar routes={routes} />
            <Routes>
              <Route path={routes.home.path} element={<Home />} />
              <Route path={routes.questions.path} element={<Questions />} />
              <Route path={routes.questions.js.path} element={<Questions />} />
              <Route
                path={routes.questions.react.path}
                element={<Questions />}
              />

              {/* <Menu /> */}
            </Routes>
          </div>
        </BrowserRouter>
      </NavToggleProvider>
    </ThemeProvider>
  );
}

export default App;
