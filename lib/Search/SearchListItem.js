import React from 'react';
import PropTypes from 'prop-types';

const SearchListItem = props => (
  <div className="search-item">
    { props.title &&
      <div className="search-item__title">{props.title}</div>
    }
    {props.children &&
      <div className="search-item__content">{props.children}</div>
    }
    { props.subText &&
      <div className="search-item__subtext">{props.subText}</div>
    }
  </div>
);

export default SearchListItem;
