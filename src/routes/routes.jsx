import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import SignUp from "../pages/sign-up";
import CreateNews from "../pages/create-news";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/profile"></Route>
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
