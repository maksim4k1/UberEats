import React from "react";
import { Redirect, Route, Switch } from "react-router";
import routers from "../../scripts/routers";

function AppRouters () {
  return(
    <Switch>
      {
        routers.map((router, index) => {
          return <Route key={index} {...router} />
        })
      }
      <Redirect to="/error/404"/>
    </Switch>
  );
}

export default AppRouters;