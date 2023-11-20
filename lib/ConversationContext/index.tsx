import React from "react";
import { Col, Person, Row } from "lib";
import { Conversation } from "../Conversation/Conversation";
import { Comment } from "../Comment/Comment";

export function ConversationContext({
  label,
  children,
  userCanResolve,
  resolved,
  comments,
  resolveConversation,
  users,
}: any) {
  return (
    <Row>
      <Col sm={3} xs={12}>
        <div className="gui-conversation-context__label">{label}</div>
      </Col>
      <Col sm={8} xs={12}>
        {children && (
          <div className="gui-conversation-context__context">{children}</div>
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
                      subtitle={
                        <Comment.Meta>{comment.createdAt}</Comment.Meta>
                      }
                    />
                  </Comment.Header>

                  <Comment.Body>
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
}

ConversationContext.defaultProps = {
  children: null,
  userCanResolve: false,
};

export default ConversationContext;
