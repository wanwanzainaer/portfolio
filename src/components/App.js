import React from "react";
import { Router, Route } from "react-router-dom";

import "material-icons";
import "materialize-css/dist/css/materialize.min.css";

// import Header from "./Header";

import SideBar from "./SideBar/SideBar";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import history from "../history";

const Home = () => {
  return <h1>Home</h1>;
};
const AboutMe = () => {
  return <h1>About me</h1>;
};
const Poject = () => {
  return <h1>Project </h1>;
};

//next step add react router
const App = () => {
  return (
    <>
      <Router history={history}>
        <header>
          <SideBar />
        </header>
        <main className="container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutMe} />
          <Route path="/project" component={Poject} />
          {/* <Route path="/" component={home} /> */}
        </main>
        <footer
          className="page-footer"
          style={{ backgroundColor: "transparent" }}
        >
          <Footer />
        </footer>
      </Router>
    </>
  );
};

export default App;
