import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * @usage
 *
 * <Avatar initials="AE" name="Angus Edwardson" color="green" url="img/url" offline />
 */
const createBoxShadowStyle = colour => ({
  boxShadow: `0 0 0 2px white, 0 0 0 3px ${colour}, 0 0 0 5px white`
});

class Avatar extends Component {
  state = {
    showAdditional: false
  };

  showAdditional = () => this.setState({ showAdditional: true });
  hideAdditional = () => this.setState({ showAdditional: false });

  render() {
    const styles = this.props.colour
      ? createBoxShadowStyle(this.props.colour)
      : {};

    const additionalClasses = cx(this.props.className, {
      'avatar--highlighted': this.props.isHighlighted,
      'avatar--offline': this.props.isOffline,
      'avatar--size-sm': this.props.smallSize
    });

    const wrapperClasses = cx(
      `avatar__wrapper ${this.props.wrapperClassName}`,
      {
        'avatar__wrapper--offline': this.props.isOffline,
        'avatar__wrapper--size-sm': this.props.smallSize,
        'avatar__wrapper--additional-visible': this.state.showAdditional
      }
    );

    if (this.props.children || this.props.additional) {
      return (
        <div
          className={wrapperClasses}
          onMouseEnter={this.showAdditional}
          onMouseLeave={this.hideAdditional}
        >
          <div style={styles} className={`avatar ${additionalClasses}`}>
            {!this.props.url && (
              <span className="avatar__initials">{this.props.initials}</span>
            )}

            {this.props.url && (
              <img
                className="avatar__image"
                src={this.props.url}
                alt={this.props.name}
              />
            )}
          </div>
          {this.props.children && this.props.children}
          {this.props.additional && (
            <div className="avatar__additional">{this.props.additional}</div>
          )}
        </div>
      );
    }

    return (
      <div style={styles} className={`avatar ${additionalClasses}`}>
        {!this.props.url && (
          <span className="avatar__initials">{this.props.initials}</span>
        )}

        {this.props.url && (
          <img
            className="avatar__image"
            src={this.props.url}
            alt={this.props.name}
          />
        )}
      </div>
    );
  }
}

Avatar.defaultProps = {
  className: '',
  wrapperClassName: '',
  colour: '',
  name: '',
  url: '',
  initials: '',
  isOffline: false,
  isHighlighted: false,
  smallSize: false,
  children: '',
  additional: ''
};

Avatar.propTypes = {
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  colour: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  initials: PropTypes.string,
  isOffline: PropTypes.bool,
  isHighlighted: PropTypes.bool,
  smallSize: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape()),
    PropTypes.string
  ]),
  additional: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

export default Avatar;
