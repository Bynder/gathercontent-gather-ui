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
    const maximum = this.props.maximum || 3;
    const { children } = this.props;
    const total = children.length;
    const display = children.slice(0, maximum);
    const remaining = children.slice(maximum, total);

    return (
      <div className="avatar-group-list">
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
          <div onClick={this.showMore} className="avatar avatar--presence avatar--show-more">
            <div className="avatar__wrapper">
              <span className="avatar__initials">+{total - maximum}</span>
            </div>
          </div>
        }
      </div>
    );
  }
}

AvatarGroup.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default AvatarGroup;
