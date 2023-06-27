import React from "react";
import PropTypes, { arrayOf, shape } from "prop-types";
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Col, Person, Row } from "lib";
import { Conversation } from "../Conversation/Conversation";
import { Comment } from "../Comment/Comment";

const ConversationContext = ({
  label,
  children,
  userCanResolve,
  resolved,
  comments,
  resolveConversation,
  users,
}: any) => (
  <Row>
    <Col sm={3} xs={12}>
      <div className="conversation-context__label">{label}</div>
    </Col>
    <Col sm={8} xs={12}>
      {children && (
        <div className="conversation-context__context">{children}</div>
      )}
      <Conversation isOpen>
        <Conversation.Header>
          {userCanResolve && (
            <Comment.ResolveButton
              resolved={resolved}
              onResolve={resolveConversation}
              userCanResolve
            />
          )}
        </Conversation.Header>

        <Conversation.Body>
          {comments.map((comment: any) => (
            <Comment.Provider isOpen key={comment.id}>
              <Comment>
                <Comment.Header>
                  <Person
                    collapse
                    avatarUrl={comment.author?.avatar}
                    initials={comment.author?.initials}
                    name={comment.author?.name}
                    subtitle={<Comment.Meta>{comment.createdAt}</Comment.Meta>}
                  />
                </Comment.Header>

                <Comment.Body>
                  {/* @ts-expect-error TS(2741): Property 'currentUser' is missing in type '{ child... Remove this comment to see the full error message */}
                  <Comment.Text users={users} showFullText>
                    {comment.body}
                  </Comment.Text>
                </Comment.Body>
              </Comment>
            </Comment.Provider>
          ))}
        </Conversation.Body>
      </Conversation>
    </Col>
  </Row>
);

ConversationContext.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    PropTypes.arrayOf(PropTypes.shape()),
  ]),
  resolved: PropTypes.bool.isRequired,
  // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
  comments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  resolveConversation: PropTypes.func.isRequired,
  users: arrayOf(shape({})).isRequired,
  userCanResolve: PropTypes.bool,
};

ConversationContext.defaultProps = {
  children: null,
  userCanResolve: false,
};

export default ConversationContext;
