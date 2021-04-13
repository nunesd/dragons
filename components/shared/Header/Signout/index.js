import React from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";

import { SignoutContainer, StyledText } from "./styles";

const Signout = () => {
  const router = useRouter();

  const handleSignout = () => {
    cookie.set("user", "");
    router.push("/");
  };

  return (
    <SignoutContainer>
      <StyledText onClick={handleSignout}>Sair</StyledText>
    </SignoutContainer>
  );
};

export default Signout;
