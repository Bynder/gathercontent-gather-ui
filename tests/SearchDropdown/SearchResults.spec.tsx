import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Event... Remove this comment to see the full error message
import { EventCodeWatcher } from "../../lib";
import SearchResults from "../../lib/SearchDropdown/SearchResults";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("SearchResults", () => {
  let wrapper: any;
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const actionSpy = jest.fn();

  const mockResults = [
    {
      name: "item 1",
      action: actionSpy,
    },
    {
      name: "item 2",
      action: () => {},
    },
    {
      name: "item 3",
      action: () => {},
    },
  ];

  const mockInput = React.createRef();

  const hideResults = () => {};

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <SearchResults
        // @ts-expect-error TS(2304): Cannot find name 'results'.
        results={mockResults}
        input={mockInput}
        hideResults={hideResults}
      />
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("not rendering anything when the input is not set", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(EventCodeWatcher)).toHaveLength(4);
    wrapper.setProps({ input: null });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(EventCodeWatcher)).toHaveLength(0);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("incrementing the highlight index by 1", () => {
    const watcher = wrapper.find(EventCodeWatcher).first();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(watcher.props()).toEqual({
      element: mockInput,
      keyCode: 40,
      eventName: "keydown",
      onKeyCodePress: wrapper.instance().highlightNextResult,
      preventDefault: true,
    });

    watcher.prop("onKeyCodePress")();
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("highlightedIndex")).toBe(1);

    watcher.prop("onKeyCodePress")();
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("highlightedIndex")).toBe(2);

    watcher.prop("onKeyCodePress")();
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("highlightedIndex")).toBe(0);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("decrementing the highlight index by 1", () => {
    const watcher = wrapper.find(EventCodeWatcher).at(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(watcher.props()).toEqual({
      element: mockInput,
      keyCode: 38,
      eventName: "keydown",
      onKeyCodePress: wrapper.instance().highlightPrevResult,
      preventDefault: true,
    });
    watcher.prop("onKeyCodePress")();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("highlightedIndex")).toBe(2);
    watcher.prop("onKeyCodePress")();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("highlightedIndex")).toBe(1);
    watcher.prop("onKeyCodePress")();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("highlightedIndex")).toBe(0);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("triggering the action on the highlighted result", () => {
    const watcher = wrapper.find(EventCodeWatcher).at(2);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(watcher.props()).toEqual({
      element: mockInput,
      keyCode: 13,
      eventName: "keypress",
      onKeyCodePress: wrapper.instance().triggerHighlightedResultAction,
      preventDefault: false,
    });
    watcher.prop("onKeyCodePress")();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(actionSpy).toHaveBeenCalledTimes(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("rendering the results", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown__item")).toHaveLength(3);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper
        .find(".dropdown__item")
        .first()
        .find("button")
        .hasClass("dropdown__link--highlighted")
    ).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("calling props.hideResults when the esc key is pressed", () => {
    const watcher = wrapper.find(EventCodeWatcher).last();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(watcher.props()).toEqual({
      element: mockInput,
      keyCode: 27,
      eventName: "keydown",
      onKeyCodePress: hideResults,
      preventDefault: false,
    });
    watcher.prop("onKeyCodePress")();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(actionSpy).toHaveBeenCalledTimes(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("hovering over results sets a specific highlighted index", () => {
    wrapper.find(".dropdown__item").last().find("button").prop("onMouseOver")();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("highlightedIndex")).toBe(mockResults.length - 1);
  });
});
