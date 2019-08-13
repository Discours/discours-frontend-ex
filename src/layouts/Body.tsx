import React from "react";
import Pages from "src/pages";
import Footer from "./Footer";

class Body extends React.PureComponent {
  public render() {
    return (
      <>
        <main>
          <Pages />
        </main>
        <Footer />
      </>
    );
  }
}

export default Body;
