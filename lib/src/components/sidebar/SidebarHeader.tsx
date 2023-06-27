import * as React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { ButtonIcon, Layout } from 'lib';

export function SidebarHeader({
  children,
  className = '',
  onClose,
  ...rest
}: any) {
  return (
    <Layout.Header className={`sidebar-header ${className}`} {...rest}>
      <div className="text-overflow-ellipsis">{children}</div>
      {onClose && (
        <ButtonIcon
          name="cross"
          onClick={onClose}
          size={ButtonIcon.sizes.md}
          iconTitle="Close sidebar"
          className="flex-shrink-0"
        />
      )}
    </Layout.Header>
  );
}
