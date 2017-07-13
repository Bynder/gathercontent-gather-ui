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
    const { children, maximum } = this.props;
    const total = children.length;
    const display = children.slice(0, maximum);
    const remaining = children.slice(maximum, total);
    const plusLabel = `+${total - maximum}`;

    return (
      <div data-component="avatar-group" className="avatar-group-list">
        { React.Children.map(display, (child, idx) => React.cloneElement(child, {
          index: total - idx,
        })) }

        { this.state.showExtra && React.Children.map(remaining, (child, idx) => React.cloneElement(child, {
          index: total - idx,
        })) }

        { total > maximum &&
          <div tabIndex={-1} role="button" onClick={this.showMore} data-component="show-more-avatar" className="avatar avatar--presence avatar--show-more">
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
};

AvatarGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  maximum: PropTypes.number,
};

export default AvatarGroup;
