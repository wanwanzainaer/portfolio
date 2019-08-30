import React from "react";
const SideBarMenu = () => {
  return (
    <button
      className="btn-floating btn-large waves-effect waves-light red sidenav-trigger"
      data-target="slide-out"
    >
      <i
        className="material-icons"
        style={{
          color: "white",
          backgroundColor: "#2894ff",
          fontSize: 40
        }}
      >
        menu
      </i>
    </button>
  );
};

export default SideBarMenu;
