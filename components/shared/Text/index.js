import styled from "styled-components";

const Text = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`;

export default Text;
