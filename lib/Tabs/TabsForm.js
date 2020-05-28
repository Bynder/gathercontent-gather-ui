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
  const handleOnBlur = e => {
    if (submitOnBlur) {
      if (e.relatedTarget) {
        const targetIsTabForm = e.relatedTarget.classList.contains(
          'tabs__item-form'
        );
        const targetIsCancel = e.relatedTarget.classList.contains(
          'tabs__cancel'
        );
        if (targetIsTabForm || targetIsCancel) {
          return null;
        }
      }
      return onSubmit(e.target.value);
    }
    return null;
  };
  return (
    <Form
      onSubmit={handleOnSubmit}
      onCancel={handleOnCancel}
      className="tabs__item is-editing tabs__item-form px-4 py-0"
      escToClose
      tabIndex={-1}
      onBlur={handleOnBlur}
    >
      <FormInput
        value={value}
        className="tabs__input px-2 py-1 hover:text-white"
        placeholder={placeholder}
        focusOnMount
        onInputChange={onInputChange}
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
