import React from "react";
import PropTypes from "prop-types";

import { StyledBoard } from "./styles";

const DragonCard = ({ children, onClick, className }) => (
  <StyledBoard className={className} onClick={() => onClick && onClick()}>
    {children}
  </StyledBoard>
);

DragonCard.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default DragonCard;
