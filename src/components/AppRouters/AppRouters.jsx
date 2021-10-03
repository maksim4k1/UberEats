import React from "react";
import { Redirect, Route, Switch } from "react-router";
import routers from "../../routers";

function AppRouters () {
  return(
    <Switch>
      {
        routers.map(router => {
          return <Route {...router} />
        })
      }
      <Redirect to="/error/404"/>
    </Switch>
  );
}

export default AppRouters;