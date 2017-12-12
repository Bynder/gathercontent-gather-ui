import React from 'react';
import PropTypes from 'prop-types';

const Shortcut = props => (
  <div className="shortcut">
    <div className={`shortcut__name ${props.styleClass}`}>{props.name}</div>
    <div className="shortcut__wrapper">
      {React.Children
        .map(props.children, child =>
          React.cloneElement(child, {
            mac: props.mac
          })
        )
        .reduce((prev, curr, idx) => {
          const idKey = `plus-${idx}`;
          return [
            prev,
            <span className="shortcut__plus" key={idKey}>
              +
            </span>,
            curr
          ];
        })}
    </div>
  </div>
);

Shortcut.propTypes = {
  name: PropTypes.string.isRequired,
  styleClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ]),
  mac: PropTypes.bool
};

Shortcut.defaultProps = {
  name: '',
  styleClass: '',
  children: {},
  mac: false
};

export default Shortcut;
