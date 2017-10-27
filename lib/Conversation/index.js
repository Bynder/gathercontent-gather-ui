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
    user: PropTypes.shape().isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape()),
    userCanComment: PropTypes.bool,
    showComments: PropTypes.bool
  };

  static defaultProps = {
    userCanComment: false,
    showComments: true,
    onCancel: () => {},
    resolveConversation() {},
    comments: []
  };

  constructor() {
    super();
    this.state = { showComments: false };
    this.addComment = this.addComment.bind(this);
    this.resolveConversation = this.resolveConversation.bind(this);
  }

  addComment(commentBody) {
    this.props.addComment(commentBody);
  }

  resolveConversation() {
    this.props.resolveConversation(this.props.id);
  }

  render() {
    const showComments = this.state.showComments || this.props.showComments;
    const isActiveClass = showComments ? 'is-active' : '';
    const { id, comments, ...rest } = this.props;
    return (
      <div className={`conversation ${isActiveClass}`}>
        {this.props.resolveConversation &&
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

        {!showComments &&
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
