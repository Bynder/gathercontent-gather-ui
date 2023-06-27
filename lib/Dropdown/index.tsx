import React from 'react';
import PropTypes from 'prop-types';
import DropdownAction from './DropdownAction';
import DropdownActionGroup from './DropdownActionGroup';
import { DropdownContent } from './DropdownContent';
import DropdownSection from './DropdownSection';
import DropdownTrigger from './DropdownTrigger';
import DropdownHeader from './DropdownHeader';
import DropdownFooter from './DropdownFooter';
import DropdownProvider from './DropdownProvider';
import DropdownInfo from './DropdownInfo';

const Dropdown = props => <DropdownProvider {...props} />;

Dropdown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  id: PropTypes.string.isRequired,
  onToggle: PropTypes.func,
  onHide: PropTypes.func,
  className: PropTypes.string,
  autoPosition: PropTypes.bool,
  block: PropTypes.bool,
  persistShow: PropTypes.bool
};

Dropdown.defaultProps = {
  onToggle: () => {},
  onHide: () => {},
  className: '',
  autoPosition: false,
  block: false,
  persistShow: false
};

Dropdown.Action = DropdownAction;
Dropdown.ActionGroup = DropdownActionGroup;
Dropdown.Content = DropdownContent;
Dropdown.Header = DropdownHeader;
Dropdown.Footer = DropdownFooter;
Dropdown.Section = DropdownSection;
Dropdown.Info = DropdownInfo;
Dropdown.Trigger = DropdownTrigger;

export default Dropdown;
