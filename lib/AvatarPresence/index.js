import React from 'react';
import PropTypes from 'prop-types';
import Overlay from 'react-bootstrap/lib/Overlay';
import Popover from 'react-bootstrap/lib/Popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

const popoverHoverFocus = (props) => (
  <Popover className="avatar__tooltip" id={props.email} >
    <p className="avatar__tooltip-name">{props.name}</p>
    <p className="avatar__tooltip-email">{props.email}</p>
    { props.isAssigned &&
      <span className="avatar__pillbox">Assigned</span>
    }
  </Popover>
);

const AvatarPresence = props => {
  const styles = {
    backgroundColor: props.colour,
    zIndex: props.index,
  };
  const styleClass = props.fadedOut ? 'is-faded' : '';
  return (
    <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverHoverFocus(props)}>
      <div style={styles} className={`avatar avatar--presence ${props.className} ${styleClass}`}>
        { props.onlyInitials &&
          <div className="avatar__wrapper">
            <span className="avatar__initials">{props.initials}</span>
          </div>
        }
        { props.url && !props.onlyInitials && !props.fadedOut &&
          <img className="avatar__image" src={props.url} alt={props.name} />
        }
      </div>
    </OverlayTrigger>
  );
};

AvatarPresence.defaultProps = {
  className: '',
  colour: 'rebeccapurple',
  index: 0,
  fadedOut: false,
  isAssigned: false,
};

AvatarPresence.propTypes = {
  className: PropTypes.string,
  onlyInitials: PropTypes.bool,
  index: PropTypes.number,
  initials: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  isAssigned: PropTypes.bool,
};

export default AvatarPresence;
