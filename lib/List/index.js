import React from 'react';
import PropTypes from 'prop-types';
import ListHead from './ListHead';

const List = props => (
  <div className="list">
    <ListHead
      title={props.title}
      action={props.action}
    />

    <div className="list__body">
      { React.Children.map(props.children, child => (
        <div className="list__row">
          { React.cloneElement(child, {}) }
        </div>
      )) }
    </div>
  </div>
);

List.defaultProps = {
  title: null,
  action: null,
};

List.propTypes = {
  title: PropTypes.string,
  action: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape()),
  ]).isRequired,
};

export default List;
