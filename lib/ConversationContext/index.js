import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Conversation } from '../Conversation/Conversation';
import { Comment } from '../Comment/Comment';

const ConversationContext = ({
  label,
  children,
  userCanResolve,
  resolved,
  comments,
  resolveConversation
}) => (
  <Row>
    <Col sm={3} xs={12}>
      <div className="conversation-context__label">{label}</div>
    </Col>
    <Col sm={8} xs={12}>
      {children && (
        <div className="conversation-context__context">{children}</div>
      )}
      <Conversation isActive>
        <Conversation.Header>
          {userCanResolve && (
            <Comment.ResolveButton
              resolved={resolved}
              userCanResolve
              onResolve={resolveConversation}
            />
          )}
        </Conversation.Header>
        <Conversation.Body>
          {comments.map(comment => (
            <Comment isActive key={comment.id}>
              <Comment.Body
                comment={comment}
                meta={
                  <Comment.Meta
                    createdAt={comment.createdAt}
                    showActions={false}
                  />
                }
                showFullText
              />
            </Comment>
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
    PropTypes.arrayOf(PropTypes.shape())
  ]),
  resolved: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  resolveConversation: PropTypes.func.isRequired,
  userCanResolve: PropTypes.bool
};

ConversationContext.defaultProps = {
  children: null,
  userCanResolve: false
};

export default ConversationContext;
