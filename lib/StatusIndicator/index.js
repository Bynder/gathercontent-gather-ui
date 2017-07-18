import React from 'react';
import PropTypes from 'prop-types';

const StatusIndicator = (props) => {
  const classNames = ['status-indicator'];
  let description;
  if (props.completed) {
    classNames.push('status-indicator--completed');
  }
  if (props.current) {
    classNames.push('status-indicator--current');
    description = <p className="status-indicator__description">{ props.description }</p>;
  }
  return (
    <div className={classNames.join(' ')}>
      <div className="status-indicator--flex">
        <span
          className="status-indicator__circle"
          style={{ backgroundColor: props.color }}
        />
        <span className="status-indicator__label">{ props.label }</span>
        <span className="status-indicator__children">{ props.children }</span>
      </div>
      { description }
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
