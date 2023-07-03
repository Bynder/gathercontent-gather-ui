import React from 'react';

export function ModalFooter({
  children,
  ...rest
}: any) {
  return <div {...rest}>{children}</div>;
}
