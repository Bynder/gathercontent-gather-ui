import { cleanup, render } from '@testing-library/react';
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
});
