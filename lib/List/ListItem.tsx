import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import List from "./index";
import Button from "../Button";
import Icon from "../Icon";

export class ListItem extends Component {
  static propTypes = {
    action: PropTypes.node,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    isCurrent: PropTypes.bool,
    showSubList: PropTypes.bool,
    onToggle: PropTypes.func,
    id: PropTypes.string,
    collapse: PropTypes.bool,
  };

  static defaultProps = {
    id: "",
    action: null,
    children: null,
    isCurrent: false,
    collapse: false,
    showSubList: false,
    onToggle: () => {},
  };

  constructor(props: any) {
    // @ts-expect-error TS(2554): Expected 1-2 arguments, but got 0.
    super();
    this.state = {
      showSubList: props.showSubList || ListItem.defaultProps.showSubList,
    };
  }

  toggleSubList = () => {
    // @ts-expect-error TS(2339): Property 'onToggle' does not exist on type 'Readon... Remove this comment to see the full error message
    this.props.onToggle(this.props.id);
    return this.setState((prevState) => ({
      // @ts-expect-error TS(2339): Property 'showSubList' does not exist on type 'Rea... Remove this comment to see the full error message
      showSubList: !prevState.showSubList,
    }));
  };

  render() {
    // @ts-expect-error TS(2339): Property 'isCurrent' does not exist on type 'Reado... Remove this comment to see the full error message
    const { children, isCurrent, action, collapse } = this.props;

    const classNames = cx("list__item", {
      "list__item--collapse": collapse,
      "is-current": isCurrent,
      // @ts-expect-error TS(2339): Property 'showSubList' does not exist on type 'Rea... Remove this comment to see the full error message
      "show-sub-list": this.state.showSubList,
      "has-action": action,
    });

    const toggleClassNames = cx("list__button", {
      // @ts-expect-error TS(2339): Property 'showSubList' does not exist on type 'Rea... Remove this comment to see the full error message
      "is-active": this.state.showSubList,
    });

    const filteredChildren = React.Children.map(children, (child: any) => {
      if (typeof child === "string") {
        return child;
      }

      if (child && child.type !== List) {
        return React.cloneElement(child);
      }

      return null;
    });

    const subListChildren = React.Children.map(children, (child: any) => {
      if (child && child.type === List) {
        return React.cloneElement(child);
      }

      return null;
    });

    const hasSubList = subListChildren ? subListChildren.length > 0 : false;

    return (
      <div className={classNames}>
        <div className="list__item-content">
          <div className="list__item-text">{filteredChildren}</div>

          <span className="list__actions">
            {action && <span className="list__action">{action}</span>}

            {hasSubList && (
              <span className="list__action list__toggle">
                <Button
                  className={toggleClassNames}
                  types={["icon-only", "icon-only-cover"]}
                  clickHandler={this.toggleSubList}
                  title={
                    // @ts-expect-error Property 'showSubList' does not exist on type 'Readonly<{}>'.ts(2339)
                    this.state.showSubList ? "Hide sublist" : "Show sublist"
                  }
                >
                  {/* @ts-expect-error TS(2322): Type '{ name: string; size: string; }' is not assi... Remove this comment to see the full error message */}
                  <Icon name="caret" size="micro" />
                </Button>
              </span>
            )}
          </span>
        </div>

        {subListChildren}
      </div>
    );
  }
}

export default ListItem;
