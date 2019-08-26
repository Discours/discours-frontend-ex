import React from "react";
import SendContentItemModal from "src/modals/SendContentItemModal";

interface TextViewProps {
  html: string;
}

interface TextViewState {
  openedModal?: React.ReactNode;
}

// TODO images preview

class TextView extends React.PureComponent<TextViewProps, TextViewState> {
  public state: TextViewState = {};
  private containerRef: React.RefObject<HTMLDivElement>;

  constructor(props: TextViewProps) {
    super(props);
    this.containerRef = React.createRef();
  }

  public componentDidMount() {
    this.processDocument();
  }

  public render() {
    const { html } = this.props;
    return (
      <>
        {this.state.openedModal}
        {/* In this case we rely on sanitazation to be done good on the backend */}
        {/* tslint:disable-next-line: react-no-dangerous-html */}
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          ref={this.containerRef}
          // src/styles/discours.css
          className="discours__text"
        />
      </>
    );
  }

  private processDocument = () => {
    if (!this.containerRef.current) {
      return;
    }
    this.changeLinks(this.containerRef.current);
  };

  private changeLinks = (div: HTMLDivElement) => {
    const links = div.querySelectorAll("a");
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) {
        return;
      }

      if (href.charAt(0) !== "#") {
        // Not a modal link
        this.makeLinkPublic(link);
        return;
      }
      switch (href) {
        case "#send":
          link.addEventListener(
            "click",
            this.getModalLinkEventHandler("SendContentItemModal"),
          );
          return;
        default:
          return;
      }
    });
  };

  private getModalLinkEventHandler = (modalName: "SendContentItemModal") => (
    event: HTMLElementEventMap["click"],
  ) => {
    event.preventDefault();
    switch (modalName) {
      case "SendContentItemModal":
        this.setState({
          openedModal: (
            <SendContentItemModal onModalClosed={this.closeModal} isOpened />
          ),
        });
        return;
      default:
        return;
    }
  };

  private closeModal = () => {
    this.setState({
      openedModal: false,
    });
  };

  private makeLinkPublic = (link: HTMLAnchorElement) => {
    link.target = "_blank";
  };
}

export default TextView;
