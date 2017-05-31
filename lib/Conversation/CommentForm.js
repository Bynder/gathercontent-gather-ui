import React, { Component, PropTypes } from 'react';
import Button from '../Button';

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
    const inputValue = (this.props.comment) ? this.props.comment.body : '';
    this.props.onCancel();
    this.setState({inputValue});
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <div className="form__body">
          <input
            className="form__input"
            type="text"
            ref={input => (this.input = input)}
            value={this.state.inputValue}
            onChange={this.updateInputValue}
          />
        </div>

        <div>
          <Button types={['link', 'small']}>@</Button>
          <Button types={['link', 'small']}>Em</Button>

          { this.state.inputValue &&
            <span>
              <Button types={['secondary', 'small']} clickHandler={this.onSubmit}>Send</Button>
              <Button types={['danger', 'small']} clickHandler={this.cancelComment}>Cancel</Button>
            </span>
          }
        </div>
      </form>
    )
  }
}


export default CommentForm;
