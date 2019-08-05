import React from "react";
const SideBarMenu = () => {
  return (
    <a
      className="btn-floating btn-large waves-effect waves-light red sidenav-trigger"
      data-target="slide-out"
    >
      <i
        className="material-icons"
        style={{
          color: "white",
          backgroundColor: "red",
          fontSize: 40
        }}
      >
        menu
      </i>
    </a>
  );
};

export default SideBarMenu;
