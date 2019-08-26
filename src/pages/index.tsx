import React from "react";
import { Route, Switch } from "react-router-dom";
import { internalRoutes } from "src/config/routes";
import Manifest from "./about/Manifest";
import NotFound from "./NotFound";

class Pages extends React.PureComponent {
  public render() {
    return (
      <Switch>
        <Route path={internalRoutes.manifest} component={Manifest} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Pages;
