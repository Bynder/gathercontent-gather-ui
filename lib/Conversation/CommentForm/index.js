import React, { Component, PropTypes } from 'react';
import Avatar from '../../Avatar';
import CommentFormInput from './CommentFormInput';
import CommentFormActions from './CommentFormActions';

class CommentForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    onCancel: PropTypes.func,
    focusOnMount: PropTypes.bool,
    value: PropTypes.string,
  };

  static defaultProps = {
    value: '',
    focusOnMount: false,
    onCancel: () => {},
  };

  constructor() {
    super();
    this.state = { inputValue: '' };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.cancelComment = this.cancelComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
  }

  cancelComment() {
    this.props.onCancel();
    this.setState({ inputValue: '' });
  }

  render() {
    const hasValueClass = (this.state.inputValue || this.props.value) ? 'form--has-value' : '';

    return (
      <form
        className={`form ${hasValueClass}`}
        onSubmit={this.onSubmit}
      >
        <div className="form__body">
          <Avatar
            className="form__avatar avatar--supporting"
            src={this.props.user.avatar}
            altText={this.props.user.name}
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
    )
  }
}


export default CommentForm;
