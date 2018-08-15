import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import SearchBody from './SearchBody';
import SearchList from './SearchList';
import SearchListItem from './SearchListItem';
import SearchOptions from './SearchOptions';
import ToggleFilter from './ToggleFilter';
import { BoundaryClickWatcher } from '../';
import SearchProvider, { SearchContext } from './SearchProvider';

class Search extends Component {
  static Input = SearchInput;
  static Body = SearchBody;
  static List = SearchList;
  static ListItem = SearchListItem;
  static Options = SearchOptions;
  static ToggleFilter = ToggleFilter;

  render() {
    return (
      <SearchProvider>
        <BoundaryClickWatcher
          className="search"
          outsideClickHandler={this.props.hideBody}
        >
          {this.props.children}
        </BoundaryClickWatcher>
      </SearchProvider>
    );
  }
}

Search.propTypes = {
  children: PropTypes.node.isRequired
};

export default props => (
  <SearchContext.Consumer>
    {({hideBody}) => <Search {...props} hideBody={hideBody} />}
  </SearchContext.Consumer>
);

export { Search as PureSearch };
