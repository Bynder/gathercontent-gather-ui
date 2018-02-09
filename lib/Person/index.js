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
    <span className={`person__name ${className}__person-name`}>{person.name}</span>
  </div>
);

Person.propTypes = {
  person: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    initials: PropTypes.string
  }),
  className: PropTypes.string
};

Person.defaultProps = {
  person: {
    name: '',
    avatar: '',
    initials: ''
  },
  className: ''
};

export default Person;
