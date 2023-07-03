import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const SearchContext = React.createContext({});

class SearchProvider extends Component {
  state = {
    showBody: false
  };

  displayBody = () => this.setState({ showBody: true });

  hideBody = () => this.setState({ showBody: false });

  render() {
    const sharedState = {
      showBody: this.state.showBody,
      displayBody: this.displayBody,
      hideBody: this.hideBody
    };
    return (
      <SearchContext.Provider value={sharedState}>
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
SearchProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default SearchProvider;
