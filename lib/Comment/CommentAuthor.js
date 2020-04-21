import React from 'react';
import { string, shape } from 'prop-types';
import Person from '../Person';

export function CommentAuthor({ author }) {
  return <Person person={author} className="conversation" />;
}

CommentAuthor.propTypes = {
  author: shape({
    avatar: string,
    name: string,
    initials: string
  })
};

CommentAuthor.defaultProps = {
  author: {}
};
