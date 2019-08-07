import React from "react";
import { Breakpoint, is, up } from "src/styles/breakpoints";

interface VisibleProps {
  only?: Breakpoint[];
  /**
   * Works inclusive. If "md" is passed, this component will be visible on "md", "lg", "xl" screens.
   */
  upFrom?: Breakpoint;
}

interface VisibleState {
  width: number;
}

class Visible extends React.Component<VisibleProps, VisibleState> {
  public constructor(props: VisibleProps, state: VisibleState) {
    super(props, state);
    this.state = {
      width: this.getWindowWidth(),
    };
    // TODO to optimize can be moved to React context, so event listener will be attached only once
    window.addEventListener("resize", this.setStateWidth);
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.setStateWidth);
  }

  public render() {
    if (!this.isVisible()) {
      return null;
    }
    return this.props.children;
  }

  private isVisible = (): boolean => {
    const { width } = this.state;
    const { only, upFrom } = this.props;
    if (only && upFrom) {
      throw new Error("Please, do not use only and upFrom together");
    }
    if (only) {
      return is(only, width);
    }
    if (upFrom) {
      return up(upFrom, width);
    }
    return true;
  };

  private setStateWidth = () => {
    this.setState({
      width: this.getWindowWidth(),
    });
  };

  private getWindowWidth = () => {
    if (!window.innerWidth) {
      // Oh, that's SSR environment
      // TODO add some heuristic to approximate in src/utils/viewport.ts
      // the screen width of the client browser screen width.
      // Ideas: https://caniuse.com/#search=client%20hint
      // Or: parse user-agent
      return 1024;
    }

    return window.innerWidth;
  };
}

export default Visible;
