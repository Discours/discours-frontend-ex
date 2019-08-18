import classnames from "classnames";
import React from "react";
import Button from "src/components/discours-ui-kit/Button";
import Container from "src/components/discours-ui-kit/Container";
import Typography from "src/components/discours-ui-kit/Typography";
import Visible from "src/components/discours-ui-kit/Visible";
import bannerBig from "./banner-big.jpg";
import bannerSmall from "./banner-small.jpg";
import classes from "./FooterSupportBanner.css";

class FooterSupportBanner extends React.PureComponent {
  public render() {
    return (
      <Container>
        <div className={classes.container}>
          <div className={classes.left}>
            <Visible upFrom="sm">
              <Typography
                size="heading3"
                font="primary-bold"
                className={classes.heading}>
                Дискурс существует благодаря вашему участию!
              </Typography>
            </Visible>
            <Visible only={["xs"]}>
              <Typography
                size="heading3"
                font="primary-bold"
                className={classes.heading}>
                Дискурс существует благодаря вам!
              </Typography>
            </Visible>
            <div className={classes.buttons}>
              <Visible upFrom="sm">
                <Button
                  to="help"
                  variant="link-underline"
                  typographyProps={{ size: "big", font: "primary-bold" }}
                  className={classnames(classes.button__first)}>
                  Поддержать Дискурс
                </Button>{" "}
                <Button
                  typographyProps={{ size: "big", font: "primary-bold" }}
                  variant="link-underline">
                  Стать автором
                </Button>
              </Visible>
              <Visible only={["xs"]}>
                <Button
                  to="help"
                  variant="button-primary"
                  className={classnames(
                    classes.button__first,
                    classes.button__mobile,
                  )}>
                  Поддержать
                </Button>{" "}
                <Button
                  variant="button-primary"
                  className={classnames(classes.button__mobile)}>
                  Стать автором
                </Button>
              </Visible>
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
                // TODO intl
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
