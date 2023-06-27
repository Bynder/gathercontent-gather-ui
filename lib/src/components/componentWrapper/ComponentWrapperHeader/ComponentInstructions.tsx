import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib/ExpandingTextArea' or its ... Remove this comment to see the full error message
import ExpandingTextArea from 'lib/ExpandingTextArea';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'link... Remove this comment to see the full error message
import Linkify from 'linkifyjs/react';

export function ComponentInstructions({
  editable,
  instructions,
  onChange
}: any) {
  if (editable) {
    return (
      <ExpandingTextArea
        className="component-instructions"
        type="text"
        value={instructions}
        handleOnChange={onChange}
        placeholder="Add some instructions for the component..."
      />
    );
  }
  return (
    <div className="component-instructions">
      <Linkify>{instructions}</Linkify>
    </div>
  );
}
