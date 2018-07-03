import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';
import TooltipWrapper from '../TooltipWrapper';

const StatusIndicator = props => {
  const classNames = cx(props.className, {
    'status-indicator': true,
    'status-indicator--completed': props.completed,
    'status-indicator--current': props.current,
    'status-indicator--collapsed': props.collapsed,
    'status-indicator--bordered': props.bordered,
    'status-indicator--small': props.small,
    'status-indicator--soft-label': props.softLabel
  });

  const style = props.completed ? {} : { backgroundColor: props.color };

  return (
    <div className={classNames}>
      <div className="status-indicator__label-row">
        {props.preText && (
          <span className="status-indicator__pre-text">{props.preText}</span>
        )}

        <span className="status-indicator__circle" style={style} />

        {props.label && (
          <h3 className="status-indicator__label" title={props.label}>
            <span className="status-indicator__label-text">{props.label}</span>
            {props.readOnly && (
              <TooltipWrapper id={props.label} tooltipText="Read only">
                <Icon name="lock" className="status-indicator__readonly" />
              </TooltipWrapper>
            )}
          </h3>
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
  className: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  actions: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  completed: PropTypes.bool,
  current: PropTypes.bool,
  description: PropTypes.string,
  preText: PropTypes.string,
  collapsed: PropTypes.bool,
  small: PropTypes.bool,
  softLabel: PropTypes.bool,
  bordered: PropTypes.bool,
  readOnly: PropTypes.bool
};

StatusIndicator.defaultProps = {
  className: '',
  children: null,
  actions: null,
  color: '#fff',
  label: '',
  completed: false,
  current: false,
  collapsed: false,
  bordered: false,
  small: false,
  softLabel: false,
  description: '',
  preText: '',
  readOnly: false
};

export default StatusIndicator;
