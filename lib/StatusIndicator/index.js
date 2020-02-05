import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';
import TooltipWrapper from '../TooltipWrapper';

const StatusIndicator = ({
  className,
  approved,
  completed,
  circleLarge,
  current,
  collapsed,
  bordered,
  small,
  medium,
  softLabel,
  readOnly,
  row,
  color,
  preText,
  label,
  actions,
  description,
  children,
  labelTypoSize,
  ...rest
}) => {
  const classNames = cx(className, {
    'status-indicator': true,
    'status-indicator--completed': completed,
    'status-indicator--current': current,
    'status-indicator--collapsed': collapsed,
    'status-indicator--bordered': bordered,
    'status-indicator--small': small,
    'status-indicator--medium': medium,
    'status-indicator--soft-label': softLabel,
    'status-indicator--read-only': readOnly,
    'status-indicator--row': row
  });

  const circleClassNames = cx('status-indicator__circle', {
    'status-indicator__circle--large': circleLarge || approved
  });

  const style = completed ? {} : { backgroundColor: color };

  return (
    <div className={classNames} {...rest}>
      <div className="status-indicator__label-row">
        {preText && (
          <span className="status-indicator__pre-text">{preText}</span>
        )}
        <span className={circleClassNames} style={style}>
          {approved && <Icon name="boldTickSmall" types={['white']} />}
        </span>
        {label && (
          <div className="status-indicator__label-wrapper">
            <h3 className="status-indicator__label" title={label}>
              <span
                className={`status-indicator__label-text typo-size-${labelTypoSize}`}
              >
                {label}
              </span>
            </h3>
            {readOnly && (
              <TooltipWrapper id={label} tooltipText="Read only">
                <Icon name="lock" className="status-indicator__readonly" />
              </TooltipWrapper>
            )}
          </div>
        )}

        {actions && (
          <span className="status-indicator__actions">{actions}</span>
        )}
      </div>

      {current && (
        <p className="status-indicator__description">{description}</p>
      )}

      {children && <div className="status-indicator__children">{children}</div>}
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
  medium: PropTypes.bool,
  softLabel: PropTypes.bool,
  bordered: PropTypes.bool,
  readOnly: PropTypes.bool,
  row: PropTypes.bool,
  circleLarge: PropTypes.bool,
  approved: PropTypes.bool,
  labelTypoSize: PropTypes.string
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
  medium: false,
  softLabel: false,
  description: '',
  preText: '',
  readOnly: false,
  approved: false,
  circleLarge: false,
  row: false,
  labelTypoSize: 'base'
};

export default StatusIndicator;
