import { describe, expect, it, vi } from "vitest";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import PageInformation from "..";

describe("PageInformation", () => {
  it("Renders page information and an editable title", () => {
    const renameMock = vi.fn();
    render(
      <PageInformation
        title="I am the title"
        contextName="title"
        subtitle="I'm the subtitle"
        editable
        rename={renameMock}
      />
    );
    expect(screen.getByText("I am the title"));
    expect(screen.getByText("I'm the subtitle"));

    fireEvent.click(screen.getByText("I am the title"));
    fireEvent.change(screen.getByLabelText("Rename title"), {
      target: { value: "hey" },
    });
    fireEvent.blur(screen.getByLabelText("Rename title"));
    expect(renameMock).toHaveBeenCalledWith("hey");
  });
});
