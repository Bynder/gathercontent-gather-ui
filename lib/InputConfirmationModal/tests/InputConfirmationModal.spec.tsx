import { describe, expect, it, vi } from "vitest";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { InputConfirmationModal } from "lib";
import React from "react";

describe("InputConfirmationModal", () => {
  const onConfirmSpy = vi.fn();
  const defaultProps = {
    onConfirm: onConfirmSpy,
    introTitle: "Do a delete",
    confirmTitle: "Confirm a delete",
    introBody: "ready to delete something?",
    confirmBody: "are you sure you are sure?",
    show: true,

    onHide: vi.fn(),
  };

  const renderWrapper = (props = defaultProps) =>
    render(<InputConfirmationModal {...props} />);

  afterEach(() => {
    cleanup();

    vi.restoreAllMocks();

    vi.clearAllMocks();
  });

  it("makes you confirm by typing the keyword", () => {
    const { getByText, getByPlaceholderText } = renderWrapper();

    expect(getByText(defaultProps.introTitle));

    expect(getByText(defaultProps.introBody));
    fireEvent.click(getByText("Confirm"));

    expect(getByText(defaultProps.confirmTitle));

    expect(getByText(defaultProps.confirmBody));
    fireEvent.click(getByText("Delete"));

    expect(onConfirmSpy).not.toBeCalled();

    const confirmInput = getByPlaceholderText("Type DELETE to confirm");
    fireEvent.change(confirmInput, {
      target: {
        value: "PLOP",
      },
    });
    fireEvent.click(getByText("Delete"));

    expect(onConfirmSpy).not.toBeCalled();

    fireEvent.change(confirmInput, {
      target: {
        value: "DELETE",
      },
    });
    fireEvent.click(getByText("Delete"));

    expect(onConfirmSpy).toBeCalled();
  });

  it("lets you skip the confirmation", () => {
    const { getByText } = renderWrapper({
      ...defaultProps,
      // @ts-expect-error TS(2345): Argument of type '{ skipConfirm: boolean; onConfir... Remove this comment to see the full error message
      skipConfirm: true,
    });

    expect(getByText(defaultProps.introTitle));

    expect(getByText(defaultProps.introBody));
    fireEvent.click(getByText("Delete"));

    expect(onConfirmSpy).toBeCalled();
  });
});
