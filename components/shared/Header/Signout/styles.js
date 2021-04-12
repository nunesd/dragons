import styled from "styled-components";

import Text from "components/shared/Text";
import { Container } from "components/shared/CenteredContainers";

export const SignoutContainer = styled(Container)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export const StyledText = styled(Text)`
  font-weight: bold;
`;
