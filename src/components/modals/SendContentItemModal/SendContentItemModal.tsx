import classnames from "classnames";
import { T } from "lioness";
import React from "react";
import Button from "src/components/discours-ui-kit/Button";
import Icon from "src/components/discours-ui-kit/Icon";
import {
  literature,
  music,
  photo,
  post,
  video,
} from "src/components/discours-ui-kit/Icon/icons";
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
          <Button variant="link-background" to="manifest">
            <T message="Манифест" />
          </Button>
          <div>
            <Button to="editArticle">
              <Icon src={post} />
              <T message="Статья" />
            </Button>
            <Button to="editExpoItem">
              <Icon src={literature} />
              <T message="Литература" />
            </Button>
            <Button to="editExpoItem">
              <Icon src={photo} />
              <T message="Изображения" />
            </Button>
            <Button to="editExpoItem">
              <Icon src={music} />
              <T message="Музыка" />
            </Button>
            <Button to="editExpoItem">
              <Icon src={video} />
              <T message="Видео" />
            </Button>
          </div>
          <br />
          <Button variant="link-background" to="guide">
            <T message="Как устроен Дискурс " />
          </Button>
          <br />
          {/* TODO add route */}
          <Button variant="link-background" to="index">
            <T message="Как написать хороший текст" />
          </Button>
        </div>
      </Modal>
    );
  }
}

export default SendContentItemModal;
