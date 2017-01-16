import React from 'react';
import { IMAGE_PATH } from './../../config/config';

class AjaxButton extends React.Component {
  static getClassName(type) {
    const defaultClass = 'ajax-spinner-button';

    switch (type) {
      case 'primary':
        return `${defaultClass} btn btn--primary`;
      case 'secondary':
        return `${defaultClass} btn btn--neutral`;
      case 'danger':
        return `${defaultClass} btn btn--warning`;
      default:
        return ' btn btn--primary';
    }
  }

  constructor(props) {
    super(props);

    this.displayName = 'AjaxButton';
    this.state = { showSpinner: false };

    this.clickHandler = this.clickHandler.bind(this);
  }

  getSpinningValue() {
    return (
      <span>
        <span className="ajax-hide-button">{this.props.value}</span>
        <img
          src={`${IMAGE_PATH}icons/spinner.svg`}
          className={this.props.spinnerClasses}
          alt="Loading..."
        />
      </span>
    );
  }

  getNormalValue() {
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
    const { type, buttonType } = this.props;
    const classes = AjaxButton.getClassName(type);
    let content = null;

    if (this.state.showSpinner) {
      content = this.getSpinningValue();
    } else {
      content = this.getNormalValue();
    }

    return (
      <button type={buttonType} onClick={this.clickHandler} className={classes}>
        { content }
      </button>
    );
  }
}

AjaxButton.defaultProps = {
  type: 'primary',
  value: '',
  spinnerClasses: 'ajax-spinner',
  alt: 'Working...',
  buttonType: 'submit',
};

AjaxButton.propTypes = {
  value: React.PropTypes.string,
  type: React.PropTypes.string,
  buttonType: React.PropTypes.string,
  spinnerClasses: React.PropTypes.string,
  clickHandler: React.PropTypes.func,
};

export default AjaxButton;
