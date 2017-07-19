import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const StatusIndicator = (props) => {
  const classNames = cx({
    'status-indicator': true,
    'status-indicator--completed': props.completed,
    'status-indicator--current': props.current,
  });
  return (
    <div className={classNames}>
      <div className="status-indicator--flex">
        <span
          className="status-indicator__circle"
          style={{ backgroundColor: props.color }}
        />
        <span className="status-indicator__label">{ props.label }</span>
        <span className="status-indicator__children">{ props.children }</span>
      </div>
      { props.current &&
        <p className="status-indicator__description">{ props.description }</p>
      }
    </div>
  );
};

StatusIndicator.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  completed: PropTypes.bool,
  current: PropTypes.bool,
  description: PropTypes.string,
};

StatusIndicator.defaultProps = {
  color: '#fff',
  label: '',
  completed: false,
  current: false,
  description: '',
};

export default StatusIndicator;
