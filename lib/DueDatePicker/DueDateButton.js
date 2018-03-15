import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cx from 'classnames';
import Icon from '../Icon';
import Button from '../Button';

const DueDateButton = props => {
  if (!props.dueDate) {
    return (
      <Button
        types={['link-default', 'collapse']}
        clickHandler={props.toggle}
        className="duedate__button duedate__button--set-duedate duedate__toggle"
      >
        <Icon name="clock" />
        <span>Set due date</span>
      </Button>
    );
  }

  const overdue = props.dueDate < moment();

  const classes = cx('duedate__button', {
    'duedate__button--overdue': overdue
  });

  return (
    <span className={classes}>
      {overdue && <Icon name="warning" />}
      {`Due to be completed `}
      <Button
        types={['link-default', 'collapse']}
        className="duedate__toggle"
        clickHandler={props.toggle}
      >
        {props.dueDate.fromNow()}
      </Button>
    </span>
  );
};

DueDateButton.propTypes = {
  dueDate: PropTypes.shape(),
  dueTimer: PropTypes.shape(),
  toggle: PropTypes.func.isRequired
};

DueDateButton.defaultProps = {
  dueDate: null
};

export default DueDateButton;
