import React from 'react';
import { string, bool } from 'prop-types';

export function TabsDragLine({ side, firstTab }) {
  const leftPosition = firstTab ? '0' : '-2px';

  return (
    <span
      style={{
        left: side === 'left' ? leftPosition : 'unset',
        right: side === 'right' ? '0' : 'unset'
      }}
      className={`${
        side === 'whole'
          ? 'border-2 w-full top-0 left-0'
          : 'border-t-0 border-b-0 border-l border-r'
      } absolute border-blue-primary border-solid top-0 h-full`}
    />
  );
}

TabsDragLine.propTypes = {
  side: string.isRequired,
  firstTab: bool
};

TabsDragLine.defaultProps = {
  firstTab: false
};
