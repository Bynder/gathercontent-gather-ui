import React from 'react';
import PropTypes from 'prop-types';
import UAParser from 'ua-parser-js';

const Shortcut = props => {
  const ua = new UAParser();
  return (
    <div className="shortcut">
      <div className={`shortcut__name ${props.styleClass}`}>{props.name}</div>
      <div className="shortcut__wrapper">
        {React.Children
          .map(props.children, child =>
            React.cloneElement(child, {
              UAParser: ua
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
};

Shortcut.propTypes = {
  name: PropTypes.string.isRequired,
  styleClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ])
};

Shortcut.defaultProps = {
  name: '',
  styleClass: '',
  children: {}
};

export default Shortcut;
