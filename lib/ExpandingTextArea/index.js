import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpandingTextArea extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func,
    handleOnFocus: PropTypes.func,
    onRowCountChange: PropTypes.func,
    value: PropTypes.string,
    focusOnMount: PropTypes.bool,
    setValue: PropTypes.bool,
    className: PropTypes.string,
    minRows: PropTypes.number
  };

  static defaultProps = {
    handleOnChange: () => {},
    handleOnFocus: () => {},
    onRowCountChange: () => {},
    value: '',
    focusOnMount: false,
    setValue: false,
    className: '',
    minRows: 1
  };

  constructor(props) {
    super(props);
    this.state = { inputValue: '', rowCount: 1, rowHeight: 0, padding: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setInitialRows();

    if (this.props.focusOnMount) {
      this.input.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      if (!nextProps.value) {
        return this.setState({ rowCount: nextProps.minRows });
      }
      return this.resizeTextArea();
    }
    return null;
  }

  setInitialRows() {
    const inputStyle = window.getComputedStyle(this.input);
    const rowHeight = parseInt(inputStyle.lineHeight, 10);
    const padding =
      parseInt(inputStyle.paddingTop, 10) +
      parseInt(inputStyle.paddingBottom, 10);
    const initialRows = this.calculateRows(rowHeight, padding);
    this.setState({
      rowHeight,
      padding,
      rowCount: initialRows
    });
  }

  handleChange(e) {
    this.props.handleOnChange(e);
    if (!this.props.setValue) {
      this.setState({ inputValue: e.target.value });
      this.resizeTextArea();
    }
  }

  calculateRows(
    rowHeight = this.state.rowHeight,
    inputPadding = this.state.padding
  ) {
    let newRows = ~~((this.input.scrollHeight - inputPadding) / rowHeight);
    if (newRows <= 0 || newRows < this.props.minRows) {
      newRows = this.props.minRows;
    }
    return newRows;
  }

  resizeTextArea() {
    this.input.rows = 1;
    const newRows = this.calculateRows();
    if (newRows === this.state.rowCount) {
      this.input.rows = newRows;
    }
    if (newRows !== this.state.rowCount) {
      this.props.onRowCountChange();
    }
    this.setState({ rowCount: newRows });
  }

  render() {
    return (
      <textarea
        className={`expanding-textarea ${this.props.className}`}
        ref={input => {
          this.input = input;
        }}
        value={this.state.inputValue || this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
        onFocus={this.props.handleOnFocus}
        onBlur={this.props.handleOnFocus}
        rows={this.state.rowCount}
      />
    );
  }
}

export default ExpandingTextArea;
