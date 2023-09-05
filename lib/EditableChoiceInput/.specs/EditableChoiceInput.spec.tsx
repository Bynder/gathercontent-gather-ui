import {
  describe,
  expect,
  it,
  vi
} from 'vitest';

import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import EditableChoiceInput from '../index';

describe("EditableChoiceInput", () => {
  it("Displays a radio or checkbox input depending on the specified type", () => {
    const { rerender } = render(
      <EditableChoiceInput type="radio" onChange={() => {}} />
    );
    const container = document.querySelector('body');

    expect(container?.querySelector('input[type="radio"]')).toBeTruthy();

    rerender(<EditableChoiceInput type="checkbox" onChange={() => {}} />);

    expect(container?.querySelector('input[type="checkbox"]')).toBeTruthy();
  });

  it("Displays a text input", async () => {
    const onChangeSpy = vi.fn();

    const user = userEvent.setup();

    render(
      <EditableChoiceInput type="radio" onChange={onChangeSpy} />
    );

    const textInput = screen.getByTestId("editable-choice-text-input");

    await user.type(textInput, 'A nice option');

    expect(onChangeSpy).toHaveBeenCalledTimes(13);
  });

  it("Displays a read only text input", async () => {
    const onChangeSpy = vi.fn();

    const user = userEvent.setup();

    render(
      <EditableChoiceInput type="radio" onChange={onChangeSpy} readOnly />
    );

    const textInput = document.querySelector('input[type="text"]') as HTMLElement;

    await user.type(textInput, 'A nice option');

    expect(onChangeSpy).toHaveBeenCalledTimes(0);
  });

  it("Displays an aside", async () => {
    const user = userEvent.setup();

    render(
      <EditableChoiceInput type="radio" onChange={() => {}} aside={<div>Howdy!</div>} />
    );

    expect(screen.queryByText("Howdy!")).toBeFalsy();

    const container = document.querySelector('body');

    const textInput = container?.querySelector('input[type="text"]') as HTMLElement;

    await user.hover(textInput);

    expect(screen.getByText("Howdy!")).toBeTruthy();
  });
});