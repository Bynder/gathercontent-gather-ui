import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';
import ExpandingTextArea from '../ExpandingTextArea';

export default class EditableTextWrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onStartEditing: PropTypes.func,
    onStopEditing: PropTypes.func,
    title: PropTypes.string,
    className: PropTypes.string,
    multiline: PropTypes.bool,
    placeholder: PropTypes.string,
    pencilEditOnly: PropTypes.bool,
    inputLabel: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string
  };

  static defaultProps = {
    title: '',
    className: '',
    multiline: false,
    pencilEditOnly: false,
    placeholder: 'Enter a value',
    onStopEditing: () => {},
    onStartEditing: () => {},
    buttonLabel: ''
  };

  state = { editing: false, value: this.props.value };

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  startEditing = () => {
    this.props.onStartEditing();
    this.setState({ editing: true });
  };

  stopEditing = () => {
    this.props.onStopEditing();
    this.setState({ editing: false });
  };

  handleOnKeyDown = e => {
    const isEscKey = e.keyCode === 27;
    const isReturnKey = e.keyCode === 13;

    if (isReturnKey) {
      this.props.onChange(this.state.value);
      this.stopEditing();
    }

    if (isEscKey) {
      this.setState({ value: this.props.value });
      this.stopEditing();
    }
  };

  handleOnBlur = () => {
    this.props.onChange(this.state.value);
    this.stopEditing();
  };

  handleEditKeyPress = event => {
    if (event.key === 'Enter') {
      this.startEditing();
    }
  };

  renderDefault = () => {
    const { title } = this.props;

    return (
      <div className={`editable-text__wrapper ${this.props.className}`}>
        <span
          className="editable-text__text"
          onClick={this.props.pencilEditOnly ? null : this.startEditing}
          tabIndex={0}
          onKeyUp={this.props.pencilEditOnly ? null : this.handleEditKeyPress}
          role="button"
        >
          {this.props.children}
        </span>
        <Button
          types={['icon-only']}
          className="editable-text__button"
          clickHandler={this.startEditing}
          title={title}
        >
          {this.props.buttonLabel && (
            <span className="visually-hidden">{this.props.buttonLabel}</span>
          )}
          <Icon name="pencil" />
        </Button>
      </div>
    );
  };

  renderEditing = () => {
    const classes = cx(
      'editable-text__wrapper',
      'editable-text__wrapper--editing',
      this.props.className,
      `${this.props.className}--editing`
    );

    if (!this.props.multiline) {
      return (
        <div className={classes}>
          <label
            htmlFor="editable-text-wrapper-input"
            className="visually-hidden"
          >
            {this.props.inputLabel}
          </label>
          <input
            placeholder={this.props.placeholder}
            className="editable-text__input single-line"
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            onKeyDown={this.handleOnKeyDown}
            onFocus={e => e.target.select()}
            onBlur={this.handleOnBlur}
            autoFocus // eslint-disable-line jsx-a11y/no-autofocus
            id="editable-text-wrapper-input"
          />
        </div>
      );
    }

    return (
      <div className={classes}>
        <label
          htmlFor="editable-text-wrapper-input"
          className="visually-hidden"
        >
          {this.props.inputLabel}
        </label>
        <ExpandingTextArea
          placeholder={this.props.placeholder}
          className="editable-text__input"
          value={this.state.value}
          handleOnChange={e => this.setState({ value: e.target.value })}
          onKeyDown={this.handleOnKeyDown}
          handleOnFocus={e => e.target.select()}
          handleOnBlur={this.handleOnBlur}
          focusOnMount
          id="editable-text-wrapper-input"
        />
      </div>
    );
  };

  render() {
    return this.state.editing ? this.renderEditing() : this.renderDefault();
  }
}
