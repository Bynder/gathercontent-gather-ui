import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Button from '../Button';
import ResolveIcon from '../../assets/icons/resolve.svg';

class Conversation extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    resolveConversation: PropTypes.func,
    onCancel: PropTypes.func,
    addComment: PropTypes.func.isRequired,
    activateConversation: PropTypes.func,
    deactivateConversation: PropTypes.func,
    user: PropTypes.shape().isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    userCanComment: PropTypes.bool,
    isActive: PropTypes.bool
  };

  static defaultProps = {
    userCanComment: false,
    isActive: true,
    onCancel: () => {},
    activateConversation() {},
    deactivateConversation() {},
    resolveConversation() {},
    comments: []
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
    this.props.addComment(commentBody);
  }

  resolveConversation() {
    this.props.resolveConversation(this.props.id);
  }

  activateConversation() {
    this.props.activateConversation(this.props.id);
    this.setState({ isActive: true });
  }

  deactivateConversation() {
    this.props.deactivateConversation(this.props.id);
    this.setState({ isActive: false });
  }

  render() {
    const isActive = this.state.isActive || this.props.isActive;
    const isActiveClass = isActive ? 'is-active' : '';
    const { id, comments, ...rest } = this.props;
    return (
      <div className={`conversation ${isActiveClass}`}>
        {typeof this.props.resolveConversation !== 'undefined' &&
          comments.length > 0 && (
            <div>
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
            </div>
          )}

        {!isActive &&
          comments.length > 1 && (
            <div className="conversation__reply-count">
              <Button
                types={['size-sm', 'link-default']}
                clickHandler={() => {}}
              >
                {`View ${comments.length - 1} ${pluralize(
                  'reply',
                  comments.length - 1
                )}`}
              </Button>
            </div>
          )}

        {this.props.userCanComment && (
          <div className="conversation__foot">
            <CommentForm
              onSubmit={this.addComment}
              author={this.props.user}
              onCancel={this.props.onCancel}
            />
          </div>
        )}

        <input
          type="text"
          className="conversation__focus-fallback"
          ref={focusFallback => {
            this.focusFallback = focusFallback;
          }}
          aria-hidden="true"
        />
      </div>
    );
  }
}

export default Conversation;
