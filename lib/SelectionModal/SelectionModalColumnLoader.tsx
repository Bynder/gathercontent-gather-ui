import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Icon } from 'lib';

function SelectionModalColumnLoader() {
  return (
    <div className="flex min-h-0 flex-col flex-grow justify-center items-center">
      <Icon name="loader" />
    </div>
  );
}

export default SelectionModalColumnLoader;
