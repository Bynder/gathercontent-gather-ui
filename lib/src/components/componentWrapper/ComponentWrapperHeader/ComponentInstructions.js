import React from 'react';
import ExpandingTextArea from 'lib/ExpandingTextArea';

export function ComponentInstructions({ editable, instructions, onChange }) {
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
  return <div className="component-instructions">{instructions}</div>;
}
