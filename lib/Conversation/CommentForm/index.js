import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Avatar from '../../Avatar';
import ExpandingTextArea from '../../ExpandingTextArea';
import CommentFormInput from './CommentFormInput';
import CommentFormActions from './CommentFormActions';

class CommentForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    author: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      initials: PropTypes.string
    }).isRequired,
    focusOnMount: PropTypes.bool,
    value: PropTypes.string,
    isSubmitting: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired
  };

  static defaultProps = {
    value: '',
    focusOnMount: false,
    onCancel: () => {},
    author: {
      name: '??',
      avatar: '',
      initials: ''
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
    const inputValue = !this.props.isSubmitting ? '' : this.state.inputValue;
    this.setState({ inputValue });
  }

  cancelComment() {
    this.props.onCancel();
    this.setState({ inputValue: '' });
  }

  updateInputValue(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    const hasValue = this.state.inputValue || this.props.value;
    const additionalClasses = cx({
      'has-value': hasValue,
      'is-submitting': this.props.isSubmitting
    });
    return (
      <form
        className={`comment-form ${additionalClasses}`}
        onSubmit={this.onSubmit}
      >
        <div className="comment-form__body">
          <Avatar
            className="comment-form__avatar avatar--supporting"
            url={this.props.author.avatar}
            initials={this.props.author.initials}
          />
          <ExpandingTextArea
            handleOnChange={this.updateInputValue}
            focusOnMount={this.props.focusOnMount}
            value={this.state.inputValue || this.props.value}
            placeholder={this.props.placeholder}
            setValue
          />
        </div>
        <CommentFormActions
          onSubmit={this.onSubmit}
          onCancel={this.cancelComment}
          hasValue={hasValue}
          isSubmitting={this.props.isSubmitting}
        />
      </form>
    );
  }
}

export default CommentForm;
