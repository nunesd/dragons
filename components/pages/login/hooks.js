import { useRouter } from "next/router";
import { useState } from "react";
import cookie from "js-cookie";

export const useLogin = () => {
  const router = useRouter();
  const [state, setState] = useState({ formIsValid: undefined });

  const clearValidation = () => {
    setState((state) => ({ ...state, formIsValid: undefined }));
  };

  const validateForm = ({ user, password }) => {
    const formIsValid = !!user && !!password;
    setState((state) => ({ ...state, formIsValid }));

    return formIsValid;
  };

  const doLogin = async ({ user, password }) => {
    const validation = !!user && !!password;

    if (!validation) {
      setState((state) => ({ ...state, formIsValid: false }));
      return;
    }

    if (
      user !== process.env.NEXT_PUBLIC_USER ||
      password !== process.env.NEXT_PUBLIC_SECRET_PASS
    ) {
      setState((state) => ({ ...state, formIsValid: false }));
      return;
    }

    cookie.set("user", user);
    router.push("/list");
  };

  return {
    doLogin,
    clearValidation,
    validateForm,
    formIsValid: state.formIsValid,
  };
};
