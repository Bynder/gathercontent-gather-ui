import React from 'react';
import PropTypes from 'prop-types';

const ShortcutOptionKey = props => (
  <span className="shortcut__keyboard">{props.mac ? 'Option' : 'Alt'}</span>
);

ShortcutOptionKey.propTypes = {
  mac: PropTypes.bool.isRequired
};

export default ShortcutOptionKey;
