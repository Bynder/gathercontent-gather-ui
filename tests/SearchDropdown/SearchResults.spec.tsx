import { EventCodeWatcher } from "lib";
import { React, shallow } from "../setup";
import SearchResults from "../../lib/SearchDropdown/SearchResults";

describe("SearchResults", () => {
  let wrapper: any;

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

  beforeEach(() => {
    wrapper = shallow(
      <SearchResults
        results={mockResults}
        // @ts-expect-error
        input={mockInput}
        hideResults={hideResults}
      />
    );
  });

  test("not rendering anything when the input is not set", () => {
    expect(wrapper.find(EventCodeWatcher)).toHaveLength(4);
    wrapper.setProps({ input: null });

    expect(wrapper.find(EventCodeWatcher)).toHaveLength(0);
  });

  test("incrementing the highlight index by 1", () => {
    const watcher = wrapper.find(EventCodeWatcher).first();

    expect(watcher.props()).toEqual({
      element: mockInput,
      keyCode: 40,
      eventName: "keydown",
      onKeyCodePress: wrapper.instance().highlightNextResult,
      preventDefault: true,
    });

    watcher.prop("onKeyCodePress")();
    wrapper.update();

    expect(wrapper.state("highlightedIndex")).toBe(1);

    watcher.prop("onKeyCodePress")();
    wrapper.update();

    expect(wrapper.state("highlightedIndex")).toBe(2);

    watcher.prop("onKeyCodePress")();
    wrapper.update();

    expect(wrapper.state("highlightedIndex")).toBe(0);
  });

  test("decrementing the highlight index by 1", () => {
    const watcher = wrapper.find(EventCodeWatcher).at(1);

    expect(watcher.props()).toEqual({
      element: mockInput,
      keyCode: 38,
      eventName: "keydown",
      onKeyCodePress: wrapper.instance().highlightPrevResult,
      preventDefault: true,
    });
    watcher.prop("onKeyCodePress")();

    expect(wrapper.state("highlightedIndex")).toBe(2);
    watcher.prop("onKeyCodePress")();

    expect(wrapper.state("highlightedIndex")).toBe(1);
    watcher.prop("onKeyCodePress")();

    expect(wrapper.state("highlightedIndex")).toBe(0);
  });

  test("triggering the action on the highlighted result", () => {
    const watcher = wrapper.find(EventCodeWatcher).at(2);

    expect(watcher.props()).toEqual({
      element: mockInput,
      keyCode: 13,
      eventName: "keypress",
      onKeyCodePress: wrapper.instance().triggerHighlightedResultAction,
      preventDefault: false,
    });
    watcher.prop("onKeyCodePress")();

    expect(actionSpy).toHaveBeenCalledTimes(1);
  });

  test("rendering the results", () => {
    expect(wrapper.find(".dropdown__item")).toHaveLength(3);

    expect(
      wrapper
        .find(".dropdown__item")
        .first()
        .find("button")
        .hasClass("dropdown__link--highlighted")
    ).toBe(true);
  });

  test("calling props.hideResults when the esc key is pressed", () => {
    const watcher = wrapper.find(EventCodeWatcher).last();

    expect(watcher.props()).toEqual({
      element: mockInput,
      keyCode: 27,
      eventName: "keydown",
      onKeyCodePress: hideResults,
      preventDefault: false,
    });
    watcher.prop("onKeyCodePress")();

    expect(actionSpy).toHaveBeenCalledTimes(1);
  });

  test("hovering over results sets a specific highlighted index", () => {
    wrapper.find(".dropdown__item").last().find("button").prop("onMouseOver")();

    expect(wrapper.state("highlightedIndex")).toBe(mockResults.length - 1);
  });
});
