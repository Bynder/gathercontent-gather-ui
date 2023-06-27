import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Searc... Remove this comment to see the full error message
import { Search } from "../../lib";
import SearchBoundaryListener from "../../lib/Search/SearchBoundaryListener";
import SearchProvider from "../../lib/Search/SearchProvider";
import SearchList from "../../lib/Search/SearchList";
import SearchListItem from "../../lib/Search/SearchListItem";
import SearchOptions from "../../lib/Search/SearchOptions";
import ToggleFilter from "../../lib/Search/ToggleFilter";
import SearchInput from "../../lib/Search/SearchInput";
import SearchBody from "../../lib/Search/SearchBody";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Search", () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <Search>
        <div className="child">small child</div>
      </Search>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders children", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".child")).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders a SearchBoundaryListener", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(SearchBoundaryListener)).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders the SearchProvider", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(SearchProvider)).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("sets the compound static props", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Search.List).toEqual(SearchList);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Search.ListItem).toEqual(SearchListItem);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Search.Options).toEqual(SearchOptions);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Search.ToggleFilter).toEqual(ToggleFilter);

    const input = shallow(<Search.Input />);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.prop("children")()).toEqual(<SearchInput />);
    const body = shallow(<Search.Body />);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(body.prop("children")({ showBody: false })).toEqual(<SearchBody />);
  });
});
