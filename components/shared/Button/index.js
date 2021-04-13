import React from "react";
import PropTypes from "prop-types";

import { StyledButton, StyledText } from "./styles";

const Button = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledText>{children}</StyledText>
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
};

export default Button;
