import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpandingTextArea from '../ExpandingTextArea';
import TagUserFormActions from './TagUserFormActions';
import TagUserFormUsers from './Users/TagUserFormUsers';

class TagUserForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onInputChange: PropTypes.func,
    onCancel: PropTypes.func,
    focusOnMount: PropTypes.bool,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    cancelText: PropTypes.string,
    submitText: PropTypes.string,
    dropdownAutoPosition: PropTypes.bool,
    lockedUsers: PropTypes.arrayOf(PropTypes.shape()),
    lockedUserTooltip: PropTypes.string
  };

  static defaultProps = {
    value: '',
    focusOnMount: false,
    onRowCountChange: () => {},
    onInputChange: () => {},
    onCancel: () => {},
    cancelText: 'Cancel',
    submitText: 'Submit',
    dropdownAutoPosition: false,
    lockedUsers: [],
    lockedUserTooltip: 'Locked'
  };

  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.value,
      addedUsers: []
    };
  }

  componentDidMount() {
    if (this.state.inputValue) {
      this.props.onInputChange(this.state.inputValue);
    }
  }

  onSubmit = e => {
    if (e) {
      e.preventDefault();
    }
    const users = this.props.lockedUsers.concat(this.state.addedUsers);
    this.props.onSubmit(users, this.state.inputValue);
    this.setState({ inputValue: '' });
    this.props.onInputChange('');
  };

  cancelComment = () => {
    this.props.onCancel();
    this.setState({ inputValue: '' });
  };

  updateInputValue = e => {
    this.props.onInputChange(e.target.value);
    this.setState({ inputValue: e.target.value });
  };

  onAddUser = user => {
    const { addedUsers } = this.state;
    this.setState({ addedUsers: addedUsers.concat(user) });
  };

  onRemoveUser = user => {
    const { addedUsers } = this.state;
    this.setState({
      addedUsers: addedUsers.filter(currentUser => user.id !== currentUser.id)
    });
  };

  render() {
    const hasValue = !!this.state.inputValue || !!this.props.value;
    const hasUsersAdded =
      this.props.lockedUsers.concat(this.state.addedUsers).length !== 0;
    const disableSubmit = !hasValue || !hasUsersAdded;

    const searchableUsers = () => {
      if (
        this.props.lockedUsers.length !== 0 ||
        this.state.addedUsers.length !== 0
      ) {
        const currentlyAdded = this.props.lockedUsers.concat(
          this.state.addedUsers
        );
        return this.props.users.filter(
          user =>
            currentlyAdded.filter(
              currentUser => user.display === currentUser.display
            ).length === 0
        );
      }
      return this.props.users;
    };

    return (
      <form className="taguser-form" onSubmit={this.onSubmit}>
        <div className="taguser-form__body">
          <TagUserFormUsers
            lockedUsers={this.props.lockedUsers}
            users={searchableUsers()}
            addedUsers={this.state.addedUsers}
            addUser={this.onAddUser}
            removeUser={this.onRemoveUser}
            lockedUserTooltip={this.props.lockedUserTooltip}
            dropdownAutoPosition={this.props.dropdownAutoPosition}
          />
          <ExpandingTextArea
            value={this.state.inputValue}
            handleOnChange={this.updateInputValue}
            placeholder={this.props.placeholder}
            focusOnMount={this.props.focusOnMount}
            minRows={3}
            setValue
          />
        </div>
        <TagUserFormActions
          submitText={this.props.submitText}
          cancelText={this.props.cancelText}
          onSubmit={this.onSubmit}
          onCancel={this.cancelComment}
          disableSubmit={disableSubmit}
        />
      </form>
    );
  }
}

export default TagUserForm;
