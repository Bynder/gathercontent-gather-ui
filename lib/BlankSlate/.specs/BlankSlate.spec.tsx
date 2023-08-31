import {
  describe,
  expect,
  it,
} from 'vitest';

import React from 'react';

import { render, screen } from '@testing-library/react';

import BlankSlate from "../index";

// @ts-expect-error
import keyboardSVG from "../../../assets/icons/keyboard.svg";

describe('Blank Slate', () => {
  it('Renders the BlankSlate SVG', () => {
    render(
      <BlankSlate>
        <div className="child">I am a small child</div>
      </BlankSlate>
    );

    const blankSlate = screen.getByTestId("blank-slate");
    expect(blankSlate.querySelector('svg')).toBeTruthy();
  });

  it("Adds a fixed modifier", () => {
    const { rerender } = render(<BlankSlate />);

    let blankSlate = screen.getByTestId("blank-slate");
    
    expect(blankSlate.classList.contains("blank-slate--fixed")).toBe(false);

    rerender(<BlankSlate fixed />)

    blankSlate = screen.getByTestId("blank-slate");

    expect(blankSlate.classList.contains("blank-slate--fixed")).toBeTruthy();
  });

  it("Adds a style modifer", () => {
    const { rerender } = render(<BlankSlate />);

    let blankSlate = screen.getByTestId("blank-slate");

    expect(blankSlate.classList.contains("blank-slate--arrow")).toBe(false);

    rerender(<BlankSlate slateStyle='arrow' />)

    blankSlate = screen.getByTestId("blank-slate");

    expect(blankSlate.classList.contains("blank-slate--arrow")).toBe(true);
  });

  it("Renders its children", () => {
    render(
      <BlankSlate>
        <div data-testid="child">I am a small child</div>
      </BlankSlate>
    );

    expect(screen.getByTestId('child')).toBeTruthy();
  });

  it("Renders a customSVG", () => {
    const { rerender } = render(<BlankSlate />);

    let blankSlate = screen.getByTestId("blank-slate");

    expect(blankSlate.querySelector(".blank-slate__svg--custom")).toBe(null);

    rerender(<BlankSlate customSVG={keyboardSVG} />)

    blankSlate = screen.getByTestId("blank-slate");

    expect(blankSlate.querySelector(".blank-slate__svg--custom")).toBeTruthy();
  });
});