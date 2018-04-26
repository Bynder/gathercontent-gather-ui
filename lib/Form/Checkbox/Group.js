import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './';

export default class Group extends Component {
  static propTypes = {
    choices: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        checked: PropTypes.bool,
        highlight: PropTypes.bool,
        active: PropTypes.bool
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
    this.state = { choices: props.choices, selected };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.removeChoice = this.removeChoice.bind(this);
    this.addChoice = this.addChoice.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.choices !== this.props.choices) {
      const selected = nextProps.choices.filter(c => c.checked);
      this.setState({ choices: nextProps.choices, selected });
    }
  }

  onChangeHandler(e) {
    const choice = this.state.choices.filter(c => c.id === e.target.id).shift();
    if (this.isChecked(choice)) {
      return this.removeChoice(choice);
    }
    return this.addChoice(choice);
  }

  isChecked(choice) {
    return this.state.selected.filter(c => c === choice).length > 0;
  }

  addChoice(choice) {
    this.setState({ selected: this.state.selected.concat(choice) }, () =>
      this.props.onChangeHandler(this.state.selected)
    );
  }

  removeChoice(choice) {
    this.setState(
      { selected: this.state.selected.filter(c => c !== choice) },
      () => this.props.onChangeHandler(this.state.selected)
    );
  }

  render() {
    return (
      <div>
        {this.state.choices.map(choice => (
          <Checkbox
            key={choice.id}
            {...choice}
            onChangeHandler={this.onChangeHandler}
            checked={this.isChecked(choice)}
            overrideLabelDefault={this.props.overrideLabelDefault}
            labelMouseEnter={this.props.labelMouseEnter}
            labelMouseLeave={this.props.labelMouseLeave}
            active={this.props.active}
            disabled={this.props.disabled}
          />
        ))}
      </div>
    );
  }
}
