import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import SideBarUserView from "./SideBarUserView";
import SideBarItem from "./SideBarItem";

import userviewUserImage from "../../images/IMG_1006.JPG";
import userviewBackgroundImage from "../../images/pexels-photo-414612.jpeg";

const user = {
  userImage: userviewUserImage,
  backgroundImage: userviewBackgroundImage,
  username: "WanWan",
  useremail: "wanwanzainaer@gmail.com"
};

const SideNav = () => {
  useEffect(() => {
    const elem = document.querySelector(".sidenav");
    const instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
    instance.close();
  }, []);
  return (
    <>
      <ul id="slide-out" className="sidenav">
        <SideBarUserView user={user} />
        {/* Must add url to the outside world link for the react router*/}
        <SideBarItem icon="home" text="Home" link="/" />
        <SideBarItem icon="person" text="About me" link="/" />
        <SideBarItem icon="folder" text="Project" link="/" />
        <li>
          <a className="subheader">contact me</a>
        </li>
        <SideBarItem icon="email" text="Email" link="/" />
        {/* Must change the icon to the Github icon */}
        <SideBarItem icon="email" text="Github" link="/" />
      </ul>
      <a href="#" data-target="slide-out" className="sidenav-trigger">
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
    </>
  );
};

export default SideNav;
