import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ShortcutTrigger, Button } from '..';

const SelectionBarCancel = ({ clearSelection }) => (
  <Fragment>
    <Button types={['link-default', 'collapse']} clickHandler={clearSelection}>
      Cancel (Esc)
    </Button>
    <ShortcutTrigger shortcutKey="Escape" onShortcutTrigger={clearSelection} />
  </Fragment>
);

SelectionBarCancel.propTypes = {
  clearSelection: PropTypes.func.isRequired
};

export default SelectionBarCancel;
