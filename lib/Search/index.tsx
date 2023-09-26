import React from "react";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";
import SearchBody from "./SearchBody";
import SearchListItem from "./SearchListItem";
import SearchOptions from "./SearchOptions";
import ToggleFilter from "./ToggleFilter";
import SearchBoundaryListener from "./SearchBoundaryListener";
import SearchProvider, { SearchContext } from "./SearchProvider";

export function Search({
  className = "",
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <SearchProvider>
      <SearchBoundaryListener className={className} {...rest}>
        {children}
      </SearchBoundaryListener>
    </SearchProvider>
  );
}

// eslint-disable-next-line react/function-component-definition
Search.Input = (props: any) => (
  <SearchContext.Consumer>
    {(context: any) => <SearchInput {...context} {...props} />}
  </SearchContext.Consumer>
);

// eslint-disable-next-line react/function-component-definition
Search.Body = (props: any) => (
  <SearchContext.Consumer>
    {({ showBody }: any) => <SearchBody showBody={showBody} {...props} />}
  </SearchContext.Consumer>
);

Search.List = SearchList;

Search.ListItem = SearchListItem;

Search.Options = SearchOptions;

Search.ToggleFilter = ToggleFilter;

export default Search;
