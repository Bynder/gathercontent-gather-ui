import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../Form/FormInput';
import Form from '../Form';
import Icon from '../Icon';
import Button from '../Button';

const TabForm = ({
  onSubmit,
  onCancel,
  value,
  placeholder,
  onInputChange,
  submitOnBlur
}) => {
  const handleOnSubmit = e => onSubmit(e.target[0].value);
  const handleOnCancel = () => {
    onInputChange('');
    onCancel();
  };
  const handleOnBlur = e => (submitOnBlur ? onSubmit(e.target.value) : null);
  return (
    <Form
      onSubmit={handleOnSubmit}
      onCancel={handleOnCancel}
      className="tabs__item is-editing"
      escToClose
    >
      <FormInput
        value={value}
        className="tabs__input"
        placeholder={placeholder}
        focusOnMount
        onInputChange={onInputChange}
        onBlur={handleOnBlur}
      />
      <Button
        className="tabs__cancel"
        types={['icon-only']}
        clickHandler={handleOnCancel}
      >
        <Icon name="cross" size="small" />
      </Button>
    </Form>
  );
};

TabForm.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func,
  submitOnBlur: PropTypes.bool
};

TabForm.defaultProps = {
  value: '',
  placeholder: '',
  onCancel() {},
  onInputChange() {},
  submitOnBlur: true
};

export default TabForm;
