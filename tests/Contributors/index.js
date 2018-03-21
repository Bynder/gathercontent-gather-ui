import { React, mount } from '../setup';
import Contributors from '../../lib/Contributors';
import SearchDropdown from '../../lib/SearchDropdown';
import AvatarWithInformation from '../../lib/Avatar/AvatarWithInformation';

describe('Contributors', () => {
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

    wrapper = mount(
      <Contributors
        currentAssignees={mockAssignees}
        currentViewers={mockViewers}
        searchResults={mockResults}
        removeAssignee={removeAssigneeSpy}
        handleSearchChange={handleSearchChangeSpy}
        handleClearResults={handleClearResultsSpy}
        userCanAddAssignee
      />
    );
  });

  test('should render the assignees', () => {
    expect(wrapper.find('.contributors__list-item')).toHaveLength(2);
  });

  test('should render the empty text if there are no assignees', () => {
    wrapper.setProps({ currentAssignees: [] });
    expect(wrapper.find('.contributors__list-item')).toHaveLength(0);
  });

  test('should render the viewers', () => {
    expect(wrapper.find('.viewing-list-item')).toHaveLength(1);
  });

  test('should toggle showing the SearchDropdown', () => {
    expect(wrapper.find(SearchDropdown)).toHaveLength(0);
    wrapper.find('.show-search').simulate('click');
    const assingeeSearch = wrapper.find(SearchDropdown);
    expect(assingeeSearch).toHaveLength(1);
    expect(assingeeSearch.prop('results')).toEqual(mockResults);
    expect(assingeeSearch.prop('onInputClear')).toEqual(handleClearResultsSpy);
    expect(assingeeSearch.prop('handleOnChange')).toEqual(
      handleSearchChangeSpy
    );
  });

  test('hides the correct parts of the UI if userCanAddAssignee is false', () => {
    expect(wrapper.find('.show-search')).toHaveLength(1);
    expect(
      wrapper
        .find(AvatarWithInformation)
        .first()
        .prop('additional')
    ).not.toEqual('');
    wrapper.setProps({ currentAssignees: [] });
    expect(wrapper.find('.contributors__empty-button')).toHaveLength(1);
    wrapper.setProps({ userCanAddAssignee: false });
    expect(wrapper.find('.contributors__empty-button')).toHaveLength(0);
    wrapper.setProps({ currentAssignees: mockAssignees });
    expect(wrapper.find('.show-search')).toHaveLength(0);
    expect(
      wrapper
        .find(AvatarWithInformation)
        .first()
        .prop('additional')
    ).toEqual('');
  });
});
