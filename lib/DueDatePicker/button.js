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
        className="duedate__link duedate__link--set-duedate"
      >
        <Icon name="clock" />
        <span>Set due date</span>
      </Button>
    );
  }

  const dueDate = moment(props.dueDate);

  const overdue = dueDate < props.today;

  const classes = cx('duedate__link', {
    'duedate__link--overdue': overdue
  });

  return (
    <span className={classes}>
      {overdue && <Icon name="warning" />}
      {`Due to be completed `}
      <Button types={['link-default', 'collapse']} clickHandler={props.toggle}>
        {moment(props.dueDate).fromNow()}
      </Button>
    </span>
  );
};

DueDateButton.propTypes = {
  dueDate: PropTypes.shape(),
  toggle: PropTypes.func.isRequired,
  today: PropTypes.shape.isRequired
};

DueDateButton.defaultProps = {
  dueDate: null
};

export default DueDateButton;
