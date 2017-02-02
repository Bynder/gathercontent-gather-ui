import React from 'react';
import { Dropdown } from 'react-bootstrap/lib';

const DropdownSwitcher = ({ title, id, menu }) =>
  <Dropdown className="dropdown-switcher" id={id}>
    <div bsRole="toggle">
      <h3 className="dropdown-switcher__title">{ title }</h3>
      <i className="fa fa-caret-down dropdown-switcher__arrow" />
    </div>
    { menu }
  </Dropdown>;

DropdownSwitcher.propTypes = {
  title: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  menu: React.PropTypes.node.isRequired,
};

DropdownSwitcher.defaultProps = {
  title: '',
  id: '',
};

export default DropdownSwitcher;
