import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowIcon from '../../assets/icons/arrow-right.svg';

class AvatarGroup extends Component {
  constructor() {
    super();

    this.state = { showExtra: false };
    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.setState({
      showExtra: !this.state.showExtra,
    });
  }

  render() {
    const { children, maximum, className } = this.props;
    const total = children && children.length || 0;
    const classes = `avatar-group-list ${className}`;

    let display = children;
    let remaining = 0;

    if (total > 1) {
      display = children.slice(0, maximum);
      remaining = children.slice(maximum, total);
    }

    const plusLabel = `+${total - maximum}`;

    return (
      <div data-component="avatar-group" className={classes}>
        { React.Children.map(display, (child, idx) => {
          return React.cloneElement(child, {
            index: total - idx,
          });
        }) }

        { this.state.showExtra && React.Children.map(remaining, (child, idx) => {
          return React.cloneElement(child, {
            index: total - idx,
          });
        }) }

        { total > maximum &&
          <div onClick={this.showMore} data-component="show-more-avatar" className="avatar avatar--presence avatar--show-more">
            <div className="avatar__wrapper">
              <span className="avatar__initials">{this.state.showExtra ? <ArrowIcon /> : plusLabel}</span>
            </div>
          </div>
        }
      </div>
    );
  }
}

AvatarGroup.defaultProps = {
  maximum: 3,
  className: '',
};

AvatarGroup.propTypes = {
  children: PropTypes.shape({}),
  maximum: PropTypes.number,
  className: PropTypes.string,
};

export default AvatarGroup;
