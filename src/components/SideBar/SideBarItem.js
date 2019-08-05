import React from "react";
import { Link } from "react-router-dom";
const SideBarItem = props => {
  return (
    <>
      <li>
        <Link to={props.link}>
          {props.icon ? (
            <i className="material-icons">{props.icon}</i>
          ) : null}
          {props.text}
        </Link>
      </li>
    </>
  );
};
export default SideBarItem;
