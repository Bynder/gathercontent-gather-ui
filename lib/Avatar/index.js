import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from '../index';

/**
 * @usage
 *
 * <Avatar initials="AE" name="Angus Edwardson" color="green" url="img/url" offline />
 */

class Avatar extends Component {
  state = {
    showAdditional: false
  };

  showAdditional = () => this.setState({ showAdditional: true });

  hideAdditional = () => this.setState({ showAdditional: false });

  render() {
    const styles = this.props.colour ? { color: this.props.colour } : {};

    const additionalClasses = cx(this.props.className, {
      'avatar--highlighted': this.props.isHighlighted,
      'avatar--offline': this.props.isOffline,
      'avatar--size-sm': this.props.smallSize,
      'avatar--size-lrg': this.props.largeSize,
      'avatar--size-xlrg': this.props.extraLargeSize,
      'avatar--bordered': this.props.bordered,
      'avatar--animated': this.props.animate,
      'avatar--has-colour': this.props.colour
    });

    const wrapperClasses = cx(
      `avatar__wrapper ${this.props.wrapperClassName}`,
      {
        'avatar__wrapper--offline': this.props.isOffline,
        'avatar__wrapper--size-sm': this.props.smallSize,
        'avatar__wrapper--size-xlrg': this.props.extraLargeSize,
        'avatar__wrapper--additional': this.props.additional,
        'is-visible': this.state.showAdditional && this.props.additional
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
            {this.props.locked && (
              <div className="avatar__locked">
                <Icon
                  name="locked"
                  types={['white']}
                  defaultActiveColor={false}
                />
              </div>
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
        {this.props.locked && (
          <div className="avatar__locked">
            <Icon name="locked" types={['white']} defaultActiveColor={false} />
          </div>
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
  largeSize: false,
  extraLargeSize: false,
  children: '',
  additional: '',
  bordered: false,
  animate: false,
  locked: false
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
  largeSize: PropTypes.bool,
  extraLargeSize: PropTypes.bool,
  bordered: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape()),
    PropTypes.string
  ]),
  additional: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  animate: PropTypes.bool,
  locked: PropTypes.bool
};

export default Avatar;
