import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import DropdownMenu from '../DropdownMenu';

const TabOptions = ({ options }) => (
  <DropdownMenu type={'icon-only'} items={options}>
    <span className="tabs__options">
      <Icon className="tabs__icon" name="caret" />
    </span>
  </DropdownMenu>
);

TabOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired
    })
  ).isRequired
};

export default TabOptions;
