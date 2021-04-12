import styled, { css } from "styled-components";

export const Label = styled.label.attrs((props) => ({
  htmlFor: `form-${props.name}`,
}))`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input.attrs((props) => ({
  id: `form-${props.name}`,
}))`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: solid 1px ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  letter-spacing: -0.1px;
  padding: 10px 15px;
`;

export const ErrorText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.error};
  margin-top: 3px;
`;
export const InputWrapper = styled.div``;
