import React from "react";
import Link from "next/link";

import { Logo } from "../Logo";

const Header = () => {
  return (
    <div>
      <Link href="/">
        <Logo />
      </Link>
    </div>
  );
};

export default Header;
