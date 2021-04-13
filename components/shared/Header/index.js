import React from "react";
import { useRouter } from "next/router";

import Signout from "./Signout";
import Logo from "../Logo";

import { LoginContainer, StyledText } from "./styles";

const Header = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <LoginContainer>
      <Logo onClick={handleClick} />
      <Signout />
    </LoginContainer>
  );
};

export default Header;
