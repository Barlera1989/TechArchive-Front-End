import React from "react";
import {
  StyledHeader,
  StyledLeftWing,
  StyledRightWing,
  StyledSearchDiv,
  StyledSearchInput,
  StyledSearchImg,
} from "./header-desk.js";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLeftWing />
      <StyledSearchDiv>
        <StyledSearchInput />
        <StyledSearchImg />
      </StyledSearchDiv>
      <StyledRightWing />
    </StyledHeader>
  );
};

export default Header;
