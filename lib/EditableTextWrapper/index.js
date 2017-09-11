import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';

export default class EditableTextWrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { editing: false, value: this.props.value };
    this.startEditing = this.startEditing.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  startEditing() {
    this.setState({ editing: true });
  }

  stopEditing() {
    this.setState({ editing: false, value: this.props.value });
  }

  handleOnKeyDown(e) {
    const isEscKey = e.keyCode === 27;
    const isReturnKey = e.keyCode === 13;

    if (isReturnKey) {
      this.props.onChange(this.state.value);
      this.stopEditing();
    }

    if (isEscKey) {
      this.stopEditing();
    }
  }

  renderDefault() {
    return (
      <div className="editable-text__wrapper">
        <span className="editable-text__text">
          { this.props.children }
        </span>
        <Button
          types={['icon-only']}
          className="editable-text__button"
          clickHandler={this.startEditing}
        >
          <Icon name="pencil" />
        </Button>
      </div>
    );
  }

  renderEditing() {
    return (
      <div className="editable-text__wrapper editable-text__wrapper--editing">
        <input
          className="editable-text__input"
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          onKeyDown={this.handleOnKeyDown}
          onFocus={e => e.target.select()}
          onBlur={this.stopEditing}
          autoFocus // eslint-disable-line jsx-a11y/no-autofocus
        />
      </div>
    );
  }

  render() {
    return this.state.editing ? this.renderEditing() : this.renderDefault();
  }
}
