import React from "react";
import {
  StyledHeader,
  StyledUpperContent,
  StyledLogo,
  StyledAdsDiv,
  StyledPublishButton,
  StyledNavBar,
  StyledLeftWing,
  StyledRightWing,
  StyledSearchDiv,
  StyledSearchInput,
  StyledSearchImg,
  StyledNavLink,
} from "./header-desk.js";

const Header = () => {
  return (
    <StyledHeader>
      <StyledUpperContent>
        <StyledLogo />
        <StyledAdsDiv />
        <StyledPublishButton>Publish Now</StyledPublishButton>
      </StyledUpperContent>
      <StyledNavBar>
        <StyledLeftWing>
          <StyledNavLink>Home</StyledNavLink>
          <StyledNavLink>Hot News</StyledNavLink>
          <StyledNavLink>Trends</StyledNavLink>
          <StyledNavLink>Hardware</StyledNavLink>
        </StyledLeftWing>
        <StyledSearchDiv>
          <StyledSearchInput />
          <StyledSearchImg />
        </StyledSearchDiv>
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

export default Header;
