import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useShiftSelect } from '../../lib/SelectionProvider/useShiftSelect';
import { SelectionProvider } from '../../lib/SelectionProvider';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('useShiftSelect', () => {
  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('selects multiple when shift clicking', () => {
    let id = 1;
    // eslint-disable-next-line react/prop-types
    const wrapper = ({
      children
    }: any) => (
      <SelectionProvider>{children}</SelectionProvider>
    );
    const { result, rerender } = renderHook(
      () => useShiftSelect(id, [1, 2, 3], 'type'),
      { wrapper }
    );

    act(() => {
      result.current.handleSelection({ shiftKey: false });
    });

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(result.current.isSelected).toBe(true);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(result.current.selected).toEqual([id]);

    id = 3;
    rerender();
    act(() => {
      result.current.handleSelection({ shiftKey: true });
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(result.current.isSelected).toBe(true);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(result.current.selected).toEqual([1, 2, id]);

    id = 1;
    rerender();

    act(() => {
      result.current.handleSelection({ shiftKey: true });
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(result.current.isSelected).toBe(false);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(result.current.selected).toEqual([]);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('doesnt select multiple when shift isnt held down', () => {
    let id = 1;
    // eslint-disable-next-line react/prop-types
    const wrapper = ({
      children
    }: any) => (
      <SelectionProvider>{children}</SelectionProvider>
    );
    const { result, rerender } = renderHook(
      () => useShiftSelect(id, [1, 2, 3], 'type'),
      { wrapper }
    );

    act(() => {
      result.current.handleSelection({ shiftKey: false });
    });

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(result.current.isSelected).toBe(true);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(result.current.selected).toEqual([id]);

    id = 3;
    rerender();
    act(() => {
      result.current.handleSelection({ shiftKey: false });
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(result.current.isSelected).toBe(true);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(result.current.selected).toEqual([1, id]);
  });
});
