import stylesheets from "../stylesheets/App.scss";
import React, { useState, useEffect } from "react";
// import getApiData from "../services/api.js";
// import FilterByName from "./FilterByName";
// import CharacterList from "./CharacterList";
// import AboutMe from "./AboutMe";
// import ls from "../services/local-storage";
import { Route, Switch } from "react-router-dom";
// import CharacterDetail from "./CharacterDetail";
import Header from "./Header";
// import Landing from "./Landing";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";
import Main from "./Main";
import Landing from "./Landing";

function App() {
  return (
    <>
      <section className="main-container">
        <div className="landing-cont">
          <Landing />
        </div>
        <div className="hero">
          <Header />
          <SocialMedia />
        </div>
        <div className="body-container">
          <Main />
        </div>

        <Footer />
      </section>
    </>
  );
}
export default App;
