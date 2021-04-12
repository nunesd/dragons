import styled from "styled-components";
import Text from "../Text";

export const StyledButton = styled.button`
  height: 40px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 5px;
  border: none;
  padding: 0 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const StyledText = styled(Text)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;
