import React from "react";
import {
  HeaderDiv,
  NameRole,
  Name,
  Role,
  MainDiv,
  BodyDiv
} from "./style";
import Card from "./card";
import Avatar from "../../assets/images/avatar.png";
const ProfileLayout = () => {
  return (
    <MainDiv>
      <HeaderDiv>
        <img
          src={Avatar} alt=''
          style={{ width: 150, height: 150, marginTop: 50, marginLeft: 50 }}
        />
        <NameRole>
          <Name style={{ marginTop: 70, marginLeft: 30 }}>Maicon Lourenço</Name>
          <Role style={{ marginLeft: 30, marginTop: -30 }}>Developer</Role>
        </NameRole>
      </HeaderDiv>
      <BodyDiv>
        <Card />
        <Card />
        <Card />
        <Card />
      </BodyDiv>
    </MainDiv>
  );
};

export default ProfileLayout;
