import styled from "styled-components";

import { Container } from "components/shared/CenteredContainers";

export const StyledContainer = styled(Container)`
  height: 40px;
  & > * {
    margin-right: 15px;
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
    font-size: 18px;
  }
`;
