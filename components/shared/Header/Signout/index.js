import React from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";

import { SignoutContainer, StyledText } from "./styles";

const Signout = () => {
  const router = useRouter();
  return (
    <SignoutContainer>
      <StyledText onClick={() => {}}>Sair</StyledText>
    </SignoutContainer>
  );
};

export default Signout;
