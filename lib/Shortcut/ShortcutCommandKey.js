import React from 'react';
import UAParser from 'ua-parser-js';

const ShortcutCommandKey = () => {
  const ua = new UAParser();
  return (
    <span className="shortcut__keyboard">
      {ua.getOS().name === 'Mac OS' ? '⌘' : 'CTRL'}
    </span>
  );
};

export default ShortcutCommandKey;
