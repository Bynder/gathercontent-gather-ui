import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button';
import Icon from '../Icon';

class ProgressButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSpinner: false
    };
  }

  static defaultProps = {
    buttonType: 'primary',
    isSubmit: false,
    callbackCanExecute: true,
    showSpinner: false,
    useShowSpinnerProp: false,
    disabled: false,
    autoSpinner: false,
    spinnerText: null,
    className: '',
    onCallbackResolved: null
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
    onCallbackResolved: PropTypes.func
  };

  getSpinningState() {
    const classes = cx({
      'is-hidden': !this.props.spinnerText,
      'progress-button__spinner-text': this.props.spinnerText
    });
    return (
      <span className="progress-button__wrapper">
        <span className={classes}>
          {this.props.spinnerText || this.props.value}
        </span>
        <Icon
          className="progress-button__icon"
          name="loader"
          defaultActiveColor={false}
        />
      </span>
    );
  }

  getNormalState() {
    return <span>{this.props.value}</span>;
  }

  showSpinner() {
    this.setState({ showSpinner: true });
  }

  clickHandler = async e => {
    if (this.state.showSpinner || !this.props.callbackCanExecute) {
      return;
    }

    this.showSpinner();
    const result = await this.props.clickHandler(e);
    if (this.props.autoSpinner) {
      this.setState({ showSpinner: false });
    }

    if (this.props.onCallbackResolved) {
      this.props.onCallbackResolved(result);
    }
  };

  render() {
    let content = null;
    if (this.props.useShowSpinnerProp) {
      if (this.props.showSpinner) {
        content = this.getSpinningState();
      } else {
        content = this.getNormalState();
      }
    } else if (this.state.showSpinner) {
      content = this.getSpinningState();
    } else {
      content = this.getNormalState();
    }

    return (
      <Button
        types={[this.props.buttonType]}
        clickHandler={this.clickHandler}
        isSubmit={this.props.isSubmit}
        disabled={this.props.disabled}
        className={this.props.className}
      >
        {content}
      </Button>
    );
  }
}

export default ProgressButton;
