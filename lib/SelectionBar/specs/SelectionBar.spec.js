import { cleanup, render, fireEvent } from '@testing-library/react';
import SelectionBar from 'lib/SelectionBar';
import { React } from 'tests/setup';

describe('SelectionBar', () => {
  const renderWrapper = (ui, props = {}) =>
    render(
      <SelectionBar hasSelected onCancel={() => {}} {...props}>
        {ui}
      </SelectionBar>
    );

  afterEach(() => {
    cleanup();
  });

  test('rendering children', () => {
    const { getByText } = renderWrapper(
      <SelectionBar.Actions>Actions</SelectionBar.Actions>
    );

    expect(getByText(/Actions/i)).toBeInTheDocument();
  });

  test('rendering cancel button if prop provided', () => {
    const { getByTitle } = renderWrapper(
      <SelectionBar.Actions>Actions</SelectionBar.Actions>
    );

    expect(getByTitle('Cancel Selection')).toBeInTheDocument();
  });

  test('Clicking cancel should call provided callback', () => {
    const cancelMock = jest.fn();
    const { getByTitle } = renderWrapper(
      <SelectionBar.Actions>Actions</SelectionBar.Actions>,
      {
        onCancel: cancelMock
      }
    );

    const cancelButton = getByTitle('Cancel Selection');

    fireEvent.click(cancelButton);

    expect(cancelMock).toHaveBeenCalled();
  });
});
