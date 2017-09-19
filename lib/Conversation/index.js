import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Button from '../Button';
import BoundaryClickWatcher from '../BoundaryClickWatcher';
import ResolveIcon from '../../assets/icons/resolve.svg';

class Conversation extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    actions: PropTypes.shape({
      resolveConversation: PropTypes.func.isRequired,
      addComment: PropTypes.func.isRequired,
      activateConversation: PropTypes.func.isRequired,
      deactivateConversation: PropTypes.func.isRequired,
    }).isRequired,
    user: PropTypes.shape().isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    userCanComment: PropTypes.bool,
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    userCanComment: false,
    isActive: false,
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
    this.props.actions.addComment(commentBody, this.props.id, this.props.user);
  }

  resolveConversation() {
    this.props.actions.resolveConversation(this.props.id);
  }

  activateConversation() {
    this.props.actions.activateConversation(this.props.id);
    this.setState({ isActive: true });
  }

  deactivateConversation() {
    this.props.actions.deactivateConversation(this.props.id);
    this.setState({ isActive: false });
  }

  render() {
    const isActive = this.state.isActive || this.props.isActive;
    const isActiveClass = (isActive) ? 'is-active' : '';
    const { id, comments, ...rest } = this.props;

    return (
      <BoundaryClickWatcher
        outsideClickHandler={this.deactivateConversation}
        initialClickHandler={this.activateConversation}
      >
        <div className={`conversation ${isActiveClass}`}>
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
            comments={comments}
            focusFallback={this.focusFallback}
          />

          { !isActive && (comments.length > 1) &&
            <div className="conversation__reply-count">
              <Button
                types={['size-sm', 'link-default']}
                clickHandler={() => {}}
              >
                {`View ${comments.length - 1} ${pluralize('reply', comments.length - 1)}`}
              </Button>
            </div>
          }

          { this.props.userCanComment &&
            <div className="conversation__foot">
              <CommentForm
                onSubmit={this.addComment}
                author={this.props.user}
              />
            </div>
          }

          <input
            type="text"
            className="conversation__focus-fallback"
            ref={(focusFallback) => { this.focusFallback = focusFallback; }}
            aria-hidden="true"
          />
        </div>
      </BoundaryClickWatcher>
    );
  }
}

export default Conversation;
