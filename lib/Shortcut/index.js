import React from 'react';
import PropTypes from 'prop-types';

const Shortcut = props => (
  <div className="shortcut">
    <div className={`shortcut__name ${props.styleClass}`}>{props.name}</div>
    <div className="shortcut__wrapper">
      {[].concat(props.children).reduce((prev, curr, idx) => {
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
  children: PropTypes.arrayOf(PropTypes.node)
};

Shortcut.defaultProps = {
  name: '',
  styleClass: '',
  children: {},
  mac: false
};

export default Shortcut;
