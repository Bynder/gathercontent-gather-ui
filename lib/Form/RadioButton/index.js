import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import Input from './Input';

const Radio = props => (
  <div className="form__choice-element-wrapper" key={props.id}>
    <Input {...props} />
    <Label {...props} />
  </div>
);

Radio.propTypes = {
  id: PropTypes.string.isRequired
};

export default Radio;
