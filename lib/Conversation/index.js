import React, { Component, PropTypes } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Button from '../Button';

class Conversation extends Component {
  static propTypes = {
    id: PropTypes.string,
    actions: PropTypes.shape({
      resolveConversation: PropTypes.func,
      addComment: PropTypes.func,
    }).isRequired,
    userCanComment: PropTypes.bool,
  };

  constructor() {
    super();
    this.state = { isActive: false };
    this.addComment = this.addComment.bind(this);
    this.resolveConversation = this.resolveConversation.bind(this);
    this.handleConvoClick = this.handleConvoClick.bind(this);
  }

  addComment(commentBody) {
    this.props.actions.addComment(commentBody, this.props.id);
  }

  resolveConversation() {
    this.props.actions.resolveConversation(this.props.id);
  }

  handleConvoClick() {
    this.setState({
      isActive: true,
    });
  }

  render() {
    const conversationClasses = (this.state.isActive) ? 'conversation--is-active' : '';
    const { id, ...rest } = this.props;

    return (
      <div className={`conversation ${conversationClasses}`}>
        <div className="conversation__resolve">
          <Button
            types={['link-default']}
            clickHandler={this.resolveConversation}
          >
            Resolve Conversation
          </Button>
        </div>

        <CommentList
          {...rest}
          conversationId={id}
        />

        { this.props.userCanComment &&
          <div className="conversation__foot">
            <CommentForm
              onSubmit={this.addComment}
              user={this.props.user}
            />
          </div>
        }
      </div>
    );
  }
}

export default Conversation;
