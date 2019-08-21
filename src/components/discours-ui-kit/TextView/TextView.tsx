import React from "react";

interface TextViewProps {
  html: string;
}

class TextView extends React.PureComponent<TextViewProps> {
  public render() {
    const { html } = this.props;
    return (
      // In this case we rely on sanitazation to be done good on the backend
      // To avoid security problems
      // tslint:disable-next-line: react-no-dangerous-html
      <div
        className="discours__text"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
}

export default TextView;
