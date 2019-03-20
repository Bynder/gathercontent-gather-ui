import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import SearchList from './SearchList';
import SearchBody from './SearchBody';
import SearchListItem from './SearchListItem';
import SearchOptions from './SearchOptions';
import ToggleFilter from './ToggleFilter';
import SearchBoundaryListener from './SearchBoundaryListener';
import SearchProvider, { SearchContext } from './SearchProvider';

class Search extends Component {
  static Input = props => (
    <SearchContext.Consumer>
      {context => <SearchInput {...context} {...props} />}
    </SearchContext.Consumer>
  );

  static Body = props => (
    <SearchContext.Consumer>
      {({ showBody }) => <SearchBody showBody={showBody} {...props} />}
    </SearchContext.Consumer>
  );

  static List = SearchList;

  static ListItem = SearchListItem;

  static Options = SearchOptions;

  static ToggleFilter = ToggleFilter;

  render() {
    return (
      <SearchProvider>
        <SearchBoundaryListener className={this.props.className}>
          {this.props.children}
        </SearchBoundaryListener>
      </SearchProvider>
    );
  }
}

Search.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Search.defaultProps = {
  className: ''
};

export default Search;
