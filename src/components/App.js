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
// import Landing from "./Main";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";
import Main from "./Main";

function App() {
  // const charsLocalStorageData = ls.get("chars", []);
  // const [chars, setChars] = useState(charsLocalStorageData);
  // const [filterName, setFilterName] = useState(ls.get("filterName", ""));

  //useStates

  // useEffect(() => {
  //   if (chars.length === 0) {
  //     getApiData().then((charsData) => {
  //       setChars(charsData);
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   ls.set("chars", chars);
  // }, [chars]);
  // console.log(chars);
  //handlers

  // const handleFilter = (ev) => {
  //   setFilterName(ev.target.value);
  // };

  // //render
  // const filteredChars = chars.filter((char) => {
  //   return char.name.toLowerCase().includes(filterName.toLowerCase());
  // });

  // const renderCharDetail = (props) => {
  //   const routeCharId = props.match.params.id;
  //   let foundChar = chars.find((element) => element.id === Number(routeCharId));
  //   if (foundChar !== undefined) {
  //     return <CharacterDetail char={foundChar} />;
  //   } else {
  //     return <p>Sorry, but this character doesn't exist</p>;
  //   }
  // };

  return (
    <>
      <section className="main-container">
        <div className="hero">
          <Header />
          <Navbar />
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
