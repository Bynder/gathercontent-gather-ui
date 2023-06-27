import { cleanup, render } from '@testing-library/react';
// @ts-expect-error TS(2307): Cannot find module 'lib/SelectionBar' or its corre... Remove this comment to see the full error message
import SelectionBar from 'lib/SelectionBar';
// @ts-expect-error TS(2307): Cannot find module 'tests/setup' or its correspond... Remove this comment to see the full error message
import { React } from 'tests/setup';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('SelectionBar', () => {
  const renderWrapper = (ui: any, props = {}) =>
    render(
      // @ts-expect-error TS(2304): Cannot find name 'hasSelected'.
      <SelectionBar hasSelected onCancel={() => {}} {...props}>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {ui}
      </SelectionBar>
    );

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {
    cleanup();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('rendering children', () => {
    // @ts-expect-error TS(2304): Cannot find name 'renderWrapper'.
    const { getByText } = renderWrapper(
      // @ts-expect-error TS(2552): Cannot find name 'Actions'. Did you mean 'actions'... Remove this comment to see the full error message
      <SelectionBar.Actions>Actions</SelectionBar.Actions>
    );

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getByText(/Actions/i)).toBeInTheDocument();
  });
});
