import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useObjectSelector } from '../../lib/SelectionProvider/useObjectSelector';
import { SelectionProvider } from '../../lib/SelectionProvider';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('useObjectSelector', () => {
  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should select the given ids', () => {
    const id = 1;
    // eslint-disable-next-line react/prop-types
    const wrapper = ({
      children
    }: any) => (
      <SelectionProvider>{children}</SelectionProvider>
    );
    const { result } = renderHook(
      () => useObjectSelector(id, 'type', [id, 2], () => false),
      { wrapper }
    );

    act(() => {
      result.current.handleClick();
    });

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(result.current.isSelected).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should use the disabled callback to determine whether the id is disabled, handleClick should do nothing', () => {
    const id = 1;
    // eslint-disable-next-line react/prop-types
    const wrapper = ({
      children
    }: any) => (
      <SelectionProvider>{children}</SelectionProvider>
    );
    const { result } = renderHook(
      () => useObjectSelector(id, 'folder', [id], () => true),
      { wrapper }
    );

    act(() => {
      result.current.handleClick();
    });

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(result.current.isSelected).toBe(false);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(result.current.isDisabled).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should use the disabled callback to determine whether the id is disabled, handleClick should do nothing', () => {
    const id = 1;
    // eslint-disable-next-line react/prop-types
    const wrapper = ({
      children
    }: any) => (
      <SelectionProvider>{children}</SelectionProvider>
    );
    const { result } = renderHook(
      () => useObjectSelector(id, 'folder', [id], () => true),
      { wrapper }
    );

    act(() => {
      result.current.handleClick();
    });

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(result.current.isSelected).toBe(false);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(result.current.isDisabled).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should handle hovering over an object', () => {
    const id = 1;
    // eslint-disable-next-line react/prop-types
    const wrapper = ({
      children
    }: any) => (
      <SelectionProvider>{children}</SelectionProvider>
    );
    const { result } = renderHook(
      () => useObjectSelector(id, 'folder', [id], () => true),
      { wrapper }
    );

    act(() => {
      result.current.handleMouseEnter();
    });

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(result.current.isHovered).toBe(true);

    act(() => {
      result.current.handleMouseLeave();
    });

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(result.current.isHovered).toBe(false);
  });
});
