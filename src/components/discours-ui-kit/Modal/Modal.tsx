import cn from "classnames";
import React from "react";
import Button, { ButtonProps } from "src/components/discours-ui-kit/Button";
import classes from "./Modal.css";

export interface ModalProps {
  size: "small" | "medium" | "large";
  className?: string;
  isOpened?: boolean;
  buttonProps?: Partial<ButtonProps>;
  buttonText: React.ReactNode;
  onModalClosed?(): void;
}

interface ModalState {
  isOpened: boolean;
}

class Modal extends React.PureComponent<ModalProps, ModalState> {
  public static defaultProps = {
    size: "medium",
    isOpened: false,
  };
  public state: ModalState = {
    isOpened: false,
  };

  public componentDidMount() {
    if (this.props.isOpened) {
      this.openModal();
    }
  }

  public componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyDown);
  }

  public render() {
    return (
      <>
        {this.renderModal()}
        {this.renderButton()}
      </>
    );
  }

  private renderButton = () => {
    const { buttonProps, buttonText, isOpened } = this.props;
    if (isOpened) {
      return null;
    }
    return (
      <Button {...buttonProps} onClick={this.openModal}>
        {buttonText}
      </Button>
    );
  };

  private renderModal = () => {
    const { className, children } = this.props;
    const { isOpened } = this.state;
    if (!isOpened) {
      return null;
    }
    return (
      <div className={cn(className, classes.container)}>
        {/* tslint:disable-next-line react-a11y-event-has-role */}
        <div
          onClick={this.closeModal}
          aria-hidden="true"
          className={cn(classes.backdrop)}
        />
        <div className={this.getBodyClassName()} role="dialog">
          <Button
            variant="link-text"
            onClick={this.closeModal}
            typographyProps={{ size: "heading3" }}
            className={cn(classes.close)}>
            ×
          </Button>
          {children}
        </div>
      </div>
    );
  };

  private getBodyClassName = () => {
    const { size } = this.props;
    return cn({
      [classes.body]: true,
      [classes[`body__${size}`]]: true,
    });
  };

  private closeModal = () => {
    const { onModalClosed } = this.props;
    this.setState({
      isOpened: false,
    });
    document.removeEventListener("keypress", this.handleKeyDown);
    document.body.style.overflow = "auto";
    if (!onModalClosed) {
      return;
    }
    onModalClosed();
  };

  private openModal = () => {
    this.setState({
      isOpened: true,
    });
    document.addEventListener("keypress", this.handleKeyDown);
    document.body.style.overflow = "hidden";
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    const KEY_ESC = "Escape";
    if (event.code === KEY_ESC) {
      this.closeModal();
    }
  };
}

export default Modal;
