import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../Avatar';
import CommentFormInput from './CommentFormInput';
import CommentFormActions from './CommentFormActions';

class CommentForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    author: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string
    }).isRequired,
    focusOnMount: PropTypes.bool,
    value: PropTypes.string
  };

  static defaultProps = {
    value: '',
    focusOnMount: false,
    onCancel: () => {},
    author: {
      name: '??',
      avatar: ''
    }
  };

  constructor() {
    super();
    this.state = { inputValue: '' };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.cancelComment = this.cancelComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  }

  updateInputValue(e) {
    this.setState({ inputValue: e.target.value });
  }

  cancelComment() {
    this.props.onCancel();
    this.setState({ inputValue: '' });
  }

  render() {
    const hasValueClass =
      this.state.inputValue || this.props.value ? 'has-value' : '';

    return (
      <form
        className={`comment-form ${hasValueClass}`}
        onSubmit={this.onSubmit}
      >
        <div className="comment-form__body">
          <Avatar
            className="comment-form__avatar avatar--supporting"
            src={this.props.author.avatar}
            altText={this.props.author.name}
          />
          <CommentFormInput
            handleOnChange={this.updateInputValue}
            focusOnMount={this.props.focusOnMount}
            value={this.state.inputValue || this.props.value}
          />
        </div>

        <CommentFormActions
          onSubmit={this.onSubmit}
          onCancel={this.cancelComment}
        />
      </form>
    );
  }
}

export default CommentForm;
