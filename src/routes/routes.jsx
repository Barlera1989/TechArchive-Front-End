import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../components/header-desk/header-desk.jsx";
import HeaderMob from "../components/header-mob/header-mob.jsx";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        {window.innerWidth > 640 ? <Header /> : <HeaderMob />}
      </Route>
      <Route exact path="profile"></Route>
      <Route exact path="login"></Route>
      <Route exact path="sign_up"></Route>
      <Route exact path="approve_news"></Route>
      <Route exact path="post_news"></Route>
      <Route exact path="ranking"></Route>
    </Switch>
  );
};
export default Routes;
