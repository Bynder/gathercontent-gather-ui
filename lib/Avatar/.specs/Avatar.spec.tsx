import { describe, expect, it } from "vitest";

import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import Avatar from "../index";
import AvatarInformation from "../AvatarInformation";
import AvatarGroup from "../AvatarGroup";

const classList = [
  "gui-avatar--highlighted",
  "gui-avatar--offline",
  "gui-avatar--size-sm",
  "gui-avatar--bordered",
  "gui-avatar--animated",
  "gui-avatar--has-colour",
  "gui-avatar--is-locked",
];

describe("Avatar", () => {
  it("adds the modifer classes", () => {
    const { rerender } = render(
      <Avatar initials="AE" name="Angus Edwardson" />
    );

    let avatar = screen.getAllByRole("figure")[0];

    classList.map((modifierClass) => {
      expect(avatar.classList.contains(modifierClass)).toBe(false);
    });

    rerender(
      <Avatar
        initials="AE"
        name="Angus Edwardson"
        isHighlighted
        isOffline
        smallSize
        bordered
        animate
        colour="red"
        locked
      />
    );
    avatar = screen.getAllByRole("figure")[0];

    classList.map((modifierClass) => {
      expect(avatar.classList.contains(modifierClass)).toBeTruthy();
    });
  });

  it("renders the initials if there is no url provided", () => {
    render(<Avatar initials="AE" name="Angus Edwardson" />);

    screen.getByText("AE");
  });

  it("renders the avatar image", () => {
    render(<Avatar initials="AE" name="Angus Edwardson" url="url/to/avatar" />);

    screen.getByRole("img");
  });
});

describe("AvatarInformation", () => {
  it("Renders the stuff", () => {
    const name = "Waffle McWaffleson";
    const email = "waffles@waffletown.com";
    const { findByText } = render(
      <AvatarInformation name={name} email={email} />
    );
    expect(findByText(name));
    expect(findByText(email));
  });
});

describe("AvatarGroup", () => {
  it("Renders a group of Avatars", () => {
    render(
      <AvatarGroup maximum={4}>
        <Avatar initials="MR" name="Mike Rotch" />
        <Avatar initials="HJ" name="Hugh Jass" />
        <Avatar initials="FD" name="Fedra Droid" />
        <Avatar initials="KM" name="Kann Schemll" />
      </AvatarGroup>
    );
    const avatars = screen.queryAllByRole("figure");
    expect(avatars.length).toEqual(4);
    const firstParent = avatars[0].parentNode as HTMLElement;
    expect(firstParent.style.zIndex).toEqual("4");
    const lastParent = avatars[3].parentNode as HTMLElement;
    expect(lastParent.style.zIndex).toEqual("1");
  });

  it("Respects the maximum setting and puts the rest in a dropdown", () => {
    render(
      <AvatarGroup maximum={1}>
        <Avatar initials="MR" name="Mike Rotch" />
        <Avatar initials="HJ" name="Hugh Jass" />
        <Avatar initials="FD" name="Fedra Droid" />
        <Avatar initials="KM" name="Kann Schemll" />
      </AvatarGroup>
    );
    const avatars = screen.queryAllByRole("figure");
    expect(avatars.length).toEqual(5);
    expect(screen.getByText("+3"));
    expect(screen.getAllByRole("button"));
  });
});
