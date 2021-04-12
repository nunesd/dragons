import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FullContainer = styled(Container).attrs(() => ({ as: "main" }))`
  width: 100vw;
  height: 100vh;
`;
