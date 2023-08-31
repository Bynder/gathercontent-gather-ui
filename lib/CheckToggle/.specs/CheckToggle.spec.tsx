import {
  describe,
  expect,
  it,
} from 'vitest';

import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import CheckToggle from '../index';

describe("CheckToggle", () => {
  it("Should have modifier classnames depending on props", () => {
    render(
      <CheckToggle 
        id="check-toggle" 
        disabled
        displaySmall 
        marginSizeLarge
      />
    );

    const checkToggleWrapper = screen.getByRole('checkbox')?.parentElement?.parentElement;

    expect(checkToggleWrapper?.classList.contains('disabled')).toBeTruthy();

    expect(checkToggleWrapper?.classList.contains('size-small')).toBeTruthy();

    expect(checkToggleWrapper?.classList.contains('margin-large')).toBeTruthy();
  });

  it("Should add a modifier class when props.displayChecked is set", () => {
    render(
      <CheckToggle id="check-toggle" displayChecked />
    );

    fireEvent.click(screen.getByRole('checkbox'));

    expect(screen.getByRole('checkbox').parentElement?.parentElement?.classList.contains('is-checked')).toBeTruthy();
  });
});