import React from "react";
import PropTypes from "prop-types";

import { StyledContainer } from "./styles";

const IconList = ({ onClick }) => (
  <StyledContainer>
    <i
      className="fa fa-eye"
      onClick={() => {
        onClick("view");
      }}
    ></i>
    <i
      className="fa fa-pencil"
      onClick={() => {
        onClick("edit");
      }}
    ></i>
    <i
      className="fa fa-trash-o"
      onClick={() => {
        onClick("delete");
      }}
    ></i>
  </StyledContainer>
);

IconList.propTypes = {
  onClick: PropTypes.func,
};

export default IconList;
