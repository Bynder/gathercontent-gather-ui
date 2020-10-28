import { cleanup, render, fireEvent } from '@testing-library/react';
import ColField from 'lib/ColField/ColField';
import { React } from 'tests/setup';

describe('ColField', () => {
  const labelChange = jest.fn();
  const instructionChange = jest.fn();
  const defaultProps = {
    editable: true,
    labelChange,
    instructionChange,
    label: 'Howdy',
    instructions: 'Some fun instructions',
    instructionPlaceholder: 'Enter field instructions'
  };
  const renderWrapper = (props = defaultProps) =>
    render(
      <ColField>
        <ColField.Header>
          <ColField.Label
            editable={props.editable}
            onChange={props.labelChange}
            label={props.label}
          />
        </ColField.Header>
        <ColField.Body>
          <div className="py-5 px-6 text-center">field body hello!</div>
        </ColField.Body>
        <ColField.Footer>
          <ColField.Instructions
            editable={props.editable}
            onChange={props.instructionChange}
            placeholder={props.instructionPlaceholder}
            instructions={props.instructions}
          />
        </ColField.Footer>
      </ColField>
    );

  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  test('displays the editable field label', () => {
    const { getByText, getByLabelText } = renderWrapper();
    fireEvent.click(getByText(defaultProps.label));
    const labelInput = getByLabelText(
      `edit field label: ${defaultProps.label}`
    );
    fireEvent.change(labelInput, {
      target: {
        value: 'Meowdy'
      }
    });
    labelInput.blur();
    expect(labelChange).toHaveBeenCalledWith('Meowdy');
  });

  test('displays the editable field instructions', () => {
    const { getByText, getByPlaceholderText } = renderWrapper();
    expect(getByText(defaultProps.instructions));
    const instructionsInput = getByPlaceholderText(
      defaultProps.instructionPlaceholder
    );
    fireEvent.change(instructionsInput, {
      target: {
        value: 'add some lovely text'
      }
    });
    expect(instructionChange).toHaveBeenCalled();
  });

  test('displays the non-editable field label', () => {
    const { getByText, queryByText } = renderWrapper({
      ...defaultProps,
      editable: false
    });
    fireEvent.click(getByText(defaultProps.label));
    const labelInput = queryByText(`edit field label: ${defaultProps.label}`);
    expect(labelInput).toEqual(null);
  });

  test('displays the non-editable field instructions', () => {
    const { getByText, queryByPlaceholderText } = renderWrapper({
      ...defaultProps,
      editable: false
    });
    expect(getByText(defaultProps.instructions));
    const instructionsInput = queryByPlaceholderText(
      defaultProps.instructionPlaceholder
    );
    expect(instructionsInput).toEqual(null);
  });

  test('displays the field body', () => {
    const { getByText } = renderWrapper();
    expect(getByText('field body hello!'));
  });
});
