import { Search } from "lib";
import { React, shallow } from "../setup";
import SearchBoundaryListener from "../../lib/Search/SearchBoundaryListener";
import SearchProvider from "../../lib/Search/SearchProvider";
import SearchList from "../../lib/Search/SearchList";
import SearchListItem from "../../lib/Search/SearchListItem";
import SearchOptions from "../../lib/Search/SearchOptions";
import ToggleFilter from "../../lib/Search/ToggleFilter";
import SearchInput from "../../lib/Search/SearchInput";
import SearchBody from "../../lib/Search/SearchBody";

describe("Search", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <Search>
        <div className="child">small child</div>
      </Search>
    );
  });

  test("renders children", () => {
    expect(wrapper.find(".child")).toHaveLength(1);
  });

  test("renders a SearchBoundaryListener", () => {
    expect(wrapper.find(SearchBoundaryListener)).toHaveLength(1);
  });

  test("renders the SearchProvider", () => {
    expect(wrapper.find(SearchProvider)).toHaveLength(1);
  });

  test("sets the compound static props", () => {
    expect(Search.List).toEqual(SearchList);

    expect(Search.ListItem).toEqual(SearchListItem);

    expect(Search.Options).toEqual(SearchOptions);

    expect(Search.ToggleFilter).toEqual(ToggleFilter);

    const input = shallow(<Search.Input />);

    expect(input.prop("children")()).toEqual(<SearchInput />);
    const body = shallow(<Search.Body />);
    // @ts-expect-error
    expect(body.prop("children")({ showBody: false })).toEqual(<SearchBody />);
  });
});
