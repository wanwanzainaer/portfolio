import React from "react";

const SideBarItem = props => {
  return (
    <>
      <li>
        <a href="#">
          {props.icon ? (
            <i className="material-icons">{props.icon}</i>
          ) : null}
          {props.text}
        </a>
      </li>
    </>
  );
};
export default SideBarItem;
