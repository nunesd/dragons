import React from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";

import Signout from "./Signout";
import Logo from "../Logo";

import { LoginContainer, StyledText } from "./styles";

const Header = () => {
  const router = useRouter();
  return (
    <LoginContainer
      onClick={() => {
        debugger;
        cookie.set("user", "");
        router.push("/");
      }}
    >
      <Logo />
      <Signout />
    </LoginContainer>
  );
};

export default Header;
