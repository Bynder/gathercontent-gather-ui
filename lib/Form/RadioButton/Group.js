import React, { Component } from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';
import RadioButton from '.';
import RadioButtonOther from './Other';

export default class Group extends Component {
  static propTypes = {
    choices: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        checked: PropTypes.bool,
        other_option: PropTypes.bool,
        highlight: PropTypes.bool,
        hinted: PropTypes.bool
      })
    ).isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    labelMouseEnter: PropTypes.func,
    labelMouseLeave: PropTypes.func,
    overrideLabelDefault: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    active: PropTypes.bool,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    overrideLabelDefault: false,
    labelMouseEnter: () => {},
    labelMouseLeave: () => {},
    active: false,
    disabled: false
  };

  constructor(props) {
    super(props);

    const selected = props.choices.filter(c => c.checked);

    this.state = { selected, choices: props.choices, highlightHover: false };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onTextChangeHandler = this.onTextChangeHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.choices !== this.props.choices) {
      const selected = nextProps.choices.filter(c => c.checked);
      this.setState({ choices: nextProps.choices, selected });
    }
  }

  onChangeHandler(e) {
    const selected = this.state.choices.filter(c => c.id === e.target.id);
    this.setState(prevState => ({
      selected: prevState.choices.filter(c => c.id === e.target.id)
    }));
    this.props.onChangeHandler(selected[0]);
  }

  onTextChangeHandler(e) {
    const { choices } = this.state;
    const otherChoice = choices.filter(c => c.other_option).shift();
    const otherChoiceNewValue = assign({}, otherChoice, {
      value: e.target.value
    });
    const otherChoiceIndex = choices.indexOf(otherChoice);
    choices[otherChoiceIndex] = otherChoiceNewValue;
    const selected = [otherChoiceNewValue];
    this.setState({ choices, selected }, () =>
      this.props.onChangeHandler(this.state.selected[0])
    );
  }

  isChecked(choice) {
    return this.state.selected.filter(c => c === choice).length > 0;
  }

  render() {
    return (
      <div>
        {this.state.choices.map(choice => {
          if (choice.other_option) {
            return (
              <RadioButtonOther
                {...choice}
                key={choice.id}
                onChangeHandler={this.onChangeHandler}
                onTextChangeHandler={this.onTextChangeHandler}
                checked={this.isChecked(choice)}
                disabled={this.props.disabled}
              />
            );
          }
          return (
            <RadioButton
              {...choice}
              key={choice.id}
              onChangeHandler={this.onChangeHandler}
              checked={this.isChecked(choice)}
              highlightHover={this.state.highlightHover}
              overrideLabelDefault={this.props.overrideLabelDefault}
              labelMouseEnter={this.props.labelMouseEnter}
              labelMouseLeave={this.props.labelMouseLeave}
              active={this.props.active}
              disabled={this.props.disabled}
            />
          );
        })}
      </div>
    );
  }
}
