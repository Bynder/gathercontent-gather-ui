import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { SearchContext } from './SearchProvider';

const SearchBody = props => {
  const classNames = cx(`search__body ${props.className}`, {
    'display-results': showBody,
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

console.log(SearchContext);

export default props => (
  <SearchContext.Consumer>
    {({showBody}) => <SearchBody {...props} showBody={showBody} />}
  </SearchContext.Consumer>
);

export { SearchBody as PureSearchBody };
