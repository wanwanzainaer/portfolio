import React from "react";
import { Link } from "react-router-dom";
import LinkCover from "./LinkCover";

const SideBarItem = props => {
  const textColor = props.textColor ? props.textColor : "white";
  return (
    <>
      <li>
        <Link
          to={props.link}
          style={{
            color: `${textColor}`,
            fontSize: 25
          }}
        >
          <LinkCover>
            {props.icon ? (
              <i
                className="material-icons"
                style={{ color: `${props.iconColor}` }}
              >
                {props.icon}
              </i>
            ) : null}
            {"   "}
            {props.text}
          </LinkCover>
        </Link>
      </li>
    </>
  );
};
export default SideBarItem;
