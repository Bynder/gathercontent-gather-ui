import { describe, expect, it, vi } from "vitest";

import React from "react";

import {
  fireEvent,
  getByRole,
  getByText,
  getByTitle,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import ImageLoader from "../ImageLoader";

describe("ImageLoader", () => {
  it("shows a loader until the image has loaded", async () => {
    const onLoad = vi.fn();
    render(
      <ImageLoader
        alt="an image"
        src="https://placekitten.com/g/500/500"
        onLoad={onLoad}
      />
    );

    expect(screen.getByTitle("Loading"));
    fireEvent.load(screen.getByRole("img"));
    waitForElementToBeRemoved(screen.getByTitle("Loading"));
    expect(onLoad).toBeCalled();
  });

  it("displays an error state", async () => {
    const onLoad = vi.fn();
    const onError = vi.fn();
    render(
      <ImageLoader
        alt="an image"
        src="https://placekitten.com/g/600/500"
        onError={onError}
        onLoad={onLoad}
      />
    );

    fireEvent.error(screen.getByRole("img"));
    expect(onError).toBeCalled();
    expect(screen.getByText("Oops, this image seems to be missing."));
  });
});
