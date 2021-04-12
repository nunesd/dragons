import styled from "styled-components";
import { Container } from "../CenteredContainers";

export const Wrapper = styled(Container)`
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 11px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 6px 1px rgb(0 0 0 / 20%);
`;
