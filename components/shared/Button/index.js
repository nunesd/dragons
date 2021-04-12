import React from "react";
import PropTypes from "prop-types";

import { StyledButton, Text } from "./styles";

const Button = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <Text>{children}</Text>
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
