import React, { Fragment } from 'react';
import { arrayOf, bool, func, node, shape } from 'prop-types';
import Linkify from 'linkifyjs/react';
import Person from '../Person';
import { Comment } from './Comment';

export function CommentBody({
  children,
  isEditing,
  comment,
  users,
  onEditCancel,
  onEditSubmit,
  showFullText,
  isDeleting
}) {
  const highlightMentions = () => {
    const pattern = /(\B@\w+)+/gi;
    const strArr = comment.body.split(pattern);
    return strArr.map(subStr => {
      if (subStr.match(pattern)) {
        const username = subStr.substr(1);
        const matches = users.filter(user => user.display === username);
        if (matches.length) {
          return (
            <b key={subStr} title={matches[0].name}>
              {subStr}
            </b>
          );
        }
      }
      return subStr;
    });
  };
  return (
    <div className={`${isDeleting && 'conversation-blur-content'}`}>
      <Person person={comment.author} className="conversation" />
      <div
        className={`-mt-2 mb-0 mx-0 pl-10 pr-0 py-0 text-neutral-20 break-words whitespace-pre-line ${!showFullText &&
          'max-h-32'} overflow-hidden relative`}
      >
        {!isEditing && (
          <p
            className={`m-0 text-sm pr-2 ${!showFullText &&
              'conversation__text__cutoff'}`}
          >
            <Linkify>{highlightMentions()}</Linkify>
          </p>
        )}

        {isEditing && (
          <Comment.EditForm
            onSubmit={onEditSubmit}
            users={users}
            autoFocusInput
            author={comment.author}
            onCancel={onEditCancel}
            initialValue={comment.body}
          />
        )}
        {children}
      </div>
      <input className="sr-only" type="text" aria-hidden="true" />
    </div>
  );
}

CommentBody.propTypes = {
  children: node,
  isEditing: bool,
  comment: shape({}),
  users: arrayOf(shape({})),
  showFullText: bool,
  onEditCancel: func,
  onEditSubmit: func,
  isDeleting: bool
};

CommentBody.defaultProps = {
  children: <Fragment />,
  showFullText: false,
  isEditing: false,
  comment: {},
  users: [],
  onEditCancel: () => {},
  onEditSubmit: () => {},
  isDeleting: false
};
