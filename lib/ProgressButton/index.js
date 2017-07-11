import React, { Component } from 'react';
import PropTypes from 'prop-types';
import loaderSVG from './../../assets/icons/loader.svg';
import Button from '../Button';

class ProgressButton extends Component {
  static defaultProps = {
    buttonType: 'primary',
    isSubmit: false,
  };

  static propTypes = {
    buttonType: PropTypes.string,
    clickHandler: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    isSubmit: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      showSpinner: false,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  getSpinningState() {
    return (
      <span className="progress-button__wrapper">
        <span className="is-hidden">{this.props.value}</span>
        <span className="progress-button__icon">
          {loaderSVG()}
        </span>
      </span>
    );
  }

  getNormalState() {
    return (
      <span>{this.props.value}</span>
    );
  }

  showSpinner() {
    this.setState({ showSpinner: true });
  }

  hideSpinner() {
    this.setState({ showSpinner: false });
  }

  clickHandler(e) {
    this.showSpinner();
    this.props.clickHandler(e);
  }

  render() {
    let content = null;

    if (this.state.showSpinner) {
      content = this.getSpinningState();
    } else {
      content = this.getNormalState();
    }

    return (
      <Button
        types={[this.props.buttonType]}
        clickHandler={this.clickHandler}
        isSubmit={this.props.isSubmit}
      >
        { content }
      </Button>
    );
  }
}

export default ProgressButton;
