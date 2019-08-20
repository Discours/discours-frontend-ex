import cn from "classnames";
import React from "react";
import Button, { ButtonProps } from "src/components/discours-ui-kit/Button";
import classes from "./Modal.css";

interface ModalProps {
  size: "small" | "medium" | "large";
  className?: string;
  buttonProps?: Partial<ButtonProps>;
  buttonText: React.ReactNode;
}

interface ModalState {
  isOpened: boolean;
}

class Modal extends React.PureComponent<ModalProps, ModalState> {
  public static defaultProps = {
    size: "medium",
  };
  public state: ModalState = {
    isOpened: false,
  };

  public componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyDown);
  }

  public render() {
    const { buttonProps, buttonText } = this.props;
    return (
      <>
        {this.renderModal()}
        <Button {...buttonProps} onClick={this.openModal}>
          {buttonText}
        </Button>
      </>
    );
  }

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
    this.setState({
      isOpened: false,
    });
    document.removeEventListener("keypress", this.handleKeyDown);
    document.body.style.overflow = "auto";
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
