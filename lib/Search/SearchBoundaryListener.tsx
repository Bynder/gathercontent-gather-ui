import React from 'react';
import PropTypes from 'prop-types';
import BoundaryClickWatcher from '../BoundaryClickWatcher';
import { SearchContext } from './SearchProvider';

const SearchBoundaryListener = (props: any) => <BoundaryClickWatcher
  className={`search ${props.className}`}
  outsideClickHandler={props.hideBody}
>
  {props.children}
</BoundaryClickWatcher>;

export default (props: any) => <SearchContext.Consumer>
  {({
    hideBody
  }: any) => (
    <SearchBoundaryListener hideBody={hideBody} {...props} />
  )}
</SearchContext.Consumer>;

SearchBoundaryListener.defaultProps = {
  className: ''
};

SearchBoundaryListener.propTypes = {
  children: PropTypes.node.isRequired,
  hideBody: PropTypes.func.isRequired,
  className: PropTypes.string
};

export { SearchBoundaryListener as PureSearchBoundaryListener };
