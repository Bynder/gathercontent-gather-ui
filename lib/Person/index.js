import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';

const Person = ({ person, className, personSubheading }) => (
  <div className={`person ${className}__person`}>
    <Avatar
      className="avatar--supporting"
      url={person.avatar}
      name={person.name}
      initials={person.initials}
    />
    <div>
      {personSubheading && (
        <p className={`person__subheading ${className}__person-subheading`}>
          {personSubheading}
        </p>
      )}
      <span className={`person__name ${className}__person-name`}>
        {person.name}
      </span>
    </div>
  </div>
);

Person.propTypes = {
  person: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    initials: PropTypes.string
  }),
  className: PropTypes.string,
  personSubheading: PropTypes.string
};

Person.defaultProps = {
  person: {
    name: '',
    avatar: '',
    initials: ''
  },
  className: '',
  personSubheading: ''
};

export default Person;
