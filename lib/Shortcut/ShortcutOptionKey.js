import React from 'react';
import UAParser from 'ua-parser-js';

const ShortcutOptionKey = () => {
  const ua = new UAParser();
  return (
    <span className="shortcut__keyboard">
      {ua.getOS().name === 'Mac OS' ? 'Option' : 'Alt'}
    </span>
  );
};

export default ShortcutOptionKey;
