import React from "react";

function SearchListItem(props: any) {
  return (
    <div className="search-item">
      {props.title && <div className="search-item__title">{props.title}</div>}
      {props.children && (
        <div className="search-item__content">{props.children}</div>
      )}
      {props.subText && (
        <div className="search-item__subtext">{props.subText}</div>
      )}
    </div>
  );
}

SearchListItem.defaultProps = {
  title: "",
  subText: "",
};

export default SearchListItem;
