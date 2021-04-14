import styled from "styled-components";

import Text from "components/shared/Text";
import Input from "components/shared/Input";

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledText = styled(Text)`
  margin-right: 5px;
  font-weight: bold;
  flex-shrink: 0;
`;

export const StyledInput = styled(Input).attrs(({ hasBoard }) => ({
  disabled: !hasBoard,
}))`
  height: 30px;
  padding: 0 10px;
  transition: border-color 0.5s;

  ${({ hasBoard }) => !hasBoard && `border-color: transparent;`}
`;
