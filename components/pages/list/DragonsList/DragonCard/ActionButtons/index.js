import React from "react";
import PropTypes from "prop-types";

import Button from "components/shared/Button";

import { StyledContainer } from "./styles";

const ActionButtons = ({ onClick }) => (
  <StyledContainer>
    <Button
      onClick={() => {
        onClick("cancel");
      }}
    >
      Cancelar
    </Button>
    <Button
      onClick={() => {
        onClick("save");
      }}
    >
      Salvar
    </Button>
  </StyledContainer>
);

ActionButtons.propTypes = {
  onClick: PropTypes.func,
};

export default ActionButtons;
