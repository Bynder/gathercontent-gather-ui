import { React, shallow } from "../setup";
import ToggleFilter from "../../lib/Search/ToggleFilter";
import { CheckToggle } from "lib";

describe("SearchBoundaryListener", () => {
  let wrapper: any;
  let clickHandlerSpy: any;

  beforeEach(() => {
    clickHandlerSpy = jest.fn();
    wrapper = shallow(
      <ToggleFilter
        label="search toggle"
        clickHandler={clickHandlerSpy}
        displayChecked
      />
    );
  });

  test("renders a CheckToggle", () => {
    expect(wrapper.find(CheckToggle)).toHaveLength(1);

    expect(wrapper.find(CheckToggle).prop("clickHandler")).toEqual(
      clickHandlerSpy
    );

    expect(wrapper.find(CheckToggle).prop("labelRight")).toEqual(
      "search toggle"
    );

    expect(wrapper.find(CheckToggle).prop("displaySmall")).toEqual(true);

    expect(wrapper.find(CheckToggle).prop("displayChecked")).toEqual(true);
  });
});
