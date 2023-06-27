/* eslint-disable react/prop-types */
import React, { useContext } from "react";
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Comment, Person } from "lib";
import { mockUserNoAvatar, mockUsers } from "./mockData";

function ExistingCommentExample({
  comment,
  submitPromise,
  isFirst,
  deletePromise,
}: any) {
  const { isEditing, isOpen }: any = useContext(Comment.Context);
  const { avatar, initials, name } = comment.author || {};
  return (
    <Comment>
      <Comment.Header className="flex" actions={<Comment.Actions />}>
        <Person
          collapse
          avatarUrl={avatar}
          initials={initials}
          name={name}
          subtitle={<Comment.Meta>{comment.createdAt}</Comment.Meta>}
          className="w-full"
        />
      </Comment.Header>

      <Comment.Body>
        {!isEditing && (
          <Comment.Text
            users={mockUsers}
            showFullText={isOpen}
            currentUser={mockUserNoAvatar}
            hasBeenEdited
          >
            {comment.body}
          </Comment.Text>
        )}
        {isEditing && (
          <Comment.Form
            onSubmit={submitPromise}
            placeholder="Reply..."
            submitText="Save"
            users={mockUsers}
            autoFocusInput
          >
            {comment.body}
          </Comment.Form>
        )}
      </Comment.Body>

      <Comment.DeleteConfirmation
        confirmButtonText={isFirst ? "Delete conversation" : "Delete comment"}
        onConfirm={deletePromise}
        failureText="Delete failed"
      />
    </Comment>
  );
}

export { ExistingCommentExample };
