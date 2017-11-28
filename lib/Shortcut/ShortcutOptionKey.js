import React from 'react';
import PropTypes from 'prop-types';

const ShortcutOptionKey = props => {
  const ua = props.UAParser;

  return (
    <span className="shortcut__keyboard">
      {ua.getOS().name === 'Mac OS' ? 'Option' : 'Alt'}
    </span>
  );
};

ShortcutOptionKey.propTypes = {
  UAParser: PropTypes.func.isRequired
};

export default ShortcutOptionKey;
