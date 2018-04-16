import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Linkify from 'linkifyjs/react';
import Button from '../Button';
import CommentForm from './CommentForm';
import Person from '../Person';
import ConfirmationOverlay from '../ConfirmationOverlay';

class Comment extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    createdBy: PropTypes.number.isRequired,
    author: PropTypes.shape().isRequired,
    user: PropTypes.shape(),
    conversationId: PropTypes.string.isRequired,
    editComment: PropTypes.func.isRequired,
    removeComment: PropTypes.func.isRequired,
    onCommentChange: PropTypes.func.isRequired,
    onCommentCancel: PropTypes.func.isRequired,
    onRowCountChange: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  };

  static defaultProps = {
    user: {},
    onRowCountChange() {}
  };

  state = {
    showEditForm: false,
    confirmRemoval: false
  };

  showEditForm = () => {
    this.setState({ showEditForm: true });
  };

  hideEditForm = () => {
    this.setState({
      showEditForm: false,
      confirmRemoval: false
    });
    this.props.onCommentCancel();
    this.focusFallback.focus();
  };

  editComment = commentBody => {
    this.hideEditForm();
    this.props.editComment(this.props.id, commentBody);
  };

  toggleRemovalConfirmation = () =>
    this.setState({
      confirmRemoval: !this.state.confirmRemoval
    });

  removeComment = confirmed => {
    if (!confirmed) {
      return this.toggleRemovalConfirmation();
    }

    this.hideEditForm();
    return this.props.removeComment(this.props.id, this.props.conversationId);
  };

  highlightMentions() {
    const pattern = /(\B@\w+)+/gi;
    const strArr = this.props.body.split(pattern);
    return strArr.map(subStr => {
      if (subStr.match(pattern)) {
        return (
          <span key={subStr} className="mention">
            {subStr}
          </span>
        );
      }
      return subStr;
    });
  }

  render() {
    const { createdAt, createdBy, body, author, user, index } = this.props;
    const removalText = index === 0 ? 'Delete thread' : 'Delete comment';
    const userCanEdit = createdBy === user.id;
    const className = cx('conversation__comment', {
      'is-disabled': this.state.confirmRemoval
    });

    return (
      <div className={className}>
        <Person person={author} className="conversation" />

        <div className="conversation__comment-body">
          {!this.state.showEditForm && (
            <p className="conversation__text">
              <Linkify>{this.highlightMentions()}</Linkify>
            </p>
          )}

          {userCanEdit &&
            this.state.showEditForm && (
              <CommentForm
                id={this.props.id}
                onSubmit={this.editComment}
                onCancel={this.hideEditForm}
                value={body}
                author={author}
                placeholder=""
                focusOnMount
                isSubmitting={false}
                onCommentChange={this.props.onCommentChange}
                onRowCountChange={this.props.onRowCountChange}
                showAuthor={false}
                users={this.props.users}
                editing
              />
            )}

          <div className="conversation__meta-wrapper">
            {!this.state.showEditForm && (
              <span className="conversation__meta conversation__date-text">
                {createdAt}
              </span>
            )}

            {userCanEdit &&
              !this.state.showEditForm && (
                <span className="conversation__actions">
                  <Button
                    className="conversation__meta conversation__edit-link"
                    types={['link', 'link-default', 'collapse']}
                    clickHandler={this.showEditForm}
                  >
                    Edit
                  </Button>
                  <Button
                    className="conversation__meta"
                    types={['link', 'link-danger', 'collapse']}
                    clickHandler={() => this.removeComment(false)}
                  >
                    Delete
                  </Button>
                </span>
              )}
          </div>
        </div>
        <ConfirmationOverlay
          className="conversation__confirmation-overlay"
          cancel={this.toggleRemovalConfirmation}
          confirm={() => this.removeComment(true)}
          confirmationText={removalText}
          show={this.state.confirmRemoval}
        />
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

export default Comment;
