import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./styles";

const Board = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

Board.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Board;
