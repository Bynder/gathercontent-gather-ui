import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Avatar } from '../';

class AvatarWithInformation extends Component {
  constructor() {
    super();
    this.state = {
      showAdditional: false
    };
  }

  showAdditional = () => this.setState({ showAdditional: true });
  hideAdditional = () => this.setState({ showAdditional: false });

  render() {
    const additionalClasses = cx("avatar__wrapper avatar__with-text", {
      'avatar--offline': this.props.isOffline,
      'avatar--additional-visible': this.props.additional && this.state.showAdditional,
      'avatar__with-text--size-sm': this.props.smallSize,
    });
    return (
      <div
        className={additionalClasses}
        onMouseEnter={this.showAdditional}
        onMouseLeave={this.hideAdditional}
      >
        <Avatar
          colour={this.props.colour}
          name={this.props.name}
          url={this.props.url}
          initials={this.props.initials}
          isOffline={this.props.isOffline}
          isHighlighted={this.props.isHighlighted}
          email={this.props.email}
          smallSize={this.props.smallSize}
        />
        <div className="avatar__information">
          {this.props.name &&
            <span className="avatar__name">{this.props.name}</span>
          }

          {this.props.email &&
            <span className="avatar__email">{this.props.email}</span>
          }
        </div>
        {(this.props.additional && this.state.showAdditional) &&
          <div className="avatar__additional">{this.props.additional}</div>
        }
      </div>
    );
  }
}

AvatarWithInformation.defaultProps = {
  className: '',
  colour: '',
  name: '',
  url: '',
  initials: '',
  email: '',
  isOffline: false,
  isHighlighted: false,
  additional: '',
  smallSize: false
};

AvatarWithInformation.propTypes = {
  className: PropTypes.string,
  colour: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  initials: PropTypes.string,
  isOffline: PropTypes.bool,
  isHighlighted: PropTypes.bool,
  email: PropTypes.string,
  additional: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  smallSize: PropTypes.bool
};

export default AvatarWithInformation;
