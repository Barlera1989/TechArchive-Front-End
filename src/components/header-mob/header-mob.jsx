import React from "react";
import {
  StyledHeader,
  StyledUpperContent,
  StyledLogo,
  StyledPublishButton,
  StyledNavBar,
  StyledLeftWing,
  StyledRightWing,
  StyledSearchDiv,
  StyledSearchInput,
  StyledSearchImg,
  StyledNavLink,
} from "./header-mob.js";

const HeaderMob = () => {
  return (
    <StyledHeader>
      <StyledUpperContent>
        <StyledLogo />
        <StyledSearchDiv>
          <StyledSearchInput />
          <StyledSearchImg />
        </StyledSearchDiv>
        <StyledPublishButton>
          Login <br></br> SignUp{" "}
        </StyledPublishButton>
      </StyledUpperContent>
      <StyledNavBar>
        <StyledLeftWing>
          <StyledNavLink>Home</StyledNavLink>
          <StyledNavLink>Hot News</StyledNavLink>
          <StyledNavLink>Trends</StyledNavLink>
          <StyledNavLink>Hardware</StyledNavLink>
        </StyledLeftWing>

        <StyledRightWing>
          <StyledNavLink>Security</StyledNavLink>
          <StyledNavLink>Gaming</StyledNavLink>
          <StyledNavLink>Ranking</StyledNavLink>
          <a href="/profile">
            <StyledNavLink>Profile</StyledNavLink>
          </a>
        </StyledRightWing>
      </StyledNavBar>
    </StyledHeader>
  );
};

export default HeaderMob;
