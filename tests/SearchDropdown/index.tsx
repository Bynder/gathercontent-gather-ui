import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Icon'... Remove this comment to see the full error message
import { Icon } from "../../lib";
import SearchDropdown from "../../lib/SearchDropdown";
import SearchResults from "../../lib/SearchDropdown/SearchResults";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("SearchDropdown", () => {
  let wrapper: any;
  let mockResults: any;
  let handleOnChangeSpy: any;
  let onInputClearSpy: any;

  const resultsTitle = "title";

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    handleOnChangeSpy = jest.fn();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    onInputClearSpy = jest.fn();

    mockResults = [
      {
        name: "item 1",
        action: () => {},
      },
      {
        name: "item 2",
        action: () => {},
      },
    ];

    wrapper = shallow(
      <SearchDropdown
        // @ts-expect-error TS(2304): Cannot find name 'results'.
        results={mockResults}
        resultsTitle={resultsTitle}
        handleOnChange={handleOnChangeSpy}
        onInputClear={onInputClearSpy}
      />
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("should render the results if they exist", () => {
    wrapper.setState({ inputValue: "test" });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown-menu")).toHaveLength(1);
    wrapper.setProps({ results: [] });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown-menu")).toHaveLength(0);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("should call the handleOnChange prop when the input value changes", () => {
    wrapper
      .find(".dropdown-search__input")
      .simulate("change", { target: { value: "Changed value" } });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(handleOnChangeSpy).toHaveBeenCalled();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("inputValue")).toEqual("Changed value");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("onInputClear should clear the inputValue state and call the onInputClear prop", () => {
    wrapper
      .find(".dropdown-search__input")
      .simulate("change", { target: { value: "Changed value" } });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("inputValue")).toEqual("Changed value");
    wrapper.instance().clearInputValue();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("inputValue")).toEqual("");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onInputClearSpy).toHaveBeenCalled();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("setting the fullWidth prop to true should add a full-width class", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".full-width").length).toEqual(0);
    wrapper.setProps({
      fullWidth: true,
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".full-width").length).toEqual(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("setting the direction prop to up should add a dropup class", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropup").length).toEqual(0);
    wrapper.setProps({
      direction: "up",
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropup").length).toEqual(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("rendering the title of the dropdown", () => {
    wrapper.setState({ inputValue: "test" });
    const title = wrapper.find(".dropdown__item--title");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(title.find("button").prop("onClick")).toEqual(
      wrapper.instance().clearInputValue
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(title.find(".dropdown__item--name").text()).toBe(resultsTitle);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(title.find(Icon).prop("name")).toBe("cross");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("rendering <SearchResults />", () => {
    wrapper.setState({ inputValue: "test" });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(SearchResults).props()).toEqual({
      results: mockResults,
      input: null,
      hideResults: wrapper.instance().clearInputValue,
    });
  });
});
