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
        <StyledPublishButton>Publish Now</StyledPublishButton>
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
          <StyledNavLink>Profile</StyledNavLink>
        </StyledRightWing>
      </StyledNavBar>
    </StyledHeader>
  );
};

export default HeaderMob;
