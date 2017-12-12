import React from 'react';
import PropTypes from 'prop-types';

const ShortcutCommandKey = props => (
  <span className="shortcut__keyboard">{props.mac ? '⌘' : 'Ctrl'}</span>
);

ShortcutCommandKey.propTypes = {
  mac: PropTypes.bool.isRequired
};

export default ShortcutCommandKey;
