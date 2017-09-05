import React from 'react';
import Label from '../Label';
import Input from './Input';

const Checkbox = props => (
  <div className="form__choice-element-wrapper">
    <Input {...props} />
    <Label {...props} />
  </div>
);

export default Checkbox;
