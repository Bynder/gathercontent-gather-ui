import React from "react";

function SearchListItem(props: any) {
  return (
    <div className="gui-search-item">
      {props.title && (
        <div className="gui-search-item__title">{props.title}</div>
      )}
      {props.children && (
        <div className="gui-search-item__content">{props.children}</div>
      )}
      {props.subText && (
        <div className="gui-search-item__subtext">{props.subText}</div>
      )}
    </div>
  );
}

SearchListItem.defaultProps = {
  title: "",
  subText: "",
};

export default SearchListItem;
