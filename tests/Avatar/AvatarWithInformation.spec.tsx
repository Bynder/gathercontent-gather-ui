import { React, shallow } from "../setup";
import { AvatarInformation } from "lib";

describe("AvatarGroup", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <AvatarInformation
        name="Waffle McWaffleson"
        email="waffles@waffletown.com"
      />
    );
  });

  afterEach(() => {});

  test("renders the users name", () => {
    expect(wrapper.find(".avatar__name").text()).toEqual("Waffle McWaffleson");
  });

  test("renders the users email", () => {
    expect(wrapper.find(".avatar__email").text()).toEqual(
      "waffles@waffletown.com"
    );
  });
});
