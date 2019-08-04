import React from "react";
// tslint:disable-next-line import-name
import Pages from "src/pages";

interface IProps {}

class Body extends React.Component<IProps> {
  public render() {
    return (
      <React.Fragment>
        <main>
          <Pages />
        </main>
      </React.Fragment>
    );
  }
}

export default Body;
