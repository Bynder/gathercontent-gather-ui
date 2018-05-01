import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Conversation from '../Conversation';

const ConversationContext = props => (
  <Row>
    <Col sm={3} xs={12}>
      <div className="conversation-context__label">{props.label}</div>
    </Col>
    <Col sm={8} xs={12}>
      {props.children && (
        <div className="conversation-context__context">{props.children}</div>
      )}
      <Conversation
        className="conversation-context__conversation"
        id={props.id}
        resolved={props.resolved}
        comments={props.comments}
        addComment={() => {}}
        user={{ id: null }}
        userCanComment={false}
        showComments
      />
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
  id: PropTypes.string.isRequired,
  resolved: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

ConversationContext.defaultProps = {
  children: null
};

export default ConversationContext;
