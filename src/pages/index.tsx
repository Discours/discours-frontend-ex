import * as React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";

class Pages extends React.PureComponent {
  public render() {
    return (
      <Switch>
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Pages;
