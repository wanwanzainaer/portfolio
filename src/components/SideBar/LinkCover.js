import React from "react";

import posed from "react-pose";

const Cover = posed.div({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.2 }
});

const LinkCover = props => {
  return <Cover>{props.children}</Cover>;
};
export default LinkCover;
