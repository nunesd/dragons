import { useState } from "react";
import Head from "next/head";
import Cookies from "cookies";
import Cookies2 from "js-cookie";

import Input from "components/shared/Input";
import Button from "components/shared/Button";

import {
  StyledBoard,
  Img,
  LoginContainer,
} from "components/pages/login/styles";

import { useLogin } from "components/pages/login/hooks";

const Home = (props) => {
  const [formData, setFormData] = useState({ user: "", password: "" });
  const { clearValidation, validateForm, doLogin, formIsValid } = useLogin();

  console.log(`coock`, Cookies2.get("user"));

  const onChangeForm = (field) => (value) => {
    clearValidation();
    setFormData((state) => ({ ...state, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm(formData)) {
      doLogin(formData);
    }
  };

  return (
    <LoginContainer>
      <Head>
        <title>Login</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <StyledBoard>
          <Img src="/dragon-logo.jpg" alt="icone de dragão" />
          <Input
            label="Usuário"
            name="user"
            isValid
            value={formData.user}
            onChange={onChangeForm("user")}
          />
          <Input
            label="Senha"
            name="password"
            type="password"
            errotText="Usuário ou senha inválido!"
            isValid={formIsValid}
            value={formData.password}
            onChange={onChangeForm("password")}
          />
          <Button>Acessar</Button>
        </StyledBoard>
      </form>
    </LoginContainer>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const cookies = new Cookies(req, res);

  if (cookies.get("user")) {
    return {
      redirect: {
        permanent: false,
        destination: "/list",
      },
    };
  }

  return {
    props: {},
  };
};

export default Home;
