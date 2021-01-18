import React from "react";
import { MainDiv, Title, SubTitle } from "../../styles";
import SignUpForm from "../signup-form";

const LayoutSignUp = () => {
  return (
    <MainDiv>
      <Title>Sign Up </Title>
      <SubTitle> to receive news, publish and comment</SubTitle>
      <SignUpForm />
    </MainDiv>
  );
};

export default LayoutSignUp;
