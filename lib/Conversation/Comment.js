import React, { Component, PropTypes } from 'react';
import Button from '../Button';
import CommentForm from './CommentForm/';
import Person from '../Person';

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.shape(),
    userCanEdit: PropTypes.bool,
    actions: PropTypes.shape(),
    conversationId: PropTypes.string,
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
    this.focusFallback.focus();
  }

  editComment(commentBody) {
    this.props.actions.editComment(commentBody, this.props.comment.id);
  }

  removeComment() {
    this.props.actions.removeComment(this.props.comment.id, this.props.conversationId);
  }

  render() {
    const { comment } = this.props;
    return (
      <div className="conversation__comment">
        { !this.state.showEditForm &&
          <div>
            <Person
              name={comment.person.name}
              avatar={comment.person.avatar}
            />

            <div className="conversation__comment-body">
              <p className="conversation__text">{comment.body}</p>

              <div className="conversation__meta-wrapper">
                <span className="conversation__meta conversation__date-text">{comment.createdAt}</span>

                { this.props.userCanEdit &&
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
                }
              </div>
            </div>
          </div>
        }

        { this.props.userCanEdit && this.state.showEditForm &&
          <CommentForm
            onSubmit={this.editComment}
            onCancel={this.hideEditForm}
            user={this.props.comment.person}
            value={this.props.comment.body}
            useTextArea
            focusOnMount
          />
        }

        <input
          type="text"
          className="conversation__focus-fallback"
          ref={focusFallback => (this.focusFallback = focusFallback)}
          aria-hidden="true"
        />
      </div>
    );
  }
}

export default Comment;
