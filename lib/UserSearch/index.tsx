import React, { useState } from 'react';
import Dropdown from '../Dropdown';
import { filterUsers } from '../helpers';
import UserSearchList from './UserSearchList';
import UserSearchHead from './UserSearchHead';

export function UserSearch({
  users,
  displayEmail,
  onToggle,
  searchHeading,
  addUser,
  selectedUserIds,
  noUserDisplay,
  minUserLength,
  inputRef,
  subheading,
  useDisplayToggle,
  hideAfterPerformingAction,
  className,
  displayList: propsDisplayList
}: any) {
  const [searchedUsers, setSearchedUsers] = useState(null);
  const [displayList, setDisplayList] = useState(propsDisplayList);

  const searchForUsers = (e: any) => {
    const { value } = e.target;
    if (value.trim() !== '' && users.length > 0) {
      setSearchedUsers(filterUsers(users, value, displayEmail));
    } else {
      setSearchedUsers(null);
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const toggleListDisplay = () => {
    onToggle(!displayList);
    setDisplayList(!displayList);
  };

  return (
    <div className={`user-search ${className}`}>
      <UserSearchHead
        searchHeading={searchHeading}
        subheading={subheading}
        useDisplayToggle={useDisplayToggle}
        toggleListDisplay={toggleListDisplay}
        toggleActive={displayList}
      />
      {displayList && (
        <>
          <Dropdown.ActionGroup className="user-search__search-wrapper">
            <input
              className="user-search__search-input"
              onChange={searchForUsers}
              type="text"
              placeholder="Search people..."
              ref={inputRef}
              onKeyPress={handleKeyPress}
            />
          </Dropdown.ActionGroup>
          <Dropdown.ActionGroup className="user-search__search-results">
            <UserSearchList
              users={searchedUsers || users}
              noUsers={users.length <= minUserLength}
              addUser={addUser}
              selectedUserIds={selectedUserIds}
              displayEmail={displayEmail}
              noUserDisplay={noUserDisplay}
              hideAfterPerformingAction={hideAfterPerformingAction}
            />
          </Dropdown.ActionGroup>
        </>
      )}
    </div>
  );
}

UserSearch.defaultProps = {
  searchHeading: 'Search...',
  className: '',
  selectedUserIds: [],
  useDisplayToggle: false,
  displayList: true,
  subheading: null,
  minUserLength: 0,
  noUserDisplay: 'Looks like there are no people!',
  hideAfterPerformingAction: false,
  onToggle: () => {},
  inputRef: {}
};

// disabling linter here since I think its just getting confused with refs
// eslint-disable-next-line react/no-multi-comp
export default React.forwardRef((props: any, ref: any) => (
  <UserSearch inputRef={ref} {...props} />
));

export { UserSearch as PureUserSearch };
