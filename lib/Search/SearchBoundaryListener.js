import React from 'react';
import PropTypes from 'prop-types';
import { BoundaryClickWatcher } from '../';
import { SearchContext } from './SearchProvider';

const SearchBoundaryListener = props => (
  <BoundaryClickWatcher className="search" outsideClickHandler={props.hideBody}>
    {props.children}
  </BoundaryClickWatcher>
);

export default props => (
  <SearchContext.Consumer>
    {({ hideBody }) => (
      <SearchBoundaryListener hideBody={hideBody} {...props} />
    )}
  </SearchContext.Consumer>
);

SearchBoundaryListener.propTypes = {
  children: PropTypes.node.isRequired,
  hideBody: PropTypes.func.isRequired
};

export { SearchBoundaryListener as PureSearchBoundaryListener };
