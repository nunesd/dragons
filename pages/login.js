import styled from "styled-components";
import CryptoJS from "crypto-js";
import useLocalStorageState from "../helpers/useLocalStorageState";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home(props) {
  return <Title>My page</Title>;
}
