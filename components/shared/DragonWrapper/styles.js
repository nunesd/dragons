import styled, { css } from "styled-components";

const shadowOnhover = css`
  &:hover {
    box-shadow: 0 2px 6px 6px ${({ theme }) => `${theme.colors.blue}a1`};
  }
`;

export const StyledBoard = styled.div`
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: none;
  transition: box-shadow 0.5s;
  border-radius: 11px;
  padding: 10px;

  ${({ hasShadow }) => hasShadow && shadowOnhover}

  & > *:not(:first-child) {
    margin-top: 5px;
  }
`;
