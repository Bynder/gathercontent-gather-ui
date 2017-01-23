import React from 'react';
import SVGInline from 'react-svg-inline';
import loaderSVG from './../../assets/icons/loader.svg';

class ProgressButton extends React.Component {
  static getClassName(type) {
    const defaultClass = 'spinner-button';

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

    this.state = {
      showSpinner: false
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  getSpinningValue() {
    return (
      <span className="progress-button__spinner">
        <span className="hide-button">{this.props.value}</span>
        <SVGInline className="progress-button__spinner-icon" svg={ loaderSVG } />
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
    const classes = ProgressButton.getClassName(type);
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

ProgressButton.defaultProps = {
  type: 'primary',
  value: '',
  spinnerClasses: 'ajax-spinner',
  alt: 'Working...',
  buttonType: 'submit',
};

ProgressButton.propTypes = {
  value: React.PropTypes.string,
  type: React.PropTypes.string,
  buttonType: React.PropTypes.string,
  spinnerClasses: React.PropTypes.string,
  clickHandler: React.PropTypes.func,
};

export default ProgressButton;
