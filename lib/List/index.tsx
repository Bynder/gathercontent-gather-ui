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

      {props.subtitle && <div className="list__subtitle">{props.subtitle}</div>}

      <div className="list__body">
        {React.Children.map(props.children, child => {
          if (child) {
            return (
              <div className="list__row">{React.cloneElement(child, {})}</div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

List.defaultProps = {
  title: null,
  action: null,
  borderedRight: false,
  borderedLeft: false,
  bordered: false,
  subtitle: ''
};

List.propTypes = {
  title: PropTypes.string,
  action: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ]).isRequired,
  subtitle: PropTypes.string,
  borderedRight: PropTypes.bool,
  borderedLeft: PropTypes.bool,
  bordered: PropTypes.bool
};

export default List;
