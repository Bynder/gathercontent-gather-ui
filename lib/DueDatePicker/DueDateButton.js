import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cx from 'classnames';
import Icon from '../Icon';
import Dropdown from '../Dropdown';

const DueDateButton = ({ children, ...props }) => {
  if (!props.dueDate && !props.userCanSetDueDate) {
    return null;
  }

  const buttonTypes = ['link-default', 'collapse', ...props.types];

  if (children || !props.dueDate) {
    return (
      <Dropdown.Trigger
        className="duedate__button duedate__button--set-duedate duedate__toggle"
        useButton
        types={buttonTypes}
      >
        <span>{children || 'Set due date'}</span>
      </Dropdown.Trigger>
    );
  }

  const overdue = props.dueDate < moment();

  const classes = cx('duedate__button', {
    'color-overdue': overdue
  });

  if (!props.userCanSetDueDate) {
    return (
      <span className={classes}>
        {overdue && <Icon name="warning" />}
        Due to be completed {props.dueDate.fromNow()}
      </span>
    );
  }

  return (
    <span className={classes}>
      {overdue && <Icon name="warning" />}
      {`Due to be completed `}
      <Dropdown.Trigger
        className="duedate__toggle"
        useButton
        types={buttonTypes}
      >
        {props.dueDate.fromNow()}
      </Dropdown.Trigger>
    </span>
  );
};

DueDateButton.propTypes = {
  dueDate: PropTypes.shape(),
  children: PropTypes.string,
  userCanSetDueDate: PropTypes.bool.isRequired,
  types: PropTypes.arrayOf(PropTypes.string)
};

DueDateButton.defaultProps = {
  dueDate: null,
  children: null,
  types: []
};

export default DueDateButton;
