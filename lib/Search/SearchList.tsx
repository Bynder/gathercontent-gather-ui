import React from "react";

function SearchList(props: any) {
  return (
    <div className="gui-search-list">
      {props.heading && (
        <div className="gui-search-list__heading">{props.heading}</div>
      )}
      {props.children}
    </div>
  );
}

SearchList.defaultProps = {
  heading: "",
};

export default SearchList;
