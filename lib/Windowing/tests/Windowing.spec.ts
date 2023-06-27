import { render, fireEvent, waitForElement } from '@testing-library/react';
import { React } from '../../../tests/setup';
import { Windowing } from '../..';

jest.mock('debounce', () => fn => fn);

describe('Windowing', () => {
  const items = [...new Array(50)].map((i, index) => ({
    id: index + 1
  }));

  beforeEach(() => {
    jest.useFakeTimers();
  });

  const createFlatWrapper = () => (
    <Windowing allIds={items} itemHeight={10} containerHeight={50} buffer={10}>
      <Windowing.Scroller>
        <Windowing.List>
          {({ inViewWindowingIds }) =>
            inViewWindowingIds.map((i, index) => (
              <Windowing.Item key={i.id} index={index}>
                <div data-testid={`test-id-${i.id}`}>Hello world.</div>
              </Windowing.Item>
            ))
          }
        </Windowing.List>
      </Windowing.Scroller>
    </Windowing>
  );

  it('renders 15 ({ start: 0, end: 15 }) in-view items', async () => {
    const { getByTestId, queryByTestId } = render(createFlatWrapper());
    await waitForElement(() => [
      getByTestId('test-id-1'),
      getByTestId('test-id-15')
    ]);

    fireEvent.scroll(getByTestId('windowing-scroller'), {
      target: { scrollTop: 0 }
    });

    jest.advanceTimersByTime(Windowing.defaultProps.debounceTimer);

    expect(queryByTestId('test-id-16')).toBeNull();
  });

  it('renders 15 ({ start: 20, end: 35 }) in-view items', async () => {
    const { getByTestId, queryByTestId } = render(createFlatWrapper());
    await waitForElement(() => [
      getByTestId('test-id-1'),
      getByTestId('test-id-15')
    ]);

    fireEvent.scroll(getByTestId('windowing-scroller'), {
      target: { scrollTop: 200 }
    });

    jest.advanceTimersByTime(Windowing.defaultProps.debounceTimer);

    await waitForElement(() => [
      getByTestId('test-id-20'),
      getByTestId('test-id-35')
    ]);

    expect(queryByTestId('test-id-9')).toBeNull();
  });
});
