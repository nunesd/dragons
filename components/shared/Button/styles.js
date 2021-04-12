import styled from "styled-components";

export const StyledButton = styled.button`
  height: 40px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 5px;
  border: none;
  font-size: 14px;
  padding: 0 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  margin: 0;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
`;
