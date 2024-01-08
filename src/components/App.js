import stylesheets from "../stylesheets/App.scss";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
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
