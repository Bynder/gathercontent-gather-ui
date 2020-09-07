import { times } from 'lodash';
import { renderHook, act } from '@testing-library/react-hooks';
import { useDeferredList } from '../useDeferredList';

describe('useDeferredList', () => {
  const list = times(100, index => index);
  const options = { list, initialItemCount: 10, numberOfItemsToLoad: 5 };

  it('should render the initial list items', () => {
    const { result } = renderHook(() => useDeferredList(options));

    expect(result.current.list).toEqual(times(10, index => index));
  });

  it('should load more items when loadItems is called', () => {
    const { result } = renderHook(() => useDeferredList(options));

    expect(result.current.list).toEqual(times(10, index => index));

    act(() => result.current.loadItems());

    expect(result.current.list).toEqual(times(15, index => index));

    act(() => result.current.loadItems());

    expect(result.current.list).toEqual(times(20, index => index));
  });

  it('should not error if you try to load more items when already at the item limit', () => {
    const { result } = renderHook(() =>
      useDeferredList({ ...options, list: times(10, index => index) })
    );

    expect(result.current.list).toEqual(times(10, index => index));

    act(() => result.current.loadItems());

    expect(result.current.list).toEqual(times(10, index => index));
  });

  it('should not error if you try to load more items than are in the list', () => {
    const { result } = renderHook(() =>
      useDeferredList({
        list: times(10, index => index),
        initialItemCount: 5,
        numberOfItemsToLoad: 6
      })
    );

    expect(result.current.list).toEqual(times(5, index => index));

    act(() => result.current.loadItems());

    expect(result.current.list).toEqual(times(10, index => index));
  });
});
