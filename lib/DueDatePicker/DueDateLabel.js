import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';

const DueDateLabel = ({ dueDate }) => {
  if (!dueDate) {
    return (
      <span className="duedate__label duedate__label--button">
        No due date set
      </span>
    );
  }

  const classNames = cx('duedate__label', {
    'color-overdue': dueDate.overdue
  });

  return (
    <div className={classNames}>
      {dueDate.overdue && <Icon name="warning" />}
      <span>
        {`Due to be completed `}
        <span className="duedate__label--button">{dueDate.date.fromNow()}</span>
      </span>
    </div>
  );
};

DueDateLabel.propTypes = {
  dueDate: PropTypes.shape()
};

DueDateLabel.defaultProps = {
  dueDate: null
};

export default DueDateLabel;
