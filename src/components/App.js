import React from "react";

import "material-icons";
import "materialize-css/dist/css/materialize.min.css";

// import Header from "./Header";
import SideBar from "./SideBar/SideBar";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

//next step add react router
const App = () => {
  return (
    <div>
      <div>
        <SideBar />
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
