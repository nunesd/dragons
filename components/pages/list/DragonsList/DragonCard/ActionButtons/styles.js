import styled from "styled-components";

import { Container } from "components/shared/CenteredContainers";

export const StyledContainer = styled(Container)`
  & > * {
    margin-right: 10px;
  }
`;
