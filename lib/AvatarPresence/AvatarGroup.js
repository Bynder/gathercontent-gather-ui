import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const plusLabel = this.state.showExtra ? '→' : `+${total - maximum}`;

    return (
      <div data-component="avatar-group" className="avatar-group-list">
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
              <span className="avatar__initials">{plusLabel}</span>
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
  children: PropTypes.shape({}).isRequired,
  maximum: PropTypes.number,
};

export default AvatarGroup;
