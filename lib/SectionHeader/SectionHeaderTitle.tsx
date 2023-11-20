import React from "react";
import { Dropdown, Icon } from "lib";

export function SectionHeaderTitle({ children, title }: any) {
  const Title = <h1 className="gui-section-header__title">{title}</h1>;

  if (children) {
    return (
      <Dropdown className="relative" id="section-header-title-dropdown">
        <Dropdown.Trigger triggerClassName="flex items-center">
          {Title} <Icon className="ml-2" name="down" />
        </Dropdown.Trigger>
        <Dropdown.Content collapse>{children}</Dropdown.Content>
      </Dropdown>
    );
  }

  return Title;
}
