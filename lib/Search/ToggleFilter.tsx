import React from "react";
import CheckToggle from "../CheckToggle";

function ToggleFilter(props: any) {
  return (
    <div className="gui-search-options__toggle">
      <CheckToggle
        id="search-toggle"
        labelRight={props.label}
        displaySmall
        displayChecked={props.displayChecked}
        clickHandler={props.clickHandler}
      />
    </div>
  );
}

export default ToggleFilter;
