import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ListHead from './ListHead';

const List = (props) => {
  const listClasses = cx({
    'list--bordered-right': props.borderedRight,
  });

  return (
    <div className={`list ${listClasses}`}>
      <ListHead
        title={props.title}
        action={props.action}
      />

      <div className="list__body">
        {React.Children.map(props.children, child => (
          <div className="list__row">
            {React.cloneElement(child, {})}
          </div>
        ))}
      </div>
    </div>
  );
};

List.defaultProps = {
  title: null,
  action: null,
  borderedRight: false,
};

List.propTypes = {
  title: PropTypes.string,
  action: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape()),
  ]).isRequired,
  borderedRight: PropTypes.bool,
};

export default List;
