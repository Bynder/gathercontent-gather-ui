import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';

const Person = ({ person }) =>
  (<div className="person">
    <Avatar
      className="avatar--supporting"
      url={person.avatar}
      name={person.name}
    />
    <span className="person__name">{person.name}</span>
  </div>);

Person.propTypes = {
  person: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
  }),
};

Person.defaultProps = {
  person: {
    name: '',
    avatar: '',
  },
};

export default Person;
