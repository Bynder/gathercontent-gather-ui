import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MentionsInput, Mention } from 'react-mentions';
import { Avatar, AvatarInformation, Dropdown, Icon } from '../../lib';
import MentionsFormSearch from './MentionsFormSearch';
import { filterUsers } from './MentionsHelper';

class MentionsFormInput extends Component {
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
    placeholder: '',
    focusOnMount: false,
    inputValue: ''
  };

  state = {
    inputValue: this.props.inputValue,
    inputHeight: '0px',
    selection: {
      start: 0,
      end: 0
    }
  };

  componentDidMount() {
    this.setState({ inputHeight: this.getInputHeight() }); // eslint-disable-line react/no-did-mount-set-state
  }

  handleSelection = e => {
    const start = e.target.selectionStart;
    const end = e.target.selectionEnd;
    this.setState({
      selection: {
        start,
        end
      }
    });
  };

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
      return filterUsers(this.props.users, term);
    }
    return this.props.users;
  };

  addMention = (id, display) => {
    if (this.mentionInput) {
      this.mentionInput.wrappedInstance.addMention(
        {
          id,
          display
        },
        {
          mentionDescriptor: this.mentionInput.props.children,
          querySequenceStart: this.state.selection.start,
          querySequenceEnd: this.state.selection.end,
          plainTextValue: ''
        }
      );
    }
  };

  render() {
    return (
      <div
        className="mention-form__input-wrapper"
        ref={el => {
          this.input = el;
        }}
      >
        <MentionsInput
          ref={e => {
            this.mentionInput = e;
          }}
          onSelect={this.handleSelection}
          className="mention-form__input"
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
        <Dropdown id="mentions-trigger" className="mention-form__dropdown">
          <Dropdown.Trigger useButton types={['icon-only']}>
            <Icon name="addPerson" />
          </Dropdown.Trigger>
          <MentionsFormSearch
            users={this.props.users}
            addMention={this.addMention}
          />
        </Dropdown>
      </div>
    );
  }
}

export default MentionsFormInput;
