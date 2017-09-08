import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './';

export default class Group extends Component {
  static propTypes = {
    choices: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      checked: PropTypes.bool,
    })).isRequired,
    onChangeHandler: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    const selected = props.choices.filter(c => c.checked);
    this.state = { choices: props.choices, selected };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.choiceIsAlreadySelected = this.choiceIsAlreadySelected.bind(this);
    this.removeChoice = this.removeChoice.bind(this);
    this.addChoice = this.addChoice.bind(this);
  }

  onChangeHandler(e) {
    const choice = this.state.choices.find(c => c.id === e.target.id);

    const selected = this.choiceIsAlreadySelected(choice) ? this.removeChoice(choice) : this.addChoice(choice);
    this.setState({ selected });

    this.props.onChangeHandler(selected);
  }

  choiceIsAlreadySelected(choice) {
    return this.state.selected.findIndex(c => c === choice) >= 0;
  }

  addChoice(choice) {
    return this.state.selected.concat(choice);
  }

  removeChoice(choice) {
    return this.state.selected.filter(c => c !== choice);
  }

  isChecked = choice => this.state.selected.findIndex(e => e === choice) >= 0;

  render() {
    return (
      <div>
        {this.state.choices.map(choice => (
          <Checkbox
            {...choice}
            onChangeHandler={this.onChangeHandler}
            checked={this.isChecked(choice)}
          />
        ))}
      </div>
    );
  }
}
