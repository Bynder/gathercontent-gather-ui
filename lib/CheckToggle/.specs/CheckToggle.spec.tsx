import {
  describe,
  expect,
  it,
} from 'vitest';

import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import CheckToggle from '../index';

const classList = ['disabled', 'margin-large', 'size-small'];

describe("CheckToggle", () => {
  it("Should have modifier classnames depending on props", () => {
    const { rerender } = render(
      <CheckToggle 
        id="check-toggle" 
      />
    );

    let checkToggleWrapper = screen.getByRole('checkbox')?.parentElement?.parentElement;

    classList.map(modifierClass => {
      expect(checkToggleWrapper?.classList.contains(modifierClass)).toBe(false);
    });

    rerender(
      <CheckToggle 
        id="check-toggle" 
        disabled
        displaySmall 
        marginSizeLarge
      />
    );

    classList.map(modifierClass => {
      expect(checkToggleWrapper?.classList.contains(modifierClass)).toBeTruthy();
    });
  });

  it("Should add a modifier class when props.displayChecked is set", () => {
    render(
      <CheckToggle id="check-toggle" displayChecked />
    );

    fireEvent.click(screen.getByRole('checkbox'));

    expect(screen.getByRole('checkbox').parentElement?.parentElement?.classList.contains('is-checked')).toBeTruthy();
  });
});