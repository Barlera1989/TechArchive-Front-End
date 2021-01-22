import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
import publicidade from "../../publicidade3.png";
import axios from "axios";

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

const Header = ({ news, setNews, updateNews }) => {
  const [search, setSearch] = useState("");

  const authenticate = useSelector(
    (state) => state.authenticate.isAuthenticated
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const GoToLogin = () => {
    history.push("/login");
  };

  const GoToSignUp = () => {
    history.push("/sign_up");
  };

  const GoToHome = () => {
    history.push("");
  };

  const GoToPostNews = () => {
    history.push("/post_news");
  };

  const SearchNews = (query) => {
    console.log(news);

    if (news && query !== "") {
      const filtered_news = news.filter((currentNews) => {
        if (currentNews.title.toLowerCase().includes(query.toLowerCase())) {
          return currentNews;
        }
      });

      if (filtered_news.length > 0) {
        console.log(query);
        console.log(filtered_news);
        setNews(filtered_news);
      } else {
        alert("Nenhuma Notícia encontrada!");
        updateNews();
      }
    } else {
      updateNews();
    }
  };

  return (
    <StyledHeader>
      <StyledUpperContent>
        <StyledLogo onClick={() => GoToHome()} />
        <StyledAdsDiv src={publicidade} />
        {!authenticate ? (
          <StyledPublishButton>
            <StyledPublishContent onClick={() => GoToLogin()}>
              Login
            </StyledPublishContent>
            <StyledPublishContent onClick={() => GoToSignUp()}>
              SignUp
            </StyledPublishContent>
          </StyledPublishButton>
        ) : (
          <StyledPublishButton>
            <StyledPublishContent onClick={() => GoToPostNews()}>
              Publish Now
            </StyledPublishContent>
            <StyledPublishContent onClick={() => dispatch(logout())}>
              Log out
            </StyledPublishContent>
          </StyledPublishButton>
        )}
      </StyledUpperContent>
      <StyledNavBar>
        <StyledLeftWing>
          <StyledNavLink onClick={() => GoToHome()}>Home</StyledNavLink>
          <StyledNavLink>Hot News</StyledNavLink>
          <StyledNavLink>Trends</StyledNavLink>
          <StyledNavLink>Hardware</StyledNavLink>
        </StyledLeftWing>
        <StyledSearchDiv>
          <StyledSearchInput
            value={search}
            onChange={(evt) => setSearch(evt.target.value)}
          />
          <StyledSearchImg onClick={() => SearchNews(search)} />
        </StyledSearchDiv>
        <StyledRightWing>
          <StyledNavLink>Security</StyledNavLink>
          <StyledNavLink>Gaming</StyledNavLink>
          <StyledNavLink>Ranking</StyledNavLink>
          <a href="/profile" style={{ marginLeft: -50 }}>
            {" "}
            <StyledNavLink>Profile</StyledNavLink>{" "}
          </a>
        </StyledRightWing>
      </StyledNavBar>
    </StyledHeader>
  );
};

export default Header;
