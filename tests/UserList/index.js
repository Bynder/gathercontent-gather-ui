import { React, shallow } from '../setup';
import { Button } from '../../lib';
import UserList from '../../lib/UserList';
import SearchDropdown from '../../lib/SearchDropdown';
import CurrentUserList from '../../lib/UserList/CurrentUserList';
import OtherUserList from '../../lib/UserList/OtherUserList';

describe('UserList', () => {
  let wrapper;
  let mockAssignees;
  let mockResults;
  let mockViewers;
  let removeAssigneeSpy;
  let handleSearchChangeSpy;
  let handleClearResultsSpy;

  beforeEach(() => {
    removeAssigneeSpy = jest.fn();
    handleSearchChangeSpy = jest.fn();
    handleClearResultsSpy = jest.fn();

    mockAssignees = [
      {
        id: 2,
        name: 'Bruce Banner',
        initials: 'BB',
        colour: '#3D8AEB',
        isPresent: true
      },
      {
        id: 5,
        name: 'Lynda Carter',
        initials: 'LC',
        colour: '',
        isPresent: false
      }
    ];

    mockViewers = [
      {
        id: 5,
        name: 'Diana Prince',
        initials: 'DP',
        colour: '#FC5C54'
      }
    ];

    mockResults = [
      {
        name: 'Clark Kent',
        email: 'clarkkent@waffles.com',
        initials: 'CK',
        action: () => {},
        type: 'avatar'
      },
      {
        name: 'Bruce Wayne',
        email: 'brucewayne@waffles.com',
        initials: 'BW',
        action: () => {},
        type: 'avatar'
      }
    ];

    wrapper = shallow(
      <UserList
        currentUsers={mockAssignees}
        otherUsers={mockViewers}
        searchResults={mockResults}
        removeUser={removeAssigneeSpy}
        handleSearchChange={handleSearchChangeSpy}
        handleClearResults={handleClearResultsSpy}
        showUserControls
      />
    );
  });

  test('should render CurrentUserList', () => {
    expect(wrapper.find(CurrentUserList)).toHaveLength(1);
    expect(wrapper.find(CurrentUserList).prop('currentUsers')).toEqual(mockAssignees);
    expect(wrapper.find(CurrentUserList).prop('currentUsersHeading')).toEqual(
      UserList.defaultProps.currentUsersHeading
    );
    expect(wrapper.find(CurrentUserList).prop('showUserControls')).toEqual(true);
    expect(wrapper.find(CurrentUserList).prop('removeUser')).toEqual(removeAssigneeSpy);
    expect(wrapper.find(CurrentUserList).prop('removeUserText')).toEqual(
      UserList.defaultProps.removeUserText
    );
    expect(wrapper.find(CurrentUserList).prop('emptyText')).toEqual(
      UserList.defaultProps.emptyText
    );
    expect(wrapper.find(CurrentUserList).prop('emptyTextButton')).toEqual(
      UserList.defaultProps.emptyTextButton
    );
  });

  test('should render OtherUserList', () => {
    expect(wrapper.find(OtherUserList)).toHaveLength(1);
    expect(wrapper.find(OtherUserList).prop('otherUsers')).toEqual(mockViewers);
    expect(wrapper.find(OtherUserList).prop('otherUsersHeading')).toEqual(
      UserList.defaultProps.otherUsersHeading
    );
  });

  test('should toggle showing the SearchDropdown', () => {
    expect(wrapper.find(SearchDropdown)).toHaveLength(0);
    wrapper.find(Button).prop('clickHandler')();
    const assingeeSearch = wrapper.find(SearchDropdown);
    expect(assingeeSearch).toHaveLength(1);
    expect(assingeeSearch.prop('results')).toEqual(mockResults);
    expect(assingeeSearch.prop('onInputClear')).toEqual(handleClearResultsSpy);
    expect(assingeeSearch.prop('handleOnChange')).toEqual(
      handleSearchChangeSpy
    );
  });

  test('hides the correct parts of the UI if showUserControls is false', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
    wrapper.setProps({ showUserControls: false });
    expect(wrapper.find(Button)).toHaveLength(0);
  });

  test('calls props.handleClearResults when closing the SearchDropdown', () => {
    expect(handleClearResultsSpy).not.toHaveBeenCalled();
    wrapper.find(Button).prop('clickHandler')();
    expect(handleClearResultsSpy).not.toHaveBeenCalled();
    wrapper.find(Button).prop('clickHandler')();
    expect(handleClearResultsSpy).toHaveBeenCalled();
  });
});
