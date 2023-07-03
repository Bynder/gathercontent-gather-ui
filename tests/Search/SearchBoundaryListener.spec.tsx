import { BoundaryClickWatcher } from "lib";
import { React, shallow } from "../setup";
import { PureSearchBoundaryListener } from "../../lib/Search/SearchBoundaryListener";

describe("SearchBoundaryListener", () => {
  let wrapper: any;
  let hideBodySpy: any;

  beforeEach(() => {
    hideBodySpy = jest.fn();
    wrapper = shallow(
      <PureSearchBoundaryListener hideBody={hideBodySpy}>
        <div className="child">small child</div>
      </PureSearchBoundaryListener>
    );
  });

  test("renders a BoundaryClickWatcher", () => {
    expect(wrapper.find(BoundaryClickWatcher)).toHaveLength(1);

    expect(
      wrapper.find(BoundaryClickWatcher).prop("outsideClickHandler")
    ).toEqual(hideBodySpy);
  });
});
