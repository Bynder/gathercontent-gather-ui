import { cleanup, render, fireEvent } from '@testing-library/react';
import { React } from '../setup';
import { EditableChoiceInput } from '../../lib';

describe('EditableChoiceInput', () => {
  const defaultProps = {
    type: 'radio',
    onChange: () => {}
  };
  const renderWrapper = (props = defaultProps) =>
    render(<EditableChoiceInput {...props} />);

  afterEach(() => {
    cleanup();
  });

  test('displays a radio input', () => {
    const { container } = renderWrapper();
    const radio = container.querySelector('input[type="radio"]');
    expect(radio).toBeInTheDocument();
  });

  test('displays a checkbox input', () => {
    const { container } = renderWrapper({ ...defaultProps, type: 'checkbox' });
    const checkbox = container.querySelector('input[type="checkbox"]');
    expect(checkbox).toBeInTheDocument();
  });

  test('displays a text input', () => {
    const onChangeSpy = jest.fn();
    const { getByTestId } = renderWrapper({
      ...defaultProps,
      onChange: onChangeSpy
    });
    fireEvent.change(getByTestId('editable-choice-text-input'), {
      target: {
        value: 'A nice option'
      }
    });
    expect(onChangeSpy).toBeCalled();
  });

  test('displays a readonly text input', () => {
    const onChangeSpy = jest.fn();
    const { getByTestId } = renderWrapper({
      ...defaultProps,
      onChange: onChangeSpy,
      readOnly: true
    });
    expect(getByTestId('editable-choice-text-input')).toBeDisabled();
    expect(onChangeSpy).not.toBeCalled();
  });

  test('displays the aside', () => {
    const { queryByText, getByText, getByTestId } = renderWrapper({
      ...defaultProps,
      aside: <div>howdy!</div>
    });
    expect(queryByText('howdy!')).toEqual(null);
    const input = getByTestId('editable-choice-text-input');
    fireEvent.mouseEnter(input);
    expect(getByText('howdy!'));
  });
});
