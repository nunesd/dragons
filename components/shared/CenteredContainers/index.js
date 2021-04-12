import styled, { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  ${flexCenter}
`;

export const FullContainer = styled.div.attrs(() => ({ as: "main" }))`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  padding: 20px;
`;
