import React, { Component, PropTypes } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Button from '../Button';
import BoundaryClickWatcher from '../BoundaryClickWatcher';
import ResolveIcon from '../../assets/icons/resolve.svg';

class Conversation extends Component {
  static propTypes = {
    id: PropTypes.string,
    actions: PropTypes.shape({
      resolveConversation: PropTypes.func.isRequired,
      addComment: PropTypes.func.isRequired,
      activateConversation: PropTypes.func.isRequired,
      deactivateConversation: PropTypes.func.isRequired,
    }).isRequired,
    userCanComment: PropTypes.bool,
    isActive: PropTypes.bool,
  };

  constructor() {
    super();
    this.state = { isActive: false };
    this.addComment = this.addComment.bind(this);
    this.resolveConversation = this.resolveConversation.bind(this);
    this.activateConversation = this.activateConversation.bind(this);
    this.deactivateConversation = this.deactivateConversation.bind(this);
  }

  addComment(commentBody) {
    this.props.actions.addComment(commentBody, this.props.id);
  }

  resolveConversation() {
    this.props.actions.resolveConversation(this.props.id);
  }

  activateConversation() {
    this.props.actions.activateConversation(this.props.id);
    this.setState({
      isActive: true,
    });
  }

  deactivateConversation() {
    this.props.actions.deactivateConversation(this.props.id);
    this.setState({
      isActive: false,
    });
  }

  render() {
    const conversationClasses = (this.state.isActive || this.props.isActive) ? 'conversation--is-active' : '';
    const { id, ...rest } = this.props;

    return (
      <BoundaryClickWatcher
        outsideClickHandler={this.deactivateConversation}
        initialClickHandler={this.activateConversation}
      >
        <div className={`conversation ${conversationClasses}`}>
          <div className="conversation__resolve">
            <Button
              types={['link-default']}
              clickHandler={this.resolveConversation}
            >
              <ResolveIcon />
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
      </BoundaryClickWatcher>
    );
  }
}

export default Conversation;
