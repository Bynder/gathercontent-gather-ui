import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import Input from './Input';

const Checkbox = (props: any) => <div className="form__choice-element-wrapper">
  <Input {...props} />
  <Label {...props} />
</div>;

Checkbox.propTypes = {
  id: PropTypes.string.isRequired
};

export default Checkbox;
