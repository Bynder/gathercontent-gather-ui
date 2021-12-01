import React from 'react';
import { func } from 'prop-types';
import { Form, FormInput } from 'lib';

function HierarchyRowForm({ onSubmit, onCancel, onChange }) {
  return (
    <Form
      className="h-width-100"
      onSubmit={onSubmit}
      onCancel={onCancel}
      escToClose
    >
      <FormInput
        onInputChange={onChange}
        onBlur={onSubmit}
        className="h-width-100 h-padding-clear"
        value=""
        focusOnMount
        noBorder
      />
    </Form>
  );
}

HierarchyRowForm.propTypes = {
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
  onChange: func.isRequired,
};

export { HierarchyRowForm };
