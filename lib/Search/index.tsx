import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";
import SearchBody from "./SearchBody";
import SearchListItem from "./SearchListItem";
import SearchOptions from "./SearchOptions";
import ToggleFilter from "./ToggleFilter";
import SearchBoundaryListener from "./SearchBoundaryListener";
import SearchProvider, { SearchContext } from "./SearchProvider";

class Search extends Component {
  static Input = (props: any) => (
    <SearchContext.Consumer>
      {(context: any) => <SearchInput {...context} {...props} />}
    </SearchContext.Consumer>
  );

  static Body = (props: any) => (
    <SearchContext.Consumer>
      {({ showBody }: any) => <SearchBody showBody={showBody} {...props} />}
    </SearchContext.Consumer>
  );

  static List = SearchList;

  static ListItem = SearchListItem;

  static Options = SearchOptions;

  static ToggleFilter = ToggleFilter;

  render() {
    return (
      <SearchProvider>
        {/* @ts-expect-error TS(2339): Property 'className' does not exist on type 'Reado... Remove this comment to see the full error message */}
        <SearchBoundaryListener className={this.props.className}>
          {this.props.children}
        </SearchBoundaryListener>
      </SearchProvider>
    );
  }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Search.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// @ts-expect-error TS(2339): Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
Search.defaultProps = {
  className: "",
};

export default Search;
