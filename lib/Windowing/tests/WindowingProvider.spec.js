import { render, fireEvent, waitForElement } from '@testing-library/react';
import { React } from '../../../tests/setup';
import { WindowingProvider, InViewList, InViewListItem } from '../..';
import { WindowingFolderRow } from '../stories/WindowingFolderRow';

jest.mock('debounce', () => fn => fn);

describe('WindowingProvider', () => {
  describe('flat view', () => {
    const items = [...new Array(50)].map((i, index) => ({
      id: index + 1
    }));

    beforeEach(() => {
      jest.useFakeTimers();
    });

    const createFlatWrapper = () => (
      <WindowingProvider
        style={{ overflow: 'scroll', position: 'relative', height: '50px' }}
        itemsLength={items.length}
        containerHeight={50}
        itemHeight={10}
      >
        <InViewList
          items={items}
          acceptedRange={{ offset: 0, length: items.length }}
        >
          {({ itemsInView }) =>
            itemsInView.map((i, index) => (
              <InViewListItem key={i.id} index={index}>
                <div data-testid={`test-id-${i.id}`}>Hello world.</div>
              </InViewListItem>
            ))
          }
        </InViewList>
      </WindowingProvider>
    );

    it('renders 15 ({ start: 0, end: 15 }) in-view items', async () => {
      const { getByTestId, queryByTestId } = render(createFlatWrapper());
      await waitForElement(() => [
        getByTestId('test-id-1'),
        getByTestId('test-id-15')
      ]);

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

      jest.advanceTimersByTime(WindowingProvider.defaultProps.debounceTimer);

      await waitForElement(() => [
        getByTestId('test-id-20'),
        getByTestId('test-id-35')
      ]);

      expect(queryByTestId('test-id-9')).toBeNull();
    });
  });

  describe('nested view', () => {
    const createNestedWrapper = () => {
      const childrenDepth = 2;
      const itemCount = 50;

      const allIdslength = childrenDepth * itemCount + childrenDepth;

      return (
        <WindowingProvider
          style={{ overflow: 'scroll', position: 'relative', height: '500px' }}
          itemsLength={allIdslength}
          itemHeight={50}
          buffer={5}
          containerHeight={500}
        >
          <WindowingFolderRow
            index={0}
            name="folder-1"
            offset={0}
            itemCount={itemCount}
            childrenDepth={childrenDepth}
          />
        </WindowingProvider>
      );
    };

    it('renders indexes from multiple layers', async () => {
      const { getByTestId, queryByTestId } = render(createNestedWrapper());
      await waitForElement(() => [getByTestId('folder-1-1')]);

      expect(queryByTestId('folder-2-1')).toBeNull();

      fireEvent.scroll(getByTestId('windowing-scroller'), {
        target: { scrollTop: 2250 }
      });

      jest.advanceTimersByTime(WindowingProvider.defaultProps.debounceTimer);

      await waitForElement(() => [
        getByTestId('folder-1-46'),
        getByTestId('folder-2-3')
      ]);

      expect(queryByTestId('folder-1-5')).toBeNull();
      expect(queryByTestId('folder-2-45')).toBeNull();
    });

    it('renders indexes from the bottom layer', async () => {
      const { getByTestId, queryByTestId } = render(createNestedWrapper());
      await waitForElement(() => [getByTestId('folder-1-1')]);

      fireEvent.scroll(getByTestId('windowing-scroller'), {
        target: { scrollTop: 4500 }
      });

      jest.advanceTimersByTime(WindowingProvider.defaultProps.debounceTimer);

      await waitForElement(() => [getByTestId('folder-2-45')]);

      expect(queryByTestId('folder-1-5')).toBeNull();
      expect(queryByTestId('folder-2-5')).toBeNull();
    });
  });
});
