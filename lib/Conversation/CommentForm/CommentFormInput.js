import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MentionsInput, Mention } from 'react-mentions';
import Avatar from '../../Avatar';
import AvatarInformation from '../../Avatar/AvatarInformation';

class CommentFormInput extends Component {
  static propTypes = {
    inputValue: PropTypes.string,
    handleOnChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    handleOnFocus: PropTypes.func.isRequired,
    focusOnMount: PropTypes.bool,
    onRowCountChange: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape()).isRequired
  };

  static defaultProps = {
    inputValue: '',
    placeholder: '',
    focusOnMount: false
  };

  state = {
    inputHeight: '0px'
  };

  componentDidMount() {
    this.setState({ inputHeight: this.getInputHeight() }); // eslint-disable-line react/no-did-mount-set-state
  }

  getInputHeight = () => {
    if (this.input) {
      return this.input.getBoundingClientRect().height;
    }
    return this.state.inputHeight;
  };

  handleChange = event => {
    const newHeight = this.getInputHeight();
    if (newHeight !== this.state.inputHeight) {
      this.props.onRowCountChange();
      this.setState({ inputHeight: newHeight });
    }
    return this.props.handleOnChange(event);
  };

  searchForUsers = term => {
    if (term.trim() !== '' && this.props.users.length > 0) {
      const filtered = this.props.users.filter(
        user =>
          user.name
            .toLowerCase()
            .split(' ')
            .filter(subStr => subStr.lastIndexOf(term, 0) === 0).length > 0 ||
          user.display.toLowerCase().lastIndexOf(term, 0) === 0
      );
      return filtered;
    }
    return this.props.users;
  };

  handleOnChange = () => {};

  render() {
    return (
      <div
        className="comment-form__input-wrapper"
        ref={el => {
          this.input = el;
        }}
      >
        <MentionsInput
          className="comment-form__input"
          value={this.props.inputValue}
          onChange={this.handleChange}
          onFocus={this.props.handleOnFocus}
          onBlur={this.props.handleOnFocus}
          placeholder={this.props.placeholder}
          markup="@[__display__]"
          autoFocus={this.props.focusOnMount}
          displayTransform={(id, display) => `@${display}`}
        >
          <Mention
            trigger="@"
            data={search => this.searchForUsers(search)}
            appendSpaceOnAdd
            renderSuggestion={suggestion => (
              <Avatar url={suggestion.avatar} initials={suggestion.initials}>
                <AvatarInformation
                  email={`@${suggestion.display}`}
                  name={suggestion.name}
                />
              </Avatar>
            )}
          />
        </MentionsInput>
      </div>
    );
  }
}

export default CommentFormInput;
