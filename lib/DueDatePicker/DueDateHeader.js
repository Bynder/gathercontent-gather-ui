import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cx from 'classnames';
import DueDateTime from './DueDateTime';
import Dropdown from '../Dropdown';
import Icon from '../Icon';

const DueDateHeader = props => {
  if (props.dueDate) {
    const date = moment(props.dueDate);

    const day = date
      .set({ hour: props.dueTime.hour(), minute: props.dueTime.minute() })
      .calendar(null, {
        sameDay: '[Today at]',
        nextDay: '[Tomorrow at]',
        nextWeek: 'dddd [at]',
        lastDay: '[Yesterday at]',
        lastWeek: '[Last] dddd [at]',
        sameElse: 'MMMM Do YYYY [at]'
      });

    const time = props.dueTime.format('LT');

    const classes = cx('duedate__header--date', {
      'color-overdue': date < moment()
    });

    return (
      <div className="duedate__header">
        Due date
        <div className={classes}>
          {day} <DueDateTime time={time} setTime={props.setTime} />
        </div>
        <Dropdown className="duedate__remove" id="duedate__remove">
          <Dropdown.Trigger>
            <Icon name="menuDotted" />
          </Dropdown.Trigger>
          <Dropdown.Content right collapse>
            <Dropdown.ActionGroup>
              <Dropdown.Action action={props.removeDueDate} danger>
                Remove due date
              </Dropdown.Action>
            </Dropdown.ActionGroup>
          </Dropdown.Content>
        </Dropdown>
      </div>
    );
  }

  return (
    <div className="duedate__header">
      Due date
      <div className="duedate__header--date duedate__header--not-set">
        No due date set
      </div>
    </div>
  );
};

DueDateHeader.propTypes = {
  removeDueDate: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
  dueDate: PropTypes.shape(),
  dueTime: PropTypes.shape()
};

DueDateHeader.defaultProps = {
  dueDate: null,
  dueTime: null
};

export default DueDateHeader;
