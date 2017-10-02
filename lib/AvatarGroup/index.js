import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowIcon from '../../assets/icons/arrow-right.svg';

/**
 * @usage
 *
 * <AvatarGroup maximum={3}>
 *   <Avatar email="poppycox@gmail.com" onlyInitials isHighlighted fadedOut initials="MR" name="Mike Rotch" />
 *   <Avatar email="hugh@gmail.com" onlyInitials fadedOut initials="HJ" name="Hugh Jass" />
 * </AvatarGroup>
 */
class AvatarGroup extends Component {
  constructor() {
    super();

    this.state = { showExtra: false };
    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.setState({
      showExtra: !this.state.showExtra
    });
  }

  render() {
    const { children, maximum, className } = this.props;
    const total = (children && children.length) || 0;
    const classes = `avatar-group ${className}`;
    const plusLabel = `+${total - maximum}`;

    let display = children;
    let remaining = 0;
    let index = children.length;

    if (total > 1) {
      display = children.slice(0, maximum);
      remaining = children.slice(maximum, total);
    }

    return (
      <div data-component="avatar-group" className={classes}>
        {React.Children.map(display, child => {
          const styles = { zIndex: index };
          index -= 1;

          return (
            <span className="avatar-group__item" style={styles}>
              {React.cloneElement(child)}
            </span>
          );
        })}

        {this.state.showExtra &&
          React.Children.map(remaining, child => {
            const styles = { zIndex: index };
            index -= 1;

            return (
              <span className="avatar-group__item" style={styles}>
                {React.cloneElement(child)}
              </span>
            );
          })}

        {total > maximum && (
          <div
            onClick={this.showMore}
            onKeyPress={this.showMore}
            role="button"
            tabIndex={-1}
            data-component="show-more-avatar"
            className="avatar avatar--presence avatar--show-more"
          >
            <div className="avatar__wrapper">
              <span className="avatar__initials">
                {this.state.showExtra ? <ArrowIcon /> : plusLabel}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

AvatarGroup.defaultProps = {
  maximum: 3,
  className: ''
};

AvatarGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  maximum: PropTypes.number,
  className: PropTypes.string
};

export default AvatarGroup;
