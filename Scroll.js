import classNames from "classnames";
import throttle from "lodash/throttle";
import React, { PureComponent } from "react";
import { connect } from "react-redux";

import type { Node } from "react";

import { selectIsDesktop } from "../../data/application";

import type { Dispatch, State } from "../../data/types";

const desktopStyles = desktopRequire("./desktop.css");
const mobileStyles = mobileRequire("./mobile.css");

type ConnectedStateProps = {|
  isDesktop: boolean,
|};

type OwnProps = {|
  children: Node,
  className?: string,
  direction?: "horizontal" | "vertical",
  onScroll?: ?(ref: HTMLDivElement) => void,
|};

type Props = {|
  dispatch: Dispatch,
  ...ConnectedStateProps,
  ...OwnProps,
|};

export class Scroll extends PureComponent<Props, void> {
  scrollElement: ?HTMLDivElement;

  static defaultProps = {
    className: "",
    direction: "vertical",
  };

  componentDidMount() {
    if (this.props.onScroll != null && this.scrollElement != null) {
      this.scrollElement.addEventListener("scroll", this.onScrollThrottle);
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { onScroll } = this.props;
    const { onScroll: prevOnScroll } = prevProps;
    if (this.scrollElement == null) {
      return;
    }

    if (onScroll !== prevOnScroll) {
      if (onScroll == null) {
        this.scrollElement.removeEventListener("scroll", this.onScrollThrottle);
      } else if (prevOnScroll == null) {
        this.scrollElement.addEventListener("scroll", this.onScrollThrottle);
      }
    }
  }

  componentWillUnmount() {
    if (this.scrollElement != null) {
      this.scrollElement.removeEventListener("scroll", this.onScrollThrottle);
    }
  }

  onScrollThrottle = throttle(this.onScroll.bind(this), 100);

  onScroll() {
    const { onScroll } = this.props;
    if (onScroll != null && this.scrollElement != null) {
      onScroll(this.scrollElement);
    }
  }

  onScrollRef = (ref: ?HTMLDivElement) => {
    this.scrollElement = ref;
  };

  render() {
    const { children, className = "", direction, isDesktop } = this.props;

    const containerClassName = isDesktop
      ? classNames(className, {
          [desktopStyles.containerVertical]: direction === "vertical",
          [desktopStyles.containerHorizontal]: direction === "horizontal",
        })
      : classNames(mobileStyles.container, className, {
          [mobileStyles.containerVertical]: direction === "vertical",
          [mobileStyles.containerHorizontal]: direction === "horizontal",
        });

    return (
      <div className={containerClassName} ref={this.onScrollRef}>
        {children}
      </div>
    );
  }
}

function mapStateToProps(
  state: State,
  ownProps: OwnProps,
): ConnectedStateProps {
  return {
    isDesktop: selectIsDesktop(state),
  };
}

export default connect<Props, OwnProps, _, _, _, _>(mapStateToProps)(Scroll);
