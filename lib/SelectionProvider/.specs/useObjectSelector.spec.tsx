import React from "react";
import {
    describe,
    expect,
    it,
} from 'vitest'; 
import { renderHook, act } from "@testing-library/react-hooks";
import { useObjectSelector } from "../useObjectSelector";
import { SelectionProvider } from "../";


describe("useObjectSelector", () => {
  it("should select the given ids", () => {
    const id = 1;
    // eslint-disable-next-line react/prop-types
    const wrapper = ({ children }: any) => (
      <SelectionProvider>{children}</SelectionProvider>
    );
    const { result } = renderHook(
      () => useObjectSelector(id, "type", [id, 2], () => false),
      { wrapper }
    );

    act(() => {
      result.current.handleClick();
    });

    expect(result.current.isSelected).toBe(true);
  });

  it("should use the disabled callback to determine whether the id is disabled, handleClick should do nothing", () => {
    const id = 1;
    // eslint-disable-next-line react/prop-types
    const wrapper = ({ children }: any) => (
      <SelectionProvider>{children}</SelectionProvider>
    );
    const { result } = renderHook(
      () => useObjectSelector(id, "folder", [id], () => true),
      { wrapper }
    );

    act(() => {
      result.current.handleClick();
    });

    expect(result.current.isSelected).toBe(false);

    expect(result.current.isDisabled).toBe(true);
  });

  it("should use the disabled callback to determine whether the id is disabled, handleClick should do nothing", () => {
    const id = 1;
    // eslint-disable-next-line react/prop-types
    const wrapper = ({ children }: any) => (
      <SelectionProvider>{children}</SelectionProvider>
    );
    const { result } = renderHook(
      () => useObjectSelector(id, "folder", [id], () => true),
      { wrapper }
    );

    act(() => {
      result.current.handleClick();
    });

    expect(result.current.isSelected).toBe(false);

    expect(result.current.isDisabled).toBe(true);
  });

  it("should handle hovering over an object", () => {
    const id = 1;
    // eslint-disable-next-line react/prop-types
    const wrapper = ({ children }: any) => (
      <SelectionProvider>{children}</SelectionProvider>
    );
    const { result } = renderHook(
      () => useObjectSelector(id, "folder", [id], () => true),
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
