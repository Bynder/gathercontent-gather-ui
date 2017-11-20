import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpandingTextArea extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func,
    value: PropTypes.string,
    focusOnMount: PropTypes.bool,
    setValue: PropTypes.bool
  };

  static defaultProps = {
    handleOnChange: () => {},
    value: '',
    focusOnMount: false,
    setValue: false
  };

  constructor(props) {
    super(props);
    this.state = { inputValue: '', rows: 1, rowSize: 0, padding: 0 };
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
        return this.setState({ rows: 1 });
      }
      return this.resizeTextArea();
    }
    return null;
  }

  setInitialRows() {
    const rowSize = parseInt(
      window.getComputedStyle(this.input).lineHeight,
      10
    );
    const padding =
      parseInt(window.getComputedStyle(this.input).paddingTop, 10) +
      parseInt(window.getComputedStyle(this.input).paddingBottom, 10);
    const initialRows = this.calculateRows(rowSize, padding);
    this.setState({
      rowSize,
      padding,
      rows: initialRows
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
    rowSize = this.state.rowSize,
    inputPadding = this.state.padding
  ) {
    let newRows = ~~((this.input.scrollHeight - inputPadding) / rowSize);
    if (newRows <= 0) {
      newRows = 1;
    }
    return newRows;
  }

  resizeTextArea() {
    const previousRows = this.state.rows;
    this.input.rows = 1;
    const newRows = this.calculateRows();
    if (newRows === previousRows) {
      this.input.rows = newRows;
    }
    this.setState({ rows: newRows });
  }

  render() {
    return (
      <textarea
        className="expanding-textarea"
        ref={input => {
          this.input = input;
        }}
        value={this.state.inputValue || this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
        rows={this.state.rows}
      />
    );
  }
}

export default ExpandingTextArea;
