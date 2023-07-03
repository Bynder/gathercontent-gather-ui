import { React, mount } from "../setup";
import { Avatar, AvatarGroup } from "../../lib";

describe("AvatarGroup", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(
      <AvatarGroup maximum={3}>
        <Avatar initials="MR" name="Mike Rotch" />
        <Avatar initials="HJ" name="Hugh Jass" />
        <Avatar initials="FD" name="Fedra Droid" />
        <Avatar initials="KM" name="Kann Schemll" />
      </AvatarGroup>
    );
  });

  test("renders a single Avatar", () => {
    const mountedWrapper = mount(
      <AvatarGroup maximum={3}>
        <Avatar initials="MR" name="Mike Rotch" />
      </AvatarGroup>
    );

    expect(mountedWrapper.find(Avatar).length).toEqual(1);
  });

  test("renders an AvatarGroup component", () => {
    expect(wrapper.find('[data-component="avatar-group"]')).toHaveLength(1);
  });

  test("renders an additional avatar for toggling", () => {
    const customWrapper = mount(
      <AvatarGroup maximum={1}>
        <Avatar initials="MR" name="Mike Rotch" />
        <Avatar initials="HJ" name="Hugh Jass" />
        <Avatar initials="FD" name="Fedra Droid" />
        <Avatar initials="KM" name="Kann Schemll" />
      </AvatarGroup>
    );

    expect(customWrapper.find(Avatar).length).toEqual(5);
  });

  test("renders the initials for an Avatar when the prop is enabled", () => {
    const first = wrapper.find(Avatar).first();

    expect(first.find(".avatar__initials").length).toEqual(1);

    expect(first.find(".avatar__initials").text()).toEqual("MR");
  });

  test("sets the correct zindex style for the first and last item", () => {
    const customWrapper = mount(
      <AvatarGroup maximum={4}>
        <Avatar initials="MR" name="Mike Rotch" />
        <Avatar initials="HJ" name="Hugh Jass" />
        <Avatar initials="FD" name="Fedra Droid" />
        <Avatar initials="KM" name="Kann Schemll" />
      </AvatarGroup>
    );

    const first = customWrapper.find(".avatar-group__item").first();

    expect(first.prop("style")).toEqual({ zIndex: 4 });

    const last = customWrapper.find(".avatar-group__item").last();

    expect(last.prop("style")).toEqual({ zIndex: 1 });
  });

  test("adds a small modifier", () => {
    expect(wrapper.find(".avatar-group").hasClass("avatar-group--small")).toBe(
      false
    );
    wrapper.setProps({ small: true });
    wrapper.update();

    expect(wrapper.find(".avatar-group").hasClass("avatar-group--small")).toBe(
      true
    );
  });
});
