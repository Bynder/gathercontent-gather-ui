import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../Form/FormInput';
import Form from '../Form';

const TabForm = ({ onSubmit, onCancel, value }) => {
  const handleOnSubmit = e => onSubmit(e.target[0].value);

  return (
    <Form
      onSubmit={handleOnSubmit}
      onCancel={onCancel}
      className="tabs__item is-editing"
      escToClose
    >
      <FormInput value={value} className="tabs__input" focusOnMount />
    </Form>
  );
};

TabForm.propTypes = {
  value: PropTypes.string,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func.isRequired
};

TabForm.defaultProps = {
  value: '',
  onCancel() {}
};

export default TabForm;
