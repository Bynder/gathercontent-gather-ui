import React from 'react';
import PropTypes from 'prop-types';

const SearchList = props => (
  <div className="search-list">
    <div className="search-list__heading">{props.heading}</div>
    {props.children}
  </div>
);

export default SearchList;
