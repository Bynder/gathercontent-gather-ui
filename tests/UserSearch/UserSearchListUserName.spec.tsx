import { React, shallow } from "../setup";
import { Icon } from "lib";
import UserSearchListUserName from "../../lib/UserSearch/UserSearchListUserName";

describe("User Search Name", () => {
  let wrapper: any;
  const props = {
    name: "barry",
    isSelected: false,
  };

  beforeEach(() => {
    wrapper = shallow(<UserSearchListUserName {...props} />);
  });

  test("renders the name", () => {
    expect(wrapper.find(".text-overflow-ellipsis").text()).toEqual(props.name);
  });

  test("is selected adds an is-active class and an Icon", () => {
    expect(wrapper.hasClass("is-active")).toEqual(false);

    expect(wrapper.find(Icon)).toHaveLength(0);
    wrapper.setProps({ isSelected: true });

    expect(wrapper.hasClass("is-active")).toEqual(true);

    expect(wrapper.find(Icon)).toHaveLength(1);

    expect(wrapper.find(Icon).prop("name")).toEqual("boldTick");
  });
});
