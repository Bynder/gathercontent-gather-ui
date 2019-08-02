import React from 'react';
import PropTypes from 'prop-types';
import CheckToggle from '../CheckToggle';

const UserSearchHead = ({
  searchHeading,
  subheading,
  useDisplayToggle,
  toggleListDisplay,
  toggleActive
}) => (
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

UserSearchHead.propTypes = {
  searchHeading: PropTypes.string,
  useDisplayToggle: PropTypes.bool.isRequired,
  subheading: PropTypes.string,
  toggleListDisplay: PropTypes.func.isRequired,
  toggleActive: PropTypes.bool.isRequired
};

UserSearchHead.defaultProps = {
  subheading: null,
  searchHeading: ''
};

export default UserSearchHead;
