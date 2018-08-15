import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const SearchBody = props => {
  const classNames = cx(`search__body ${props.className}`, {
    'display-results': props.showBody,
  });

  return (
    <div className={classNames}>
      {props.children}
    </div>
  )
};

SearchBody.defaultProps = {
  className: ''
};

SearchBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default SearchBody;
