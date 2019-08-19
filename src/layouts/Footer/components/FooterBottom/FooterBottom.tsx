import classnames from "classnames";
import React from "react";
import Button from "src/components/discours-ui-kit/Button";
import Container from "src/components/discours-ui-kit/Container";
import Icon, {
  brandFacebook,
  brandTelegram,
  brandTwitter,
  brandVk,
} from "src/components/discours-ui-kit/Icon";
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
                О Дискурсе
              </Button>
              <Button isInverse to="manifest" className={classes.link}>
                Авторы
              </Button>
              <Button isInverse to="manifest" className={classes.link}>
                Предложить идею
              </Button>
            </div>
            <div className={classes.column}>
              <Button isInverse to="facebook" className={classes.link}>
                <Icon isFixedWidth component={brandFacebook} isInverse />{" "}
                Facebook
              </Button>
              <Button isInverse to="vk" className={classes.link}>
                <Icon isFixedWidth isInverse component={brandVk} /> VK
              </Button>
              <Button isInverse to="twitter" className={classes.link}>
                <Icon isFixedWidth component={brandTwitter} isInverse /> Twitter
              </Button>
              <Button isInverse to="telegram" className={classes.link}>
                <Icon isFixedWidth component={brandTelegram} isInverse />{" "}
                Telegram
              </Button>
            </div>
            <div className={classes.column}>
              <Button isInverse to="yandexZen" className={classes.link}>
                Яндекс Дзен
              </Button>
              <Button isInverse to="podcast" className={classes.link}>
                Подкаст
              </Button>
              <Button isInverse to="rss" className={classes.link}>
                RSS
              </Button>
            </div>
            <div className={classnames(classes.column, classes.column__right)}>
              <FooterSubscribeFormContainer />
            </div>
          </div>
        </Container>
        <Container>
          <hr />
          <Typography isInverse isInline size="small">
            Независимый журнал с открытой горизонтальной редакцией о культуре,
            науке, искусстве и обществе.{" "}
            <Button isInverse to="termsOfUse">
              Пользовательское соглашение
            </Button>
            . ©&nbsp;Дискурс, 2015-
            <FormattedDate format="year" date={new Date()} />
          </Typography>
        </Container>
      </div>
    );
  }
}

export default FooterBottom;
