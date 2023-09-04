import { describe, expect, it, vi } from "vitest";

import React from "react";

import {
  fireEvent,
  getByRole,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import MentionsForm from "..";

describe("MentionsForm", () => {
  const onSubmit = vi.fn();
  const placeholder = "Try typing @ or hit the mention button";
  const mockUsers = [
    {
      id: 2,
      name: "Bruce",
      avatar:
        "https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/208205_yHGd7vA5HRxsnMQpES4UzjJ7Yxgn6Bp54165gqksRXyDJhuOnW88H6djhLJeE2BZ.jpg",
      initials: "BB",
      display: "brucebanner",
      email: "bruce@bruce.com",
    },
    {
      id: "saul",
      display: "saulgoodman",
      name: "Saul Goodman",
      initials: "SG",
      email: "heythere@lol.com",
    },
    {
      id: "456",
      display: "jessepinkman",
      name: "Jesse Pinkman",
      email: "heythere@lol.com",
      initials: "JP",
      url: "https://d3iw72m71ie81c.cloudfront.net/2eae47ef-6f37-46fe-a02b-52cff401a8f9-me.jpg",
    },
  ];

  it("Renders a comment form with the ability to mention users", async () => {
    render(
      <MentionsForm
        users={mockUsers}
        placeholder={placeholder}
        onSubmit={onSubmit}
      />
    );

    expect(
      screen.getByText("Submit & notify 0 people").hasAttribute("disabled")
    ).toBeTruthy();

    fireEvent.click(screen.getByTitle("Open user search"));

    fireEvent.click(screen.getByText(mockUsers[0].name));
    fireEvent.click(screen.getByText(mockUsers[2].name));

    fireEvent.click(screen.getByText("Submit & notify 2 people"));

    expect(onSubmit).toHaveBeenCalledWith("@jessepinkman @brucebanner ", [
      "jessepinkman",
      "brucebanner",
    ]);
  });

  it("Can display an author", () => {
    const { rerender } = render(
      <MentionsForm
        users={mockUsers}
        placeholder={placeholder}
        onSubmit={onSubmit}
      />
    );

    expect(screen.getAllByRole("figure")).toHaveLength(3);

    rerender(
      <MentionsForm
        users={mockUsers}
        placeholder={placeholder}
        onSubmit={onSubmit}
        author={mockUsers[0]}
      />
    );

    expect(screen.getAllByRole("figure")).toHaveLength(4);
  });

  it("Can prepopulate the input with default users", async () => {
    render(
      <MentionsForm
        users={mockUsers}
        placeholder={placeholder}
        onSubmit={onSubmit}
        defaultUsers={[mockUsers[1]]}
      />
    );
    await waitFor(() =>
      expect(screen.getByPlaceholderText(placeholder).innerHTML).toEqual(
        "@saulgoodman "
      )
    );
  });
});
