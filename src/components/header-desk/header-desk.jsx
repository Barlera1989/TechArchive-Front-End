import React from "react";
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions'
import publicidade from "../../publicidade3.png"

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
  StyledPublishContent,
} from "./header-desk.js";

const Header = () => {
  const authenticate = useSelector((state) => state.authenticate.isAuthenticated)
  const dispatch = useDispatch();
  const history = useHistory()

  const GoToLogin = () => {
    history.push('/login')
  }

  const GoToSignUp = () => {
    history.push('/sign_up')
  }

  const GoToHome = () => {
    history.push('')
  }


  const GoToPostNews = () => {
    history.push('/post_news')
  }


  return (
    <StyledHeader>
      <StyledUpperContent>
        <StyledLogo />
        <StyledAdsDiv src={publicidade} />
        {!authenticate ?
          <StyledPublishButton>
            <StyledPublishContent onClick={() => GoToLogin()}>Login</StyledPublishContent>
            <StyledPublishContent onClick={() => GoToSignUp()}>SignUp</StyledPublishContent>
          </StyledPublishButton>
          :

          <StyledPublishButton>
            <StyledPublishContent onClick={() => GoToPostNews()}>Publish Now</StyledPublishContent>
            <StyledPublishContent onClick={() => dispatch(logout())}>Log out</StyledPublishContent>
          </StyledPublishButton>}

      </StyledUpperContent>
      <StyledNavBar>
        <StyledLeftWing>
          <StyledNavLink onClick={() => GoToHome()}>Home</StyledNavLink>
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
