import React from "react";
import PropTypes from "prop-types";

import { ErrorText, StyledInput, InputWrapper, Label } from "./styles";

const Input = ({
  isValid,
  label,
  name,
  placeholder,
  value,
  errotText,
  onChange,
  onBlur,
  type,
  className,
  disabled,
}) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <StyledInput
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
        onBlur={({ target: { value } }) => onBlur && onBlur(value)}
        name={name}
        disabled={disabled}
      />
      {isValid === false && <ErrorText>{errotText}</ErrorText>}
    </InputWrapper>
  );
};

Input.propTypes = {
  isValid: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  errotText: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Input;
