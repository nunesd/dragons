import React from "react";
import PropTypes from "prop-types";

import { StyledBoard } from "./styles";

const DragonCard = ({ children, onClick, className }) => (
  <StyledBoard
    className={className}
    hasShadow={!!onClick}
    onClick={() => onClick && onClick()}
  >
    {children}
  </StyledBoard>
);

DragonCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default DragonCard;
