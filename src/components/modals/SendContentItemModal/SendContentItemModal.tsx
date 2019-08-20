import cn from "classnames";
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
      <Modal size="large" buttonText="Стать автором">
        <div className={cn(classes.container)}>
          <Typography semanticLevel="heading3" size="heading3">
            Опубликовать материал
          </Typography>
          <Typography font="primary-bold">
            Если публикацию поддержат другие авторы, она выйдет в журнале
          </Typography>
          <div className={cn(classes.icons)}>
            <Button
              to="postArticle"
              variant="link-background"
              className={cn(classes.icon)}>
              <Icon fontSize="5rem" component={article} isFixedWidth />
              <br />
              <br />
              Статья
            </Button>
            <Button
              to="postLiterature"
              variant="link-background"
              className={cn(classes.icon)}>
              <Icon fontSize="5rem" component={literature} isFixedWidth />
              <br />
              <br />
              Литература
            </Button>
            <Button
              to="postImage"
              variant="link-background"
              className={cn(classes.icon)}>
              <Icon fontSize="5rem" component={photo} isFixedWidth />
              <br />
              <br />
              Изображения
            </Button>
            <Button
              to="postMusic"
              variant="link-background"
              className={cn(classes.icon)}>
              <Icon fontSize="5rem" component={music} isFixedWidth />
              <br />
              <br />
              Музыка
            </Button>
            <Button
              to="postVideo"
              variant="link-background"
              className={cn(classes.icon)}>
              <Icon fontSize="5rem" component={video} isFixedWidth />
              <br />
              <br />
              Видео
            </Button>
          </div>
          <Button variant="link-background" to="manifest">
            Манифест
          </Button>
          <br />
          <Button variant="link-background" to="guide">
            Как устроен Дискурс
          </Button>
          <br />
          <Button variant="link-background" to="howToWrite">
            Как написать хороший текст
          </Button>
        </div>
      </Modal>
    );
  }
}

export default SendContentItemModal;
