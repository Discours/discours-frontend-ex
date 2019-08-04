import React from "react";
import Container from "src/components/discours-ui-kit/Container";
import Typography from "src/components/discours-ui-kit/Typography";
import bannerBig from "./banner-big.jpg";
import bannerSmall from "./banner-small.jpg";
import classes from "./FooterSupportBanner.css";

class FooterSupportBanner extends React.Component {
  public render() {
    return (
      <Container>
        <div className={classes.container}>
          <div className={classes.left}>
            <Typography variant="heading3" className={classes.heading}>
              Дискурс существует благодаря вашему участию!
            </Typography>
            <Typography>Ура</Typography>
          </div>
          <div className={classes.right}>
            <picture>
              <source
                className={classes.image}
                srcSet={`${bannerSmall}, ${bannerBig} 2x`}
              />
              <img
                className={classes.image}
                alt="Винтажный баннер с людьми"
                src={bannerBig}
              />
            </picture>
          </div>
        </div>
      </Container>
    );
  }
}

export default FooterSupportBanner;
