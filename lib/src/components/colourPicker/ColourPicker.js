import React, { useState, useRef } from 'react';
import { ButtonColour, InputIcon } from 'lib';
import { colours } from './colours';

export function ColourPicker({ currentColour }) {
  const [activeColour, setActiveColour] = useState(currentColour);
  const colourPickerRef = useRef(null);

  const handleColourChange = colour => {
    setActiveColour(colour);
  };

  const activeColourIsPreSelected = colours.some(
    colour => colour === activeColour
  );
  const coloursToMap = activeColourIsPreSelected
    ? colours
    : colours.filter((c, i) => i !== colours.length - 1);

  const validateHex = () => {
    const hasHash = activeColour.charAt(0) === '#';
    const hexWithHash = hasHash ? activeColour : `#${activeColour}`;

    const isValidHex = hexWithHash.match(
      /^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g
    );
    if (!isValidHex) {
      setActiveColour(colours[0]);
    }
    if (!hasHash) {
      setActiveColour(hexWithHash);
    }
  };

  return (
    <div className="colour-picker">
      <div className="colour-picker-colours">
        {!activeColourIsPreSelected && (
          <ButtonColour colour={activeColour} className="m-1" active />
        )}
        {coloursToMap.map(colour => (
          <ButtonColour
            colour={colour}
            className="m-1"
            key={colour}
            onClick={() => handleColourChange(colour)}
            active={colour === activeColour}
          />
        ))}
      </div>
      <div className="relative">
        <input
          type="color"
          className="opacity-0 absolute w-full h-full inset-0"
          value={activeColour}
          ref={colourPickerRef}
          onChange={e => {
            handleColourChange(e.target.value);
          }}
        />
        <InputIcon
          id="colour-picker-input"
          className="colour-picker-input"
          iconName="hash16"
          size="sm"
          value={activeColour}
          onChange={e => {
            handleColourChange(e.target.value);
          }}
          onFocus={() => {
            colourPickerRef.current.click();
          }}
          onBlur={validateHex}
        />
      </div>
    </div>
  );
}

ColourPicker.defaultProps = {
  currentColour: colours[0]
};
