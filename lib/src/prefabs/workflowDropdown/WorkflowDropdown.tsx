import React from 'react';
import Dropdown from '../../../Dropdown';
import { WorkflowDropdownContent } from './WorkflowDropdownContent';

function WorkflowDropdown({
  children
}: any) {
  return <Dropdown id="workflow-dropdown">{children}</Dropdown>;
}

WorkflowDropdown.Content = WorkflowDropdownContent;

export { WorkflowDropdown };
