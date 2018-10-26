import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ShortcutTrigger } from '../';

const SelectionBarRight = props => (
  <Fragment>
    <span className="cancel-text">
      <b>Esc</b> to cancel
    </span>
    <ShortcutTrigger
      shortcutKey="Escape"
      onShortcutTrigger={props.clearSelection}
    />
  </Fragment>
);

SelectionBarRight.propTypes = {
  clearSelection: PropTypes.func.isRequired
};

export default SelectionBarRight;
