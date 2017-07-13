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
    const { children, maximum, className, colours } = this.props;
    const total = children && children.length || 0;
    const classes = `avatar-group-list ${className}`;
    const plusLabel = `+${total - maximum}`;

    let display = children;
    let remaining = 0;

    if (total > 1) {
      display = children.slice(0, maximum);
      remaining = children.slice(maximum, total);
    }

    return (
      <div data-component="avatar-group" className={classes}>
        { React.Children.map(display, (child, idx) =>
            React.cloneElement(child, {
              index: total - idx,
              colour: colours[(idx + 1 % colours.length - 1)],
            })
        ) }

        { this.state.showExtra && React.Children.map(remaining, (child, idx) => {
          return React.cloneElement(child, {
            index: total - idx,
          });
        }) }

        { total > maximum &&
          <div
            onClick={this.showMore}
            role="button"
            tabIndex={-1}
            data-component="show-more-avatar"
            className="avatar avatar--presence avatar--show-more"
          >
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
  colours: [
    'rgb(67, 142, 229)',
    'rgb(149, 103, 225)',
    'rgb(249, 95, 93)',
  ],
};

AvatarGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  maximum: PropTypes.number,
  className: PropTypes.string,
  colours: PropTypes.arrayOf(PropTypes.string),
};

export default AvatarGroup;
