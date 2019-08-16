import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useObjectSelector } from '../../lib/SelectedObjectsProvider/useObjectSelector';
import { SelectedObjectsProvider } from '../../lib/SelectedObjectsProvider';

describe('useObjectSelector', () => {
  it('should select the given ids', () => {
    const id = 1;
    // eslint-disable-next-line react/prop-types
    const wrapper = ({ children }) => (
      <SelectedObjectsProvider>{children}</SelectedObjectsProvider>
    );
    const { result } = renderHook(
      () => useObjectSelector(id, 'type', [id, 2], () => false),
      { wrapper }
    );

    act(() => {
      result.current.handleClick();
    });

    expect(result.current.isSelected).toBe(true);
  });

  it('should use the disabled callback to determine whether the id is disabled, handleClick should do nothing', () => {
    const id = 1;
    // eslint-disable-next-line react/prop-types
    const wrapper = ({ children }) => (
      <SelectedObjectsProvider>{children}</SelectedObjectsProvider>
    );
    const { result } = renderHook(
      () => useObjectSelector(id, 'folder', [id], () => true),
      { wrapper }
    );

    act(() => {
      result.current.handleClick();
    });

    expect(result.current.isSelected).toBe(false);
    expect(result.current.isDisabled).toBe(true);
  });

  it('should use the disabled callback to determine whether the id is disabled, handleClick should do nothing', () => {
    const id = 1;
    // eslint-disable-next-line react/prop-types
    const wrapper = ({ children }) => (
      <SelectedObjectsProvider>{children}</SelectedObjectsProvider>
    );
    const { result } = renderHook(
      () => useObjectSelector(id, 'folder', [id], () => true),
      { wrapper }
    );

    act(() => {
      result.current.handleClick();
    });

    expect(result.current.isSelected).toBe(false);
    expect(result.current.isDisabled).toBe(true);
  });

  it('should handle hovering over an object', () => {
    const id = 1;
    // eslint-disable-next-line react/prop-types
    const wrapper = ({ children }) => (
      <SelectedObjectsProvider>{children}</SelectedObjectsProvider>
    );
    const { result } = renderHook(
      () => useObjectSelector(id, 'folder', [id], () => true),
      { wrapper }
    );

    act(() => {
      result.current.handleMouseEnter();
    });

    expect(result.current.isHovered).toBe(true);

    act(() => {
      result.current.handleMouseLeave();
    });

    expect(result.current.isHovered).toBe(false);
  });
});
