import styled from "styled-components";

export const StyledBoard = styled.div`
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: none;
  transition: box-shadow 0.5s;
  border-radius: 11px;
  padding: 10px;

  &:hover {
    box-shadow: 0 2px 6px 6px ${({ theme }) => `${theme.colors.blue}a1`};
  }

  & > *:not(:first-child) {
    margin-top: 5px;
  }
`;
