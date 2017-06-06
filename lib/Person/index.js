import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';

const Person = props =>
  <div className="person">
    <Avatar
      className="avatar--supporting"
      src={props.avatar}
      alt={props.name}
    />
    <span className="person__name">{props.name}</span>
  </div>;

Person.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default Person;
