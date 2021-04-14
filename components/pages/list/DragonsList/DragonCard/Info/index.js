import React from "react";
import PropTypes from "prop-types";

import { StyledText, StyledInput, Row } from "./styles";

const Info = ({ id, value, label, field, onChange, isEditable, isValid }) => {
  return (
    <Row>
      <StyledText>{`${label}:`}</StyledText>
      <StyledInput
        name={field + id}
        onChange={(value) => onChange(field, value)}
        hasBoard={isEditable}
        value={value}
        isValid={isValid}
        errotText="valor inválido"
      />
    </Row>
  );
};

Info.propTypes = {
  validation: PropTypes.object,
  onChange: PropTypes.func,
  label: PropTypes.string,
  field: PropTypes.string,
  isEditable: PropTypes.bool,
  isValid: PropTypes.bool,
  id: PropTypes.string,
  value: PropTypes.string,
};

export default Info;
