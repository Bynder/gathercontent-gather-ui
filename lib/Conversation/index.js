import React, { Component, PropTypes } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Button from '../Button';

class Conversation extends Component {
  static propTypes = {
    id: PropTypes.string,
    actions: PropTypes.shape({
      resolveConversation: PropTypes.func,
      unresolveConversation: PropTypes.func,
      addComment: PropTypes.func,
    }).isRequired,
    userCanComment: PropTypes.bool.isRequired,
    userCanEdit: PropTypes.bool.isRequired,
    isResolved: PropTypes.bool.isRequired,
    userId: PropTypes.number,
    comments: PropTypes.arrayOf(PropTypes.shape()),
  };

  constructor() {
    super();
    this.addComment = this.addComment.bind(this);
  }

  addComment(commentBody) {
    this.props.actions.addComment(commentBody, this.props.id);
  }

  render() {
    const resolveButton = !this.props.isResolved ?
      <Button types={['link-default']} clickHandler={this.props.actions.resolveConversation}>Resolve Conversation</Button> :
      <Button types={['link-default']} clickHandler={this.props.actions.unresolveConversation}>Unresolve Conversation</Button>;

    return (
      <div className="conversation">
        <div className="conversation__resolve">
          { resolveButton }
        </div>

        <CommentList
          comments={this.props.comments}
          conversationId={this.props.id}
          userId={this.props.userId}
          actions={this.props.actions}
          userCanEdit={this.props.userCanEdit}
        />

        { this.props.userCanComment &&
          <div className="conversation__foot">
            <CommentForm onSubmit={this.addComment}/>
          </div>
        }
      </div>
    );
  }
}

export default Conversation;
