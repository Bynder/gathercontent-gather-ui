import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import CommentForm from './CommentForm/';
import Person from '../Person';
import cx from 'classnames';

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
    hasReply: PropTypes.bool.isRequired
  };

  static defaultProps = {
    user: {},
    focusFallback() {}
  };

  constructor() {
    super();
    this.state = { showEditForm: false };
    this.showEditForm = this.showEditForm.bind(this);
    this.hideEditForm = this.hideEditForm.bind(this);
    this.editComment = this.editComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }

  showEditForm() {
    this.setState({ showEditForm: true });
  }

  hideEditForm() {
    this.setState({ showEditForm: false });
    this.props.focusFallback.focus();
  }

  editComment(commentBody) {
    this.hideEditForm();
    this.props.editComment(this.props.id, commentBody);
  }

  removeComment() {
    this.hideEditForm();
    this.props.removeComment(this.props.id, this.props.conversationId);
  }

  render() {
    const { createdAt, createdBy, body, author, user, hasReply } = this.props;
    const userCanEdit = createdBy === user.id;

    const additionalClasses = cx({
      'has-reply': hasReply
    });
    return (
      <div className={`conversation__comment ${additionalClasses}`}>
        {!this.state.showEditForm && (
          <div>
            <Person person={author} />

            <div className="conversation__comment-body">
              <p className="conversation__text">{body}</p>

              <div className="conversation__meta-wrapper">
                <span className="conversation__meta conversation__date-text">
                  {createdAt}
                </span>

                {userCanEdit && (
                  <span className="conversation__actions">
                    <Button
                      className="conversation__meta"
                      types={['link', 'link-default', 'collapse']}
                      clickHandler={this.showEditForm}
                    >
                      Edit
                    </Button>
                    <Button
                      className="conversation__meta"
                      types={['link', 'link-danger', 'collapse']}
                      clickHandler={this.removeComment}
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
              onSubmit={this.editComment}
              onCancel={this.hideEditForm}
              author={author}
              value={body}
              focusOnMount
            />
          )}
      </div>
    );
  }
}

export default Comment;
