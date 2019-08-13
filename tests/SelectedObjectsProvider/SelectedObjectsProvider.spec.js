import { render, fireEvent } from '@testing-library/react';
import { React } from '../setup';
import { SelectedObjectsProvider, SelectedObjectsContext } from '../../lib';

describe('SelectedObjectsProvider', () => {
  it('appends a selected id', () => {
    const childSpy = jest.fn();

    const { getByText } = render(
      <SelectedObjectsProvider>
        <SelectedObjectsContext.Consumer>
          {context => (
            <React.Fragment>
              <button type="button" onClick={() => context.updateSelected('7')}>
                Click me!
              </button>
              {childSpy(context)}
            </React.Fragment>
          )}
        </SelectedObjectsContext.Consumer>
      </SelectedObjectsProvider>
    );

    fireEvent.click(getByText('Click me!'));

    const resultingContext = childSpy.mock.calls[1][0];

    expect(resultingContext.selected).toEqual(['7']);
    expect(resultingContext.lastInteracted).toEqual('7');
  });

  it('removes a selected id if it is already selected', () => {
    const childSpy = jest.fn();

    const { getByText } = render(
      <SelectedObjectsProvider>
        <SelectedObjectsContext.Consumer>
          {context => (
            <React.Fragment>
              <button type="button" onClick={() => context.updateSelected('7')}>
                Click me!
              </button>
              {childSpy(context)}
            </React.Fragment>
          )}
        </SelectedObjectsContext.Consumer>
      </SelectedObjectsProvider>
    );

    fireEvent.click(getByText('Click me!'));
    fireEvent.click(getByText('Click me!'));

    const resultingContext = childSpy.mock.calls[2][0];

    expect(resultingContext.selected).toEqual([]);
    expect(resultingContext.lastInteracted).toEqual('7');
  });

  //
  it('sets multiple selected ids', () => {
    const childSpy = jest.fn();

    const { getByText } = render(
      <SelectedObjectsProvider>
        <SelectedObjectsContext.Consumer>
          {context => (
            <React.Fragment>
              <button
                type="button"
                onClick={() => context.selectMultiple(['7', '8', '9', '10'])}
              >
                Click me!
              </button>
              {childSpy(context)}
            </React.Fragment>
          )}
        </SelectedObjectsContext.Consumer>
      </SelectedObjectsProvider>
    );

    fireEvent.click(getByText('Click me!'));

    const resultingContext = childSpy.mock.calls[1][0];

    expect(resultingContext.selected).toEqual(['7', '8', '9', '10']);
  });

  it('deselects multiple ids', () => {
    const childSpy = jest.fn();

    const { getByText } = render(
      <SelectedObjectsProvider>
        <SelectedObjectsContext.Consumer>
          {context => (
            <React.Fragment>
              <button
                type="button"
                onClick={() =>
                  context.selectMultiple(['7', '8', '9', '10', '5', '3', '1'])
                }
              >
                Select Multiple
              </button>
              <button
                type="button"
                onClick={() =>
                  context.deselectMultiple(['8', '9', '10', '1'], '1')
                }
              >
                Deselect Multiple
              </button>
              {childSpy(context)}
            </React.Fragment>
          )}
        </SelectedObjectsContext.Consumer>
      </SelectedObjectsProvider>
    );

    fireEvent.click(getByText('Select Multiple'));
    fireEvent.click(getByText('Deselect Multiple'));

    const resultingContext = childSpy.mock.calls[2][0];

    expect(resultingContext.selected).toEqual(['7', '5', '3']);
    expect(resultingContext.lastInteracted).toEqual('1');
  });
  //
  it('clears everything', () => {
    const childSpy = jest.fn();

    const { getByText } = render(
      <SelectedObjectsProvider>
        <SelectedObjectsContext.Consumer>
          {context => (
            <React.Fragment>
              <button
                type="button"
                onClick={() =>
                  context.selectMultiple(['7', '8', '9', '10', '5', '3', '1'])
                }
              >
                Select Multiple
              </button>
              <button type="button" onClick={() => context.clear()}>
                Clear
              </button>
              {childSpy(context)}
            </React.Fragment>
          )}
        </SelectedObjectsContext.Consumer>
      </SelectedObjectsProvider>
    );

    fireEvent.click(getByText('Select Multiple'));
    fireEvent.click(getByText('Clear'));

    const resultingContext = childSpy.mock.calls[2][0];
    expect(resultingContext.selected).toEqual([]);
    expect(resultingContext.lastInteracted).toEqual(null);
  });
});
