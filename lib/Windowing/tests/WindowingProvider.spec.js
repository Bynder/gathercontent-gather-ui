import {
  render,
  fireEvent,
  waitForElement,
  queryByTestId
} from '@testing-library/react';
import { React } from '../../../tests/setup';
import { WindowingProvider, InViewList, InViewListItem } from '../..';

jest.mock('debounce', () => fn => fn);

describe('WindowingProvider', () => {
  const items = [...new Array(50)].map((i, index) => ({
    id: index + 1
  }));

  beforeEach(() => {
    jest.useFakeTimers();
  });

  const createWrapper = () => (
    <WindowingProvider
      style={{ overflow: 'scroll', position: 'relative', height: '50px' }}
      containerHeight={50}
    >
      <InViewList items={items} itemHeight={10}>
        {({ renderIndexes, baseStyle, itemsInView }) =>
          itemsInView.map((i, index) => (
            <InViewListItem
              key={i.id}
              index={index}
              baseStyle={baseStyle}
              renderIndexes={renderIndexes}
            >
              <div data-testid={`test-id-${i.id}`}>Hello world.</div>
            </InViewListItem>
          ))
        }
      </InViewList>
    </WindowingProvider>
  );

  it('renders 15 ({ start: 0, end: 15 }) in-view items', async () => {
    const { getByTestId, container } = render(createWrapper());
    await waitForElement(() => [
      getByTestId('test-id-1'),
      getByTestId('test-id-15')
    ]);

    expect(queryByTestId(container, 'test-id-16')).toBeNull();
  });

  it('renders 15 ({ start: 20, end: 35 }) in-view items', async () => {
    const { getByTestId, container } = render(createWrapper());
    await waitForElement(() => [
      getByTestId('test-id-1'),
      getByTestId('test-id-15')
    ]);

    fireEvent.scroll(getByTestId('windowing-scroller'), {
      target: { scrollTop: 200 }
    });

    jest.advanceTimersByTime(WindowingProvider.defaultProps.debounceTimer);

    await waitForElement(() => [
      getByTestId('test-id-20'),
      getByTestId('test-id-35')
    ]);

    expect(queryByTestId(container, 'test-id-9')).toBeNull();
  });
});
