import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Dropdown, Icon } from 'lib';

export function SectionHeaderTitle({
  children,
  title
}: any) {
  const Title = <h1 className="section-header__title">{title}</h1>;

  if (children) {
    return (
      <Dropdown className="relative">
        <Dropdown.Trigger triggerClassName="flex items-center">
          {Title} <Icon className="ml-2" name="down" />
        </Dropdown.Trigger>
        <Dropdown.Content collapse>{children}</Dropdown.Content>
      </Dropdown>
    );
  }

  return Title;
}
