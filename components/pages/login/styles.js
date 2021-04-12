import styled from "styled-components";
import Board from "components/shared/Board";

export const LoginContainer = styled(Board)`
  & > *:not(:first-child) {
    margin-top: 10px;
  }

  && {
    button {
      margin-top: 20px;
    }
  }
`;

export const Img = styled.img`
  max-width: 70px;
`;
