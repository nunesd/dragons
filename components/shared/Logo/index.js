import React from "react";
import PropTypes from "prop-types";

import { Img } from "./styles";

const Logo = ({ onClick }) => (
  <Img onClick={onClick} src="/dragon-logo.jpg" alt="icone de dragão" />
);

Logo.propTypes = {
  onClick: PropTypes.func,
};
export default Logo;
