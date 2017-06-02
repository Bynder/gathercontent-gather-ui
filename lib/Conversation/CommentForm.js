import React, { Component, PropTypes } from 'react';
import Button from '../Button';
import Avatar from '../Avatar';

class CommentForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    comment: PropTypes.shape(),
  };

  static defaultProps = {
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

  onSubmit() {
    this.props.onSubmit(this.state.inputValue);
  }

  cancelComment() {
    this.props.onCancel();
    this.setState({ inputValue: '' });
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <div className="form__body">
          <Avatar
            className="form__avatar avatar--supporting"
            src={this.props.user.avatar}
            altText={this.props.user.name}
          />
          { this.props.useTextArea &&
            <textarea
              className="form__input"
              ref={input => (this.input = input)}
              value={this.state.inputValue}
              onChange={this.updateInputValue}
              placeholder="Reply..."
            />
          }
          { !this.props.useTextArea &&
            <input
              className="form__input"
              type="text"
              ref={input => (this.input = input)}
              value={this.state.inputValue}
              onChange={this.updateInputValue}
              placeholder="Reply..."
            />
          }
        </div>

        <div className="form__actions">
          <Button clickHandler={() => {}} types={['size-sm']}>@</Button>
          <Button clickHandler={() => {}} types={['size-sm']}>em</Button>

          { this.state.inputValue &&
            <span className="form__actions">
              <Button
                types={['danger', 'size-sm']}
                clickHandler={this.cancelComment}
              >
                Cancel
              </Button>
              <Button
                types={['secondary', 'size-sm']}
                clickHandler={this.onSubmit}
              >
                Send
              </Button>
            </span>
          }
        </div>
      </form>
    )
  }
}


export default CommentForm;
