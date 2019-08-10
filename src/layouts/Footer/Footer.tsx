import React from "react";
import FooterBottom from "./components/FooterBottom";
import FooterSupportBanner from "./components/FooterSupportBanner";

class Footer extends React.PureComponent {
  public render() {
    return (
      <>
        <FooterSupportBanner />
        <FooterBottom />
      </>
    );
  }
}

export default Footer;
