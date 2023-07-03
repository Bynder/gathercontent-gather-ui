import React from 'react';
import PropTypes from 'prop-types';

const SearchOptions = (props: any) => <div className="search-options">{props.children}</div>;

SearchOptions.propTypes = {
  children: PropTypes.node.isRequired
};

export default SearchOptions;
