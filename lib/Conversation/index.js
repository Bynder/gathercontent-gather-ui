import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';
import cx from 'classnames';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Button from '../Button';
import Notification from '../Notification';
import ResolveIcon from '../../assets/icons/resolve.svg';

class Conversation extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    resolveConversation: PropTypes.func,
    onCancel: PropTypes.func,
    addComment: PropTypes.func.isRequired,
    editComment: PropTypes.func,
    removeComment: PropTypes.func,
    onCommentChange: PropTypes.func,
    onCommentCancel: PropTypes.func,
    onRowCountChange: PropTypes.func,
    user: PropTypes.shape().isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape()),
    placeholder: PropTypes.string,
    userCanComment: PropTypes.bool,
    showComments: PropTypes.bool,
    focusOnMount: PropTypes.bool,
    hasError: PropTypes.bool,
    isSubmitting: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    userCanComment: false,
    showComments: true,
    focusOnMount: true,
    hasError: false,
    onCancel() {},
    editComment() {},
    removeComment() {},
    resolveConversation() {},
    onCommentChange() {},
    onCommentCancel() {},
    onRowCountChange() {},
    comments: [],
    isSubmitting: false,
    placeholder: 'Reply...',
    className: ''
  };

  state = {
    showComments: false,
    userIsEditingComment: false
  };

  addComment = (commentBody) =>
    this.props.addComment(commentBody);

  resolveConversation = () =>
    this.props.resolveConversation(this.props.id);

  setUserIsEditingComment = (isEditing = false) =>
    this.setState({ userIsEditingComment: isEditing });

  render() {
    const showComments = this.state.showComments || this.props.showComments;
    const additionalClasses = cx(this.props.className, {
      'is-active': showComments
    });
    const { id, comments, ...rest } = this.props;

    return (
      <div
        className={`conversation ${additionalClasses}`}
        data-conversation-component={id}
      >
        {this.props.hasError && (
          <Notification level="danger">
            There was a problem submitting your comment. Please try again
          </Notification>
        )}
        {this.props.resolveConversation && comments.length > 0 && (
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
                onCommentChange={this.props.onCommentChange}
                onCommentCancel={this.props.onCommentCancel}
              />
            </div>
          )}

        {!showComments && comments.length > 1 && (
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
              id={this.props.id}
              onSubmit={this.addComment}
              author={this.props.user}
              onCancel={this.props.onCancel}
              onCommentChange={this.props.onCommentChange}
              focusOnMount={this.props.focusOnMount}
              isSubmitting={this.props.isSubmitting}
              placeholder={this.props.placeholder}
              onRowCountChange={this.props.onRowCountChange}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Conversation;
