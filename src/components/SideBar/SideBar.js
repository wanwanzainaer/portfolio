import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import SideBarUserView from "./SideBarUserView";
import SideBarItem from "./SideBarItem";
import SideBarMenu from "./SideBarMenu";

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
      <ul
        id="slide-out"
        className="sidenav"
        style={{ backgroundColor: "darkslategray" }}
      >
        <SideBarUserView user={user} />
        <SideBarItem
          icon="home"
          text="Home"
          link="/"
          iconColor="white"
          textColor="white"
        />
        <SideBarItem
          icon="person"
          text="About me"
          link="/about"
          iconColor="yellow"
          textColor="white"
        />
        <SideBarItem
          icon="build"
          text="Skills"
          link="/skills"
          iconColor="red"
          textColor="white"
        />
        <SideBarItem
          icon="code"
          text="Project"
          link="/project"
          iconColor="red"
          textColor="white"
        />
        <li>
          <a
            className="subheader"
            style={{ color: "white", fontSize: 20 }}
          >
            contact me
          </a>
        </li>
        <SideBarItem icon="email" text="Email" link="/" />
        {/* Must change the icon to the Github icon */}
        <SideBarItem icon="email" text="Github" link="/" />
      </ul>
      <SideBarMenu />
    </>
  );
};

export default SideNav;
