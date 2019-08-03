import React from "react";
import "./App.css";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

//next step add react router
const App = () => {
  return (
    <div>
      For the first init
      <div>
        <Header />
      </div>
      <div>
        <Dashboard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
