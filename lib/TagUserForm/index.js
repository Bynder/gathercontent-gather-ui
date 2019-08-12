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
    lockedUserTooltip: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    value: '',
    focusOnMount: false,
    onInputChange: () => {},
    onCancel: () => {},
    cancelText: 'Cancel',
    submitText: 'Submit',
    dropdownAutoPosition: false,
    lockedUsers: [],
    lockedUserTooltip: 'Locked',
    className: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.value,
      addedUsers: [],
      users: this.props.users.filter(
        user =>
          this.props.lockedUsers.filter(
            lockedUser => user.display === lockedUser.display
          ).length === 0
      )
    };
  }

  componentDidMount() {
    if (this.state.inputValue) {
      this.props.onInputChange(this.state.inputValue);
    }
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      this.props.lockedUsers !== nextProps.lockedUsers ||
      this.props.users !== nextProps.users
    ) {
      this.setState({
        users: nextProps.users.filter(
          user =>
            nextProps.lockedUsers.filter(
              lockedUser => user.display === lockedUser.display
            ).length === 0
        )
      });
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

  onCancel = () => {
    this.props.onCancel();
    this.setState({ inputValue: '' });
  };

  updateInputValue = e => {
    this.props.onInputChange(e.target.value);
    this.setState({ inputValue: e.target.value });
  };

  onAddUser = user => {
    const { addedUsers, users } = this.state;
    // timeout added due to a bug with boundaryClickWatcher
    setTimeout(() => {
      this.setState({
        addedUsers: addedUsers.concat(user),
        users: users.filter(currentUser => user.id !== currentUser.id)
      });
    }, 1);
  };

  onRemoveUser = user => {
    const { addedUsers, users } = this.state;
    // timeout added due to a bug with boundaryClickWatcher
    setTimeout(() => {
      this.setState({
        addedUsers: addedUsers.filter(
          currentUser => user.id !== currentUser.id
        ),
        users: users.concat(user)
      });
    }, 1);
  };

  render() {
    const hasUsersAdded =
      this.props.lockedUsers.concat(this.state.addedUsers).length !== 0;

    return (
      <form
        className={`taguser-form ${this.props.className}`}
        onSubmit={this.onSubmit}
      >
        <div className="taguser-form__body">
          <TagUserFormUsers
            lockedUsers={this.props.lockedUsers}
            users={this.state.users}
            addedUsers={this.state.addedUsers}
            addUser={this.onAddUser}
            removeUser={this.onRemoveUser}
            lockedUserTooltip={this.props.lockedUserTooltip}
            dropdownAutoPosition={this.props.dropdownAutoPosition}
          />
          <ExpandingTextArea
            className="taguser-form__input"
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
          onCancel={this.onCancel}
          disableSubmit={!hasUsersAdded}
        />
      </form>
    );
  }
}

export default TagUserForm;
