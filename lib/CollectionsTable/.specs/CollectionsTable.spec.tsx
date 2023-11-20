import { describe, expect, it } from "vitest";

import React from "react";

import { render, screen } from "@testing-library/react";

import CollectionsTable from "../index";

describe("CollectionsTableRow", () => {
  it("Should add modifier classes when props are set", () => {
    render(
      <CollectionsTable.Row selected disabled>
        Hello world
      </CollectionsTable.Row>
    );

    expect(
      screen
        .getByRole("row")
        .classList.contains("gui-collections-table__row--selected")
    ).toBeTruthy();
    expect(
      screen
        .getByRole("row")
        .classList.contains("gui-collections-table__row--disabled")
    ).toBeTruthy();
  });
});

describe("CollectionsTableCellContent", () => {
  it("Should add an overflow modifier class when props.allowOverflow is set", () => {
    render(
      <CollectionsTable.Cell allowOverflow>Hello world</CollectionsTable.Cell>
    );

    const tableCell = screen.getByRole("cell");

    expect(
      tableCell
        .querySelector(".gui-collections-table__cell-content")
        ?.classList.contains(
          "gui-collections-table__cell-content--allow-overflow"
        )
    ).toBeTruthy();
  });
});
