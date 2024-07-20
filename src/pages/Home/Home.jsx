import React from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";

import "./Home.scss";

function Home() {
  return (
    <div className="home">
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
  );
}

export default Home;
