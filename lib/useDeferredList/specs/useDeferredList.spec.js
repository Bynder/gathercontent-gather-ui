import { renderHook, act } from '@testing-library/react-hooks';
import { useDeferredList } from '../useDeferredList';

describe('useDeferredList', () => {
  const options = {
    listLength: 100,
    initialItemCount: 10,
    numberOfItemsToLoad: 5
  };

  it('should return initialItemCount for itemCount', () => {
    const { result } = renderHook(() => useDeferredList(options));

    expect(result.current.itemCount).toEqual(10);
  });

  it('should increase the itemCount when loadItems is called', () => {
    const { result } = renderHook(() => useDeferredList(options));

    expect(result.current.itemCount).toEqual(10);

    act(() => result.current.loadItems());

    expect(result.current.itemCount).toEqual(15);
  });

  it('should increase itemCount if the initialItems argument is updated to a higher number than the current itemCount', () => {
    let initialItemCount = 10;

    const { result, rerender } = renderHook(
      () =>
        useDeferredList({
          initialItemCount,
          listLength: 100,
          numberOfItemsToLoad: 5
        }),
      {}
    );

    expect(result.current.itemCount).toEqual(10);

    initialItemCount = 15;
    rerender();
    rerender();

    expect(result.current.itemCount).toEqual(15);
  });

  it('should not error if you call loadItems when already at the item limit', () => {
    const { result } = renderHook(() =>
      useDeferredList({ ...options, listLength: 10 })
    );

    expect(result.current.itemCount).toEqual(10);

    act(() => result.current.loadItems());

    expect(result.current.itemCount).toEqual(10);
  });

  it('should not error if you try to load more items than are in the list', () => {
    const { result } = renderHook(() =>
      useDeferredList({
        listLength: 10,
        initialItemCount: 5,
        numberOfItemsToLoad: 6
      })
    );

    expect(result.current.itemCount).toEqual(5);

    act(() => result.current.loadItems());

    expect(result.current.itemCount).toEqual(10);
  });
});
