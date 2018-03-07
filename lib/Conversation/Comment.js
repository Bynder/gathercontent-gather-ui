import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Linkify from 'linkifyjs/react';
import Button from '../Button';
import CommentForm from './CommentForm';
import Person from '../Person';

class Comment extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    body: PropTypes.string.isRequired,
    focusFallback: PropTypes.oneOfType([PropTypes.func, PropTypes.shape()]),
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
    focusFallback() {},
    onRowCountChange() {}
  };

  constructor() {
    super();
    this.state = {
      showEditForm: false,
      confirmRemoval: false
    };
    this.showEditForm = this.showEditForm.bind(this);
    this.hideEditForm = this.hideEditForm.bind(this);
    this.editComment = this.editComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }

  showEditForm() {
    this.setState({ showEditForm: true });
  }

  hideEditForm() {
    this.setState({
      showEditForm: false,
      confirmRemoval: false
    });
    this.props.onCommentCancel();
    this.props.focusFallback.focus();
  }

  editComment(commentBody) {
    this.hideEditForm();
    this.props.editComment(this.props.id, commentBody);
  }

  toggleRemovalConfirmation = () =>
    this.setState({
      confirmRemoval: !this.state.confirmRemoval
    });

  removeComment(confirmed) {
    if (!confirmed) {
      return this.toggleRemovalConfirmation();
    }

    this.hideEditForm();
    return this.props.removeComment(this.props.id, this.props.conversationId);
  }

  handleEditKeyPress = event => {
    if (event.key === 'Enter') {
      this.showEditForm();
    }
  };

  render() {
    const { createdAt, createdBy, body, author, user, index } = this.props;
    const removalText = index === 0 ? 'thread' : 'comment';
    const userCanEdit = createdBy === user.id;
    const className = cx('conversation__comment', {
      'is-disabled': this.state.confirmRemoval
    });

    return (
      <div className={className}>
        {!this.state.showEditForm && (
          <div>
            <Person person={author} className="conversation" />

            <div className="conversation__comment-body">
              <p className="conversation__text">
                <Linkify>{body}</Linkify>
              </p>

              <div className="conversation__meta-wrapper">
                <span className="conversation__meta conversation__date-text">
                  {createdAt}
                </span>

                {userCanEdit && (
                  <span className="conversation__actions">
                    <div
                      className="button button--link button--link-default button--collapse conversation__meta"
                      onClick={this.showEditForm}
                      onKeyUp={this.handleEditKeyPress}
                      role="button"
                      tabIndex={0}
                    >
                      Edit
                    </div>
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
          </div>
        )}

        {userCanEdit &&
          this.state.showEditForm && (
            <CommentForm
              id={this.props.id}
              onSubmit={this.editComment}
              onCancel={this.hideEditForm}
              author={author}
              value={body}
              placeholder=""
              focusOnMount
              isSubmitting={false}
              onCommentChange={this.props.onCommentChange}
              onRowCountChange={this.props.onRowCountChange}
            />
          )}

        <div className="conversation__confirmation">
          <div className="conversation__confirmation-inner">
            <Button
              types={['secondary', 'size-sm']}
              className="conversation__confirmation-button"
              clickHandler={this.toggleRemovalConfirmation}
            >
              Cancel
            </Button>
            <Button
              types={['danger', 'size-sm']}
              className="conversation__confirmation-button"
              clickHandler={() => this.removeComment(true)}
            >
              Delete {removalText}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
