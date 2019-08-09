import React from "react";
import { Link } from "react-router-dom";

const SideBarUserView = ({ user }) => {
  // Must Add change the Link and a tag
  return (
    <>
      <li>
        <div className="user-view">
          <div className="background">
            <img
              src={user.backgroundImage}
              alt="userbackground"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <Link to="/about">
            <img className="circle" src={user.userImage} alt="user" />
          </Link>
          <Link to="/about">
            <span className="white-text name">{user.username}</span>
          </Link>
          <a href="mailto:wanwanzainaer@gmail.com">
            <span className="white-text email">
              {user.useremail}{" "}
            </span>
          </a>
        </div>
      </li>
    </>
  );
};

export default SideBarUserView;
