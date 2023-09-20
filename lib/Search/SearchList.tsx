import React from "react";

function SearchList(props: any) {
  return (
    <div className="search-list">
      {props.heading && (
        <div className="search-list__heading">{props.heading}</div>
      )}
      {props.children}
    </div>
  );
}

SearchList.defaultProps = {
  heading: "",
};

export default SearchList;
