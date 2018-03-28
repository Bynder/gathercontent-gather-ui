import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const StatusIndicator = props => {
  const classNames = cx({
    'status-indicator': true,
    'status-indicator--completed': props.completed,
    'status-indicator--current': props.current,
    'status-indicator--collapsed': props.collapsed,
    'status-indicator--bordered': props.bordered
  });

  const style = props.completed ? {} : { backgroundColor: props.color };

  return (
    <div className={classNames}>
      <div className="status-indicator--flex">
        <span className="status-indicator__circle" style={style} />
        {props.label && (
          <span className="status-indicator__label" title={props.label}>{props.label}</span>
        )}
        {props.actions && (
          <span className="status-indicator__actions">{props.actions}</span>
        )}
      </div>
      {props.current && (
        <p className="status-indicator__description">{props.description}</p>
      )}
      {props.children && (
        <div className="status-indicator__children">{props.children}</div>
      )}
    </div>
  );
};

StatusIndicator.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  actions: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  completed: PropTypes.bool,
  current: PropTypes.bool,
  description: PropTypes.string,
  collapsed: PropTypes.bool,
  bordered: PropTypes.bool
};

StatusIndicator.defaultProps = {
  children: null,
  actions: null,
  color: '#fff',
  label: '',
  completed: false,
  current: false,
  collapsed: false,
  bordered: false,
  description: ''
};

export default StatusIndicator;
