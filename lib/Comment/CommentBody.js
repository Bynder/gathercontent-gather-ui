import React, { useRef, useState, Fragment } from 'react';
import { arrayOf, bool, func, node, shape } from 'prop-types';
import cx from 'classnames';
import Linkify from 'linkifyjs/react';
import Person from '../Person';
import { Comment } from './Comment';

function BlurBottom() {
  return (
    <span className="absolute h-8 w-full top-0 left-0 ml-10 mt-24 bg-blur-white-bottom conversation__text__cutoff" />
  );
}

export function CommentBody({
  children,
  isEditing,
  comment,
  users,
  onEditCancel,
  onEditSubmit,
  showFullText,
  isDeleting,
  currentUser
}) {
  const [commentBody, setCommentBody] = useState(comment.body);
  const focusFallback = useRef(null);

  const highlightMentions = () => {
    const pattern = /(\B@\w+)+/gi;
    const strArr = commentBody.split(pattern);
    return strArr.map(subStr => {
      if (subStr.match(pattern)) {
        const username = subStr.substr(1);
        const matches = users.filter(user => user.display === username);
        if (matches.length) {
          const mentionsClass = cx('font-semi-bold', {
            'text-purple-primary':
              matches[0].display === currentUser && currentUser.display
          });

          return (
            <span
              key={subStr}
              title={matches[0].name}
              className={mentionsClass}
            >
              {subStr}
            </span>
          );
        }
      }
      return subStr;
    });
  };

  return (
    <div className={`${isDeleting && 'blur-background'}`}>
      <Person person={comment.author} className="conversation" />
      <div
        className={`-mt-2 mb-0 mx-0 pl-10 pr-0 py-0 text-neutral-20 break-words whitespace-pre-line ${!showFullText &&
          'max-h-32'} overflow-hidden relative`}
      >
        {!isEditing && (
          <p className="m-0 text-sm pr-2">
            <Linkify>{highlightMentions()}</Linkify>
            {!showFullText && <BlurBottom />}
          </p>
        )}
        {isEditing && (
          <Comment.EditForm
            onSubmit={onEditSubmit}
            users={users}
            autoFocusInput
            author={comment.author}
            onCancel={() => {
              focusFallback.current.focus();
              onEditCancel();
            }}
            onChange={setCommentBody}
            initialValue={commentBody}
          />
        )}
        {children}
      </div>
      <input
        ref={focusFallback}
        className="sr-only"
        type="text"
        tabIndex={-1}
        aria-hidden="true"
      />
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
  isDeleting: bool,
  currentUser: shape({})
};

CommentBody.defaultProps = {
  showFullText: false,
  isEditing: false,
  comment: {},
  users: [],
  onEditCancel: () => {},
  onEditSubmit: () => {},
  isDeleting: false,
  children: <Fragment />,
  currentUser: {
    display: ''
  }
};
