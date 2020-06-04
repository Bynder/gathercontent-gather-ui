import React from 'react';
import ReactSelect from 'react-select';
import { styles } from './styles';

function Select(props) {
  return <ReactSelect {...props} styles={styles} />;
}

export { Select };
