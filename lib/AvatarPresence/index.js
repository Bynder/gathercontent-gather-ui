import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from '../Tooltip';

const tooltipOnHover = (data, isAssigned) => (
  <Tooltip className="avatar__tooltip" id={data.email}>
    <p className="avatar__tooltip-name">{data.name}</p>
    <p className="avatar__tooltip-email">{data.email}</p>
    { isAssigned &&
      <span className="avatar__pillbox">Assigned</span>
    }
  </Tooltip>
);

const AvatarPresence = (props) => {
  const styles = {
    backgroundColor: props.colour,
    zIndex: props.index,
  };
  const styleClass = props.fadedOut ? 'is-faded' : '';
  const { isAssigned } = props;

  return (
    <OverlayTrigger trigger={['hover']} placement="bottom" overlay={!props.noTooltip && tooltipOnHover(props, isAssigned)}>
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
  noTooltip: false,
};

AvatarPresence.propTypes = {
  colour: PropTypes.string,
  className: PropTypes.string,
  onlyInitials: PropTypes.bool,
  index: PropTypes.number,
  initials: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  isAssigned: PropTypes.bool,
  fadedOut: PropTypes.bool,
  noTooltip: PropTypes.bool,
};

export default AvatarPresence;
