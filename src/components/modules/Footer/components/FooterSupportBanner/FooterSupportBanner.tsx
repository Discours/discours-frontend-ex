import React from "react";
import Button from "src/components/discours-ui-kit/Button";
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
            <div className={classes.buttons}>
              <Button to="help" variant="link-underline">
                Поддержать Дискурс
              </Button>{" "}
              <Button variant="link-underline">Стать автором</Button>
            </div>
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
