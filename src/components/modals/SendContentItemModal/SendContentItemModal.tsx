import classnames from "classnames";
import { T } from "lioness";
import React from "react";
import Button from "src/components/discours-ui-kit/Button";
import Icon, {
  article,
  literature,
  music,
  photo,
  video,
} from "src/components/discours-ui-kit/Icon";
import Modal from "src/components/discours-ui-kit/Modal";
import Typography from "src/components/discours-ui-kit/Typography";
import classes from "./SendContentItemModal.css";

class SendContentItemModal extends React.PureComponent {
  public render() {
    return (
      <Modal size="large" buttonText={<T message="Стать автором" />}>
        <div className={classnames(classes.container)}>
          <Typography semanticLevel="heading3" size="heading3">
            <T message="Опубликовать материал" />
          </Typography>
          <Typography>
            <T message="Если публикацию поддержат другие авторы, она выйдет в журнале" />
          </Typography>
          <div className={classnames(classes.icons)}>
            <Button to="editArticle" variant="link-background">
              <Icon fontSize="5rem" component={article} />
              <br />
              <T message="Статья" />
            </Button>
            <Button to="editExpoItem" variant="link-background">
              <Icon fontSize="5rem" component={literature} />
              <br />
              <T message="Литература" />
            </Button>
            <Button to="editExpoItem" variant="link-background">
              <Icon fontSize="5rem" component={photo} />
              <br />
              <T message="Изображения" />
            </Button>
            <Button to="editExpoItem" variant="link-background">
              <Icon fontSize="5rem" component={music} />
              <br />
              <T message="Музыка" />
            </Button>
            <Button to="editExpoItem" variant="link-background">
              <Icon fontSize="5rem" component={video} />
              <br />
              <T message="Видео" />
            </Button>
          </div>
          <Button variant="link-background" to="manifest">
            <T message="Манифест" />
          </Button>
          <br />
          <Button variant="link-background" to="guide">
            <T message="Как устроен Дискурс " />
          </Button>
          <br />
          <Button variant="link-background" to="howToWrite">
            <T message="Как написать хороший текст" />
          </Button>
        </div>
      </Modal>
    );
  }
}

export default SendContentItemModal;
