import React from 'react';
import PropTypes from 'prop-types';

function FinderItemSettings({
  className,
  children
}: any) {
  return <div className={`finder-item-settings ${className}`}>{children}</div>
}

FinderItemSettings.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

FinderItemSettings.defaultProps = {
  className: ''
};

export default FinderItemSettings;
