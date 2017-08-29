import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const StatusIndicator = (props) => {
  const classNames = cx({
    'status-indicator': true,
    'status-indicator--completed': props.completed,
    'status-indicator--current': props.current,
    'status-indicator--collapsed': props.collapsed,
    'status-indicator--last': props.last,
    'status-indicator--overdue': props.overdue,
    'status-indicator--bordered': props.bordered,
  });

  return (
    <div className={classNames}>
      <div className="status-indicator--flex">
        <span
          className="status-indicator__circle"
          style={{ backgroundColor: props.color }}
        />
        { props.label &&
          <span className="status-indicator__label">{ props.label }</span>
        }
        { props.children &&
          <span className="status-indicator__children">{ props.children }</span>
        }
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
  ]),
  completed: PropTypes.bool,
  current: PropTypes.bool,
  last: PropTypes.bool,
  overdue: PropTypes.bool,
  description: PropTypes.string,
  collapsed: PropTypes.bool,
  bordered: PropTypes.bool,
};

StatusIndicator.defaultProps = {
  color: '#fff',
  label: '',
  completed: false,
  current: false,
  last: false,
  overdue: false,
  collapsed: false,
  bordered: false,
  description: '',
  children: null,
};

export default StatusIndicator;
