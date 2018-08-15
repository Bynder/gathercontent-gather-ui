import React from 'react';
import { BoundaryClickWatcher } from '../';
import { SearchContext } from './SearchProvider';

const SearchBoundaryListener = props => (
  <BoundaryClickWatcher className="search" outsideClickHandler={props.hideBody}>
    {props.children}
  </BoundaryClickWatcher>
);

export default props => (
  <SearchContext.Consumer>
    {({hideBody}) => <SearchBoundaryListener hideBody={hideBody} {...props} />}
  </SearchContext.Consumer>
);

export { SearchBoundaryListener as PureSearchBoundaryListener };
