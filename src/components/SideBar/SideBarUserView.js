import React from "react";

const SideBarUserView = ({ user }) => {
  // Must Add change the Link and a tag
  return (
    <>
      <li>
        <div className="user-view">
          <div className="background">
            <img src={user.backgroundImage} alt="userbackground" />
          </div>
          <a href="#user">
            <img className="circle" src={user.userImage} alt="user" />
          </a>
          <a href="#name">
            <span className="white-text name">{user.username}</span>
          </a>
          <a href="#email">
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
