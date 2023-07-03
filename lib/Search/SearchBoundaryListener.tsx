import React from "react";
import PropTypes from "prop-types";
import BoundaryClickWatcher from "../BoundaryClickWatcher";
import { SearchContext } from "./SearchProvider";

function SearchBoundaryListener(props: any) {
  return (
    <BoundaryClickWatcher
      className={`search ${props.className}`}
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

SearchBoundaryListener.propTypes = {
  children: PropTypes.node.isRequired,
  hideBody: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export { SearchBoundaryListener as PureSearchBoundaryListener };
