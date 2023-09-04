import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Button from "../Button";
import Icon from "../Icon";

export class ProgressButton extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      showSpinner: false,
    };
  }

  static defaultProps = {
    buttonType: "primary",
    isSubmit: false,
    callbackCanExecute: true,
    showSpinner: false,
    useShowSpinnerProp: false,
    disabled: false,
    autoSpinner: false,
    spinnerText: null,
    className: "",
    onCallbackResolved: null,
  };

  static propTypes = {
    buttonType: PropTypes.string,
    clickHandler: PropTypes.func.isRequired,
    value: PropTypes.node.isRequired,
    isSubmit: PropTypes.bool,
    callbackCanExecute: PropTypes.bool,
    showSpinner: PropTypes.bool,
    useShowSpinnerProp: PropTypes.bool,
    disabled: PropTypes.bool,
    autoSpinner: PropTypes.bool,
    spinnerText: PropTypes.string,
    className: PropTypes.string,
    onCallbackResolved: PropTypes.func,
  };

  getSpinningState() {
    const classes = cx({
      // @ts-expect-error TS(2339): Property 'spinnerText' does not exist on type 'Rea... Remove this comment to see the full error message
      "is-hidden": !this.props.spinnerText,
      // @ts-expect-error TS(2339): Property 'spinnerText' does not exist on type 'Rea... Remove this comment to see the full error message
      "progress-button__spinner-text": this.props.spinnerText,
    });
    return (
      <span className="progress-button__wrapper">
        <span className={classes}>
          {/* @ts-expect-error TS(2339): Property 'spinnerText' does not exist on type 'Rea... Remove this comment to see the full error message */}
          {this.props.spinnerText || this.props.value}
        </span>
        <Icon
          className="progress-button__icon"
          name="loader"
          defaultActiveColor={false}
          title="Loading"
        />
      </span>
    );
  }

  getNormalState() {
    // @ts-expect-error TS(2339): Property 'value' does not exist on type 'Readonly<... Remove this comment to see the full error message
    return <span>{this.props.value}</span>;
  }

  showSpinner() {
    this.setState({ showSpinner: true });
  }

  clickHandler = async (e: any) => {
    // @ts-expect-error TS(2339): Property 'showSpinner' does not exist on type 'Rea... Remove this comment to see the full error message
    if (this.state.showSpinner || !this.props.callbackCanExecute) {
      return;
    }

    this.showSpinner();
    // @ts-expect-error TS(2339): Property 'clickHandler' does not exist on type 'Re... Remove this comment to see the full error message
    const result = await this.props.clickHandler(e);
    // @ts-expect-error TS(2339): Property 'autoSpinner' does not exist on type 'Rea... Remove this comment to see the full error message
    if (this.props.autoSpinner) {
      this.setState({ showSpinner: false });
    }

    // @ts-expect-error TS(2339): Property 'onCallbackResolved' does not exist on ty... Remove this comment to see the full error message
    if (this.props.onCallbackResolved) {
      // @ts-expect-error TS(2339): Property 'onCallbackResolved' does not exist on ty... Remove this comment to see the full error message
      this.props.onCallbackResolved(result);
    }
  };

  render() {
    let content = null;
    // @ts-expect-error TS(2339): Property 'useShowSpinnerProp' does not exist on ty... Remove this comment to see the full error message
    if (this.props.useShowSpinnerProp) {
      // @ts-expect-error TS(2339): Property 'showSpinner' does not exist on type 'Rea... Remove this comment to see the full error message
      if (this.props.showSpinner) {
        content = this.getSpinningState();
      } else {
        content = this.getNormalState();
      }
      // @ts-expect-error TS(2339): Property 'showSpinner' does not exist on type 'Rea... Remove this comment to see the full error message
    } else if (this.state.showSpinner) {
      content = this.getSpinningState();
    } else {
      content = this.getNormalState();
    }

    return (
      <Button
        // @ts-expect-error TS(2339): Property 'buttonType' does not exist on type 'Read... Remove this comment to see the full error message
        types={[this.props.buttonType]}
        clickHandler={this.clickHandler}
        // @ts-expect-error TS(2339): Property 'isSubmit' does not exist on type 'Readon... Remove this comment to see the full error message
        isSubmit={this.props.isSubmit}
        // @ts-expect-error TS(2339): Property 'disabled' does not exist on type 'Readon... Remove this comment to see the full error message
        disabled={this.props.disabled}
        // @ts-expect-error TS(2339): Property 'className' does not exist on type 'Reado... Remove this comment to see the full error message
        className={this.props.className}
      >
        {content}
      </Button>
    );
  }
}

export default ProgressButton;
