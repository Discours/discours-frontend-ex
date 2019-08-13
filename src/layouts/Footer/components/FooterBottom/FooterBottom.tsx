import classnames from "classnames";
import { T } from "lioness";
import React from "react";
import Button from "src/components/discours-ui-kit/Button";
import Container from "src/components/discours-ui-kit/Container";
import Icon from "src/components/discours-ui-kit/Icon";
import {
  brandFacebook,
  brandTelegram,
  brandTwitter,
  brandVk,
} from "src/components/discours-ui-kit/Icon/icons";
import Typography from "src/components/discours-ui-kit/Typography";
import FormattedDate from "src/components/formatters/FormattedDate";
// tslint:disable-next-line: no-relative-imports
import FooterSubscribeFormContainer from "../../containers/FooterSubscribeFormContainer";
import classes from "./FooterBottom.css";

class FooterBottom extends React.PureComponent {
  public render() {
    return (
      <div className={classes.container__outer}>
        <Container>
          <div className={classes.container}>
            <div className={classes.column}>
              <Button isInverse to="manifest" className={classes.link}>
                <T message="О Дискурсе" />
              </Button>
              <Button isInverse to="manifest" className={classes.link}>
                <T message="Авторы" />
              </Button>
              <Button isInverse to="manifest" className={classes.link}>
                <T message="Предложить идею" />
              </Button>
            </div>
            <div className={classes.column}>
              <Button isInverse to="facebook" className={classes.link}>
                <Icon isFixedWidth src={brandFacebook} isInverse isInline />{" "}
                <T message="Facebook" />
              </Button>
              <Button isInverse to="vk" className={classes.link}>
                <Icon isFixedWidth isInverse isInline src={brandVk} />{" "}
                <T message="VK" />
              </Button>
              <Button isInverse to="twitter" className={classes.link}>
                <Icon isFixedWidth src={brandTwitter} isInverse isInline />{" "}
                <T message="Twitter" />
              </Button>
              <Button isInverse to="telegram" className={classes.link}>
                <Icon isFixedWidth src={brandTelegram} isInverse isInline />{" "}
                <T message="Telegram" />
              </Button>
            </div>
            <div className={classes.column}>
              <Button isInverse to="yandexZen" className={classes.link}>
                <T message="Яндекс Дзен" />
              </Button>
              <Button isInverse to="podcast" className={classes.link}>
                <T message="Подкаст" />
              </Button>
              <Button isInverse to="rss" className={classes.link}>
                <T message="RSS" />
              </Button>
            </div>
            <div className={classnames(classes.column, classes.column__right)}>
              <FooterSubscribeFormContainer />
            </div>
          </div>
        </Container>
        <Container>
          <hr />
          <Typography isInverse isInline variant="small">
            <T message="Независимый журнал с открытой горизонтальной редакцией о культуре, науке, искусстве и обществе." />{" "}
            <Button
              isInverse
              to="termsOfUse"
              typographyProps={{ variant: "small" }}>
              <T message="Пользовательское соглашение" />
            </Button>
            {". "}
            <T message="©&nbsp;Дискурс" />
            {", 2015-"}
            <FormattedDate format="year" date={new Date()} />
          </Typography>
        </Container>
      </div>
    );
  }
}

export default FooterBottom;
