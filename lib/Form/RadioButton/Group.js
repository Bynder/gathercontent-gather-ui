import React, { Component } from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';
import RadioButton from '../RadioButton';
import RadioButtonOther from '../RadioButton/Other';

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
  };

  constructor(props) {
    super(props);

    const selected = props.choices.filter(c => c.checked);

    this.state = { selected, choices: props.choices };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onTextChangeHandler = this.onTextChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    const selected = this.state.choices.filter(c => c.id === e.target.id);
    this.setState({ selected });
    this.props.onChangeHandler(selected);
  }

  onTextChangeHandler(e) {
    const choices = this.state.choices;
    const otherChoice = choices.filter(c => c.other_option).shift();
    const otherChoiceNewValue = assign({}, otherChoice, { value: e.target.value });
    const otherChoiceIndex = choices.indexOf(otherChoice);
    choices[otherChoiceIndex] = otherChoiceNewValue;
    const selected = [otherChoiceNewValue];
    this.setState({ choices, selected });
    this.props.onChangeHandler(selected);
  }

  isChecked(choice) {
    return this.state.selected.filter(c => c === choice).length > 0;
  }

  render() {
    return (
      <div>
        {this.state.choices.map((choice) => {
          if (choice.other_option) {
            return (
              <RadioButtonOther
                {...choice}
                key={choice.id}
                onChangeHandler={this.onChangeHandler}
                onTextChangeHandler={this.onTextChangeHandler}
                checked={this.isChecked(choice)}
              />
            );
          }
          return (
            <RadioButton
              {...choice}
              key={choice.id}
              onChangeHandler={this.onChangeHandler}
              checked={this.isChecked(choice)}
            />
          );
        })}
      </div>
    );
  }
}
