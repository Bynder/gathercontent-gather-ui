import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';

const Person = ({ person, className }) => (
  <div className={`person ${className}__person`}>
    <Avatar
      className="avatar--supporting"
      url={person.avatar}
      name={person.name}
      initials={person.initials}
    />
    <div>
      <span className={`person__name ${className}__person-name`}>
        {person.name}{' '}
        {person.type && (
          <span className="text-neutral-primary">({person.type})</span>
        )}
      </span>
    </div>
  </div>
);

Person.propTypes = {
  person: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    initials: PropTypes.string,
    type: PropTypes.string
  }),
  className: PropTypes.string
};

Person.defaultProps = {
  person: {
    name: '',
    avatar: '',
    initials: '',
    type: ''
  },
  className: ''
};

export default Person;
