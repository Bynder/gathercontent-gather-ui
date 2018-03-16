import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';
import Button from '../Button';

const DueDateLabel = ({ dueDate, clickHandler }) => {
  if (!dueDate) {
    return (
      <Button
        types={['link-default', 'collapse']}
        clickHandler={clickHandler}
        className="duedate__label duedate__label--button"
      >
        No due date set
      </Button>
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
        <Button
          types={['link-default', 'collapse']}
          clickHandler={clickHandler}
          className="duedate__label--button"
        >
          {dueDate.date.fromNow()}
        </Button>
      </span>
    </div>
  );
};

DueDateLabel.propTypes = {
  dueDate: PropTypes.shape(),
  clickHandler: PropTypes.func.isRequired
};

DueDateLabel.defaultProps = {
  dueDate: null
};

export default DueDateLabel;
