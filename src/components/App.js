import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import "material-icons";
import "materialize-css/dist/css/materialize.min.css";

// import Header from "./Header";

import SideBar from "./SideBar/SideBar";
import Dashboard from "./Dashboard/Dashboard";
import Footer from "./Footer";
import history from "../history";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import NotFound from "./NotFound";
import Projects from "./Project/Projects";

//next step add react router
const App = () => {
  return (
    <>
      <HashRouter basename="/">
        <header>
          <SideBar />
        </header>
        <main className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/about" component={AboutMe} />
            <Route path="/project" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/*" component={NotFound} />
            {/* <Route path="/" component={home} /> */}
          </Switch>
        </main>
        <Footer />
      </HashRouter>
    </>
  );
};

export default App;
