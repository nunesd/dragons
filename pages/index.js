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
  const [isLogged] = useLocalStorageState("isLogged", false);
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      router.push("/login");
    }
  }, [isLogged]);

  console.log(isLogged, props);
  return <Title>My page</Title>;
}

export async function getServerSideProps(ctx) {
  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
}
