import { describe, expect, it, vi } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import { Windowing } from "../..";

vi.mock("debounce", () => (fn: any) => fn);

describe("Windowing", () => {
  const items = [...new Array(50)].map((i, index) => ({
    id: index + 1,
  }));

  beforeEach(() => {
    vi.useFakeTimers();
  });

  const createFlatWrapper = () => (
    // @ts-expect-error TS(2709): Cannot use namespace 'Windowing' as a type.
    <Windowing allIds={items} itemHeight={10} containerHeight={50} buffer={10}>
      {/* @ts-expect-error TS(2694): Namespace 'Windowing' has no exported member 'Scro... Remove this comment to see the full error message */}
      <Windowing.Scroller>
        {/* @ts-expect-error TS(2694): Namespace 'Windowing' has no exported member 'List... Remove this comment to see the full error message */}
        <Windowing.List>
          {({ inViewWindowingIds }: any) =>
            inViewWindowingIds.map((i: any, index: any) => (
              // @ts-expect-error TS(2694): Namespace 'Windowing' has no exported member 'Item... Remove this comment to see the full error message
              <Windowing.Item key={i.id} index={index}>
                <div data-testid={`test-id-${i.id}`}>Hello world.</div>
                {/* @ts-expect-error */}
              </Windowing.Item>
            ))
          }
          {/* @ts-expect-error */}
        </Windowing.List>
        {/* @ts-expect-error */}
      </Windowing.Scroller>
    </Windowing>
  );

  it("renders 15 ({ start: 0, end: 15 }) in-view items", async () => {
    const { getByTestId } = render(createFlatWrapper());
    await waitFor(() => [getByTestId("test-id-1"), getByTestId("test-id-15")]);

    fireEvent.scroll(getByTestId("windowing-scroller"), {
      target: { scrollTop: 0 },
    });

    vi.advanceTimersByTime(Windowing.defaultProps.debounceTimer);
  });

  it("renders 15 ({ start: 20, end: 35 }) in-view items", async () => {
    const { getByTestId, queryByTestId } = render(createFlatWrapper());
    await waitFor(() => [getByTestId("test-id-1"), getByTestId("test-id-15")]);

    fireEvent.scroll(getByTestId("windowing-scroller"), {
      target: { scrollTop: 200 },
    });

    vi.advanceTimersByTime(Windowing.defaultProps.debounceTimer);

    await waitFor(() => [getByTestId("test-id-20"), getByTestId("test-id-35")]);

    expect(queryByTestId("test-id-9")).toBeNull();
  });
});
