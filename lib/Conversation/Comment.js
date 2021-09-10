import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Linkify from 'linkifyjs/react';
import { Person } from 'lib';
import Button from '../Button';
import Icon from '../Icon';
import { CommentForm } from '../Comment/CommentForm';
import ConfirmationOverlay from '../ConfirmationOverlay';

class Comment extends Component {
  state = {
    showEditForm: false,
    confirmRemoval: false
  };

  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    createdBy: PropTypes.number.isRequired,
    author: PropTypes.shape().isRequired,
    user: PropTypes.shape(),
    users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    conversationId: PropTypes.string.isRequired,
    editComment: PropTypes.func.isRequired,
    removeComment: PropTypes.func.isRequired,
    onCommentChange: PropTypes.func.isRequired,
    onCommentCancel: PropTypes.func.isRequired,
    onRowCountChange: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    userCanComment: PropTypes.bool.isRequired,
    retryComment: PropTypes.func.isRequired,
    hasFailed: PropTypes.bool,
    isLatestReply: PropTypes.bool
  };

  static defaultProps = {
    user: {},
    hasFailed: false,
    isLatestReply: false
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
    this.setState(prevState => ({
      confirmRemoval: !prevState.confirmRemoval
    }));

  removeComment = confirmed => {
    if (!confirmed) {
      return this.toggleRemovalConfirmation();
    }

    this.hideEditForm();
    return this.props.removeComment(this.props.id, this.props.conversationId);
  };

  retryComment = () => this.props.retryComment(this.props.id, this.props.body);

  highlightMentions() {
    const pattern = /(\B@\w+)+/gi;
    const strArr = this.props.body.split(pattern);
    return strArr.map(subStr => {
      if (subStr.match(pattern)) {
        const username = subStr.substr(1);
        const matches = this.props.users.filter(
          user => user.display === username
        );
        if (matches.length) {
          return (
            <span key={subStr} className="mention" title={matches[0].name}>
              {subStr}
            </span>
          );
        }
      }
      return subStr;
    });
  }

  render() {
    const {
      createdAt,
      createdBy,
      body,
      author,
      user,
      index,
      userCanComment,
      hasFailed,
      isLatestReply
    } = this.props;
    const isOp = index === 0 && !isLatestReply;
    const removalText = isOp ? 'Delete thread' : 'Delete comment';
    const userCanEdit = createdBy === user.id && userCanComment;
    const className = cx('conversation__comment', {
      'is-visually-disabled': this.state.confirmRemoval,
      'has-failed': this.props.hasFailed
    });
    const { avatar, initials, name } = author;

    return (
      <div className={className}>
        <Person
          collapse
          avatarUrl={avatar}
          initials={initials}
          name={name}
          className="conversation"
        />

        <div className="conversation__comment-body">
          {!this.state.showEditForm && (
            <p className="conversation__text">
              <Linkify>{this.highlightMentions()}</Linkify>
            </p>
          )}

          {userCanEdit && this.state.showEditForm && (
            <CommentForm
              id={this.props.id}
              onSubmit={this.editComment}
              onCancel={this.hideEditForm}
              value={body}
              author={author}
              placeholder=""
              focusOnMount
              onCommentChange={this.props.onCommentChange}
              onRowCountChange={this.props.onRowCountChange}
              showAuthor={false}
              users={this.props.users}
              editing
            />
          )}

          <div className="conversation__meta-wrapper">
            {hasFailed && (
              <span className="conversation__failed-text">
                <Icon name="warning" className="conversation__failed--icon" />
                Comment failed.
                <Button
                  className="conversation__meta conversation__failed--button"
                  types={['link', 'link-default', 'collapse']}
                  clickHandler={this.retryComment}
                >
                  Retry?
                </Button>
              </span>
            )}
            {!this.state.showEditForm && !hasFailed && (
              <span className="conversation__meta conversation__date-text">
                {createdAt}
              </span>
            )}

            {userCanEdit && !this.state.showEditForm && !hasFailed && (
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
