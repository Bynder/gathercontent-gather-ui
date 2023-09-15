import React from "react";
import { describe, expect, it } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useShiftSelect } from "../useShiftSelect";
import { SelectionProvider } from "../";

describe("useShiftSelect", () => {
  it("selects multiple when shift clicking", () => {
    let id = 1;
    // eslint-disable-next-line react/prop-types
    const wrapper = ({ children }: any) => (
      <SelectionProvider>{children}</SelectionProvider>
    );
    const { result, rerender } = renderHook(
      () => useShiftSelect(id, [1, 2, 3], "type"),
      { wrapper }
    );

    act(() => {
      result.current.handleSelection({ shiftKey: false });
    });

    expect(result.current.isSelected).toBe(true);

    expect(result.current.selected).toEqual([id]);

    id = 3;
    rerender();
    act(() => {
      result.current.handleSelection({ shiftKey: true });
    });

    expect(result.current.isSelected).toBe(true);

    expect(result.current.selected).toEqual([1, 2, id]);

    id = 1;
    rerender();

    act(() => {
      result.current.handleSelection({ shiftKey: true });
    });

    expect(result.current.isSelected).toBe(false);

    expect(result.current.selected).toEqual([]);
  });

  it("doesnt select multiple when shift isnt held down", () => {
    let id = 1;
    // eslint-disable-next-line react/prop-types
    const wrapper = ({ children }: any) => (
      <SelectionProvider>{children}</SelectionProvider>
    );
    const { result, rerender } = renderHook(
      () => useShiftSelect(id, [1, 2, 3], "type"),
      { wrapper }
    );

    act(() => {
      result.current.handleSelection({ shiftKey: false });
    });

    expect(result.current.isSelected).toBe(true);

    expect(result.current.selected).toEqual([id]);

    id = 3;
    rerender();
    act(() => {
      result.current.handleSelection({ shiftKey: false });
    });

    expect(result.current.isSelected).toBe(true);

    expect(result.current.selected).toEqual([1, id]);
  });
});
