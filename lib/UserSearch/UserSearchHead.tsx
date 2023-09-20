import React from "react";
import CheckToggle from "../CheckToggle";

function UserSearchHead({
  searchHeading,
  subheading,
  useDisplayToggle,
  toggleListDisplay,
  toggleActive,
}: any) {
  return (
    <div className="user-search__search-head">
      <div className="user-search__search-head-top">
        {searchHeading && (
          <span className="user-search__search-heading">{searchHeading}</span>
        )}
        {useDisplayToggle && (
          <CheckToggle
            id="userSearchToggle"
            displaySmall
            displayChecked
            clickHandler={toggleListDisplay}
            checked={toggleActive}
          />
        )}
      </div>
      {subheading && (
        <span className="user-search__search-subheading">{subheading}</span>
      )}
    </div>
  );
}

UserSearchHead.defaultProps = {
  subheading: null,
  searchHeading: "",
};

export default UserSearchHead;
