import React from 'react';
import PropTypes from 'prop-types';

function SearchList(props: any) {
  return <div className="search-list">
  {props.heading && (
    <div className="search-list__heading">{props.heading}</div>
  )}
  {props.children}
</div>
}

SearchList.defaultProps = {
  heading: ''
};

SearchList.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string
};

export default SearchList;
