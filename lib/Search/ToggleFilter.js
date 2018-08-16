import React from 'react';
import PropTypes from 'prop-types';
import { CheckToggle } from '../';

const ToggleFilter = props => (
  <div className="search-options__toggle">
    <CheckToggle
      id="search-toggle"
      labelRight={props.label}
      displaySmall
      displayChecked
      clickHandler={props.clickHandler}
    />
  </div>
);

ToggleFilter.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default ToggleFilter;
