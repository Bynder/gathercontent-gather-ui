import { FinderNavigation } from "lib";
import { React, shallow } from "../setup";
import FinderItem from "../../lib/FinderNavigation/FinderItem";
import FinderGroup from "../../lib/FinderNavigation/FinderGroup";

describe("FinderNavigation", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <FinderNavigation>
        <FinderNavigation.Group>hello!</FinderNavigation.Group>
      </FinderNavigation>
    );
  });

  test("renders children", () => {
    expect(wrapper.find(FinderNavigation.Group)).toHaveLength(1);
  });

  test("sets the compound static props", () => {
    expect(FinderNavigation.Group).toEqual(FinderGroup);

    expect(FinderNavigation.Item).toEqual(FinderItem);
  });
});
