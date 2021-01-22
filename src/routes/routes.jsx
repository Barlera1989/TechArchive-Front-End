import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import SignUp from "../pages/sign-up";
import CreateNews from "../pages/create-news";
import Header from "../components/header-desk/header-desk.jsx";
import HeaderMob from "../components/header-mob/header-mob.jsx";
import MainPage from "../components/mainPage";
import NewsPage from "../components/newsPage";
import axios from "axios";
import Profile from "../pages/profile";

const Routes = () => {
  const [allNews, setAllNews] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    GetNewsAndUser();
  }, []);

  const GetNewsAndUser = () => {
    const headers = { "Access-Control-Allow-Origin": "*" };
    axios
      .get(`https://tech-archive-project.herokuapp.com/news/`, headers)
      .then((resp) => {
        setAllNews(resp.data.data);
      })
      .catch((error) => {
        // erro no request
        console.log(error);
      });

    axios
      .get(`https://tech-archive-project.herokuapp.com/user/all`, headers)
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Switch>
      <Route exact path="/">
        {window.innerWidth > 640 ? (
          <Header
            news={allNews}
            setNews={setAllNews}
            updateNews={GetNewsAndUser}
          />
        ) : (
          <HeaderMob />
        )}
        <MainPage users={users} news={allNews} />
      </Route>
      <Route path="/newsId/:id">
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
