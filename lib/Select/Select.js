import React from 'react';
import { shape } from 'prop-types';
import ReactSelect from 'react-select';
import { mergeDefaultStyles } from './styles/mergeDefaultStyles';

function Select({ styles, ...rest }) {
  return <ReactSelect {...rest} styles={mergeDefaultStyles(styles)} />;
}

Select.defaultProps = {
  styles: {}
};

Select.propTypes = {
  styles: shape({})
};

export { Select };
