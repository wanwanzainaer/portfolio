import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import SideBarUserView from "./SideBarUserView";
import SideBarItem from "./SideBarItem";
import SideBarMenu from "./SideBarMenu";
import LinkCover from "./LinkCover";

import userviewUserImage from "../../asset/Me.jpg";
import userviewBackgroundImage from "../../asset/file017132.jpg";

import githubIcon from "../../asset/github_icon.png";

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
            href="mailto:wanwanzainaer@gmail.com"
            style={{
              color: `white`,
              fontSize: 25
            }}
          >
            <LinkCover>
              <i className="material-icons">email</i> Email
            </LinkCover>
          </a>
        </li>

        {/* Must change the icon to the Github icon */}
        <li>
          <a
            href="https://github.com/wanwanzainaer"
            style={{
              color: `white`,
              fontSize: 25
            }}
          >
            <LinkCover>
              <i className="material-icons">
                <img
                  src={githubIcon}
                  style={{ width: "25px", height: "25px" }}
                />
              </i>{" "}
              Github
            </LinkCover>
          </a>
        </li>
      </ul>
      <SideBarMenu />
    </>
  );
};

export default SideNav;
