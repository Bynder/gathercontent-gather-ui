import React from "react";
import BoundaryClickWatcher from "../BoundaryClickWatcher";
import { SearchContext } from "./SearchProvider";

function SearchBoundaryListener(props: any) {
  return (
    <BoundaryClickWatcher
      className={`gui-search ${props.className}`}
      outsideClickHandler={props.hideBody}
    >
      {props.children}
    </BoundaryClickWatcher>
  );
}

export default function ListenerWithContext(props: any) {
  return (
    <SearchContext.Consumer>
      {({ hideBody }: any) => (
        <SearchBoundaryListener hideBody={hideBody} {...props} />
      )}
    </SearchContext.Consumer>
  );
}

SearchBoundaryListener.defaultProps = {
  className: "",
};

export { SearchBoundaryListener as PureSearchBoundaryListener };
