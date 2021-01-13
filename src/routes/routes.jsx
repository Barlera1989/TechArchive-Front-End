import React from "react";
import { Switch, Route } from "react-router-dom";

const Route = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="profile"></Route>
      <Route exact path="login"></Route>
      <Route exact path="sign_up"></Route>
      <Route exact path="approve_news"></Route>
      <Route exact path="post_news"></Route>
      <Route exact path="ranking"></Route>
    </Switch>
  );
};
export default Route;
