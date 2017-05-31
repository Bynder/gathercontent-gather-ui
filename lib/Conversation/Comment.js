import React, { Component, PropTypes } from 'react';
import Button from '../Button';
import CommentForm from './CommentForm';

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.shape(),
    userCanEdit: PropTypes.bool,
    actions: PropTypes.shape(),
    conversationId: PropTypes.string,
  };

  constructor() {
    super();
    this.state = { showEditControls: false };
    this.showEditControls = this.showEditControls.bind(this);
    this.editComment = this.editComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }

  showEditControls() {
    this.setState({
      showEditControls: !this.state.showEditControls,
    });
  }

  editComment(commentBody) {
    this.props.actions.editComment(commentBody, this.props.comment.id);
  }

  removeComment() {
    this.props.actions.removeComment(this.props.comment.id, this.props.conversationId);
  }

  render() {
    const { comment } = this.props;
    const editControls = (!this.state.showEditControls) ? (
      <span className="comment__actions">
        <Button className="comment__meta" types={['link', 'collapse']} clickHandler={this.showEditControls}>Edit</Button>
        <Button className="comment__meta" types={['link', 'collapse']} clickHandler={this.removeComment}>Delete</Button>
      </span>
    ) : '';

    return (
      <div className="comment" key={comment.id}>
        {/* todo: split into person component */}
        <div className="person">
          <img className="person__avatar person__avatar--absolute" src={comment.person.avatar} alt={comment.person.name} />
          <span className="person__name">{comment.person.name}</span>
        </div>

        <div className="comment__body">
          { !this.state.showEditControls &&
            <p className="comment__text">{comment.body}</p>
          }

          { this.props.userCanEdit &&
            <div>
              { this.state.showEditControls &&
                <CommentForm
                  onSubmit={this.editComment}
                  onCancel={this.showEditControls}
                />
              }
            </div>
          }

          <span>
            <span className="comment__meta">{comment.createdAt}</span>
            {editControls}
          </span>
        </div>
      </div>
    );
  }
}

export default Comment;
