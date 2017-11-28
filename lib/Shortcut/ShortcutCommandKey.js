import React from 'react';
import PropTypes from 'prop-types';

const ShortcutCommandKey = props => {
  const ua = props.UAParser;

  return (
    <span className="shortcut__keyboard">
      {ua.getOS().name === 'Mac OS' ? '⌘' : 'Ctrl'}
    </span>
  );
};

ShortcutCommandKey.propTypes = {
  UAParser: PropTypes.func.isRequired
};

export default ShortcutCommandKey;
