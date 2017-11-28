import React, { Component } from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';
import RadioButton from '../RadioButton';
import RadioButtonOther from '../RadioButton/Other';

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
        highlight: PropTypes.bool
      })
    ).isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    inputOnly: PropTypes.bool,
    labelClick: PropTypes.func
  };

  static defaultProps = {
    inputOnly: false,
    labelClick: () => {}
  };

  constructor(props) {
    super(props);

    const selected = props.choices.filter(c => c.checked);

    this.state = { selected, choices: props.choices, highlightHover: false };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onTextChangeHandler = this.onTextChangeHandler.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.choices !== this.props.choices) {
      const selected = nextProps.choices.filter(c => c.checked);
      this.setState({ choices: nextProps.choices, selected });
    }
  }

  onChangeHandler(e) {
    const selected = this.state.choices.filter(c => c.id === e.target.id);
    this.setState({ selected });
    this.props.onChangeHandler(selected);
  }

  onTextChangeHandler(e) {
    const choices = this.state.choices;
    const otherChoice = choices.filter(c => c.other_option).shift();
    const otherChoiceNewValue = assign({}, otherChoice, {
      value: e.target.value
    });
    const otherChoiceIndex = choices.indexOf(otherChoice);
    choices[otherChoiceIndex] = otherChoiceNewValue;
    const selected = [otherChoiceNewValue];
    this.setState({ choices, selected }, () =>
      this.props.onChangeHandler(this.state.selected)
    );
  }

  isChecked(choice) {
    return this.state.selected.filter(c => c === choice).length > 0;
  }

  mouseEnter() {
    if (this.props.choices[0].highlight) {
      this.setState({ highlightHover: true });
    }
  }

  mouseLeave() {
    if (this.props.choices[0].highlight && this.state.highlightHover) {
      this.setState({ highlightHover: false });
    }
  }

  render() {
    return (
      <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        {this.state.choices.map(choice => {
          if (choice.other_option) {
            return (
              <RadioButtonOther
                {...choice}
                key={choice.id}
                onChangeHandler={this.onChangeHandler}
                onTextChangeHandler={this.onTextChangeHandler}
                checked={this.isChecked(choice)}
                highlightHover={this.state.highlightHover}
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
              labelClick={this.props.labelClick}
              inputOnly={this.props.inputOnly}
            />
          );
        })}
      </div>
    );
  }
}
