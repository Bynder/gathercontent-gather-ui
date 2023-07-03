import React from 'react';
import PropTypes from 'prop-types';

function SearchOptions(props: any) {
  return <div className="search-options">{props.children}</div>
}

SearchOptions.propTypes = {
  children: PropTypes.node.isRequired
};

export default SearchOptions;
