import React, { useContext } from 'react';
import { arrayOf, bool, shape, string } from 'prop-types';
import Linkify from 'linkifyjs/react';
import cx from 'classnames';
import { Comment } from 'lib';

// eslint-disable-next-line react/prop-types
function BlurBottom({ className }) {
  return (
    <span
      className={`comment-blur-bottom absolute h-8 w-full top-0 left-0 mt-24 bg-blur-neutral-98-bottom group-hover:bg-blur-grey-bottom conversation__text__cutoff ${className}`}
    />
  );
}

function EditedText() {
  return (
    <span className="weight-semi-bold text-neutral-primary"> (Edited)</span>
  );
}

function CommentText({
  children,
  users,
  showFullText,
  currentUser,
  hasBeenEdited
}) {
  const { isEditing } = useContext(Comment.Context);

  const highlightMentions = () => {
    const pattern = /(\B@\w+)+/gi;
    const strArr = children.split(pattern);
    return strArr.map(subStr => {
      if (subStr.match(pattern)) {
        const username = subStr.substr(1);
        const matches = users.filter(user => user.display === username);
        if (matches.length) {
          const mentionsClass = cx('font-semi-bold', {
            'text-purple-primary':
              matches[0].display === (currentUser ? currentUser.display : '')
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

  const classNames = cx(
    'text-neutral-20 break-words whitespace-pre-line relative',
    {
      'overflow-visible': showFullText,
      'overflow-hidden max-h-32': !showFullText
    }
  );

  return isEditing ? null : (
    <div className={classNames}>
      <p className="comment-text m-0 text-sm break-words">
        <Linkify>{highlightMentions()}</Linkify>
        {hasBeenEdited && <EditedText />}
        <BlurBottom className={showFullText ? 'hidden' : ''} />
      </p>
    </div>
  );
}

CommentText.propTypes = {
  children: string.isRequired,
  users: arrayOf(shape({})).isRequired,
  currentUser: shape({}).isRequired,
  showFullText: bool,
  hasBeenEdited: bool
};

CommentText.defaultProps = {
  showFullText: true,
  hasBeenEdited: false
};

export { CommentText };
