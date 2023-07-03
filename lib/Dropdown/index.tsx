import React from "react";
import DropdownAction from "./DropdownAction";
import DropdownActionGroup from "./DropdownActionGroup";
import { DropdownContent } from "./DropdownContent";
import DropdownSection from "./DropdownSection";
import DropdownTrigger from "./DropdownTrigger";
import DropdownHeader from "./DropdownHeader";
import DropdownFooter from "./DropdownFooter";
import DropdownProvider from "./DropdownProvider";
import DropdownInfo from "./DropdownInfo";
import { DropdownProps } from "./.types/DropdownTypes";

export function Dropdown(props: DropdownProps) {
  return <DropdownProvider {...props} />;
}

Dropdown.defaultProps = {
  onToggle: () => {},
  onHide: () => {},
  className: "",
  autoPosition: false,
  block: false,
  persistShow: false,
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
