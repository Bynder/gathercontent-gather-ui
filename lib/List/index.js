import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ListHead from './ListHead';

const List = props => {
  const listClasses = cx('list', {
    'list--bordered-right': props.borderedRight,
    'list--bordered-left': props.borderedLeft,
    'list--bordered': props.bordered
  });

  return (
    <div className={listClasses}>
      <ListHead title={props.title} action={props.action} />

      <div className="list__body">
        {React.Children.map(props.children, child => (
          <div className="list__row">{React.cloneElement(child, {})}</div>
        ))}
      </div>
    </div>
  );
};

List.defaultProps = {
  title: null,
  action: null,
  borderedRight: false,
  borderedLeft: false,
  bordered: false
};

List.propTypes = {
  title: PropTypes.string,
  action: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ]).isRequired,
  borderedRight: PropTypes.bool,
  borderedLeft: PropTypes.bool,
  bordered: PropTypes.bool
};

export default List;
