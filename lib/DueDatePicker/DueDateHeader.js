import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cx from 'classnames';
import DueDateTime from './DueDateTime';
import DropdownMenu from '../DropdownMenu';
import Icon from '../Icon';

const DueDateHeader = props => {
  if (props.dueDate) {
    const date = moment(props.dueDate);

    const day = date.calendar(null, {
      sameDay: '[Today at]',
      nextDay: '[Tomorrow at]',
      nextWeek: 'dddd [at]',
      lastDay: '[Yesterday at]',
      lastWeek: '[Last] dddd [at]',
      sameElse: 'MMMM Do YYYY [at]'
    });

    const time = props.dueTime.format('LT');

    const classes = cx('duedate__header', {
      'duedate__header--overdue': date < moment().set({ hour: 0, minute: 0 })
    });

    return (
      <div className={classes}>
        Due date
        <div className="duedate__header--date">
          {day} <DueDateTime time={time} setTime={props.setTime} />
        </div>
        <DropdownMenu
          className="duedate__remove"
          caret={false}
          type="link"
          shouldDisplay
          listClassName="dropdown-menu-right"
          items={[
            {
              action: props.removeDueDate,
              name: 'Remove due date',
              linkType: 'danger'
            }
          ]}
        >
          <Icon style={{ fontSize: '18px' }} name="menuDotted" />
        </DropdownMenu>
      </div>
    );
  }

  return (
    <div className="duedate__header">
      Due date
      <div className="duedate__header--date">No due date set</div>
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
