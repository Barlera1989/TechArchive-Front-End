import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import SignUp from "../pages/sign-up";
import CreateNews from "../pages/create-news";
import Header from "../components/header-desk/header-desk.jsx";
import HeaderMob from "../components/header-mob/header-mob.jsx";
import MainPage from "../components/mainPage";
import NewsPage from "../components/newsPage";
import Profile from "../pages/profile";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        {window.innerWidth > 640 ? <Header /> : <HeaderMob />}
        <MainPage />
      </Route>
      <Route exact path="/newsId">
        {window.innerWidth > 640 ? <Header /> : <HeaderMob />}
        <NewsPage />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/sign_up">
        <SignUp />
      </Route>
      <Route exact path="/approve_news"></Route>
      <Route exact path="/post_news">
        <CreateNews />
      </Route>
      <Route exact path="/ranking"></Route>
    </Switch>
  );
};
export default Routes;
