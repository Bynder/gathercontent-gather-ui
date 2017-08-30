import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Label from '../Label';

class Other extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func,
  };

  static defaultProps = {
    value: '',
    checked: false,
    onChangeHandler: () => {},
  };

  constructor(props) {
    super(props);
    this.state = { otherOptionValue: props.value };
  }

  render() {
    const { name, value, id, checked, label, onChangeHandler } = this.props;
    return (
      <span>
        <Input name={name} id={id} checked={checked} onChange={() => onChangeHandler(this.state.otherOptionValue)} value={value} />
        <Label label={label} id={id} />
        { checked &&
          <input
            type="text"
            id={`other-value-${id}`}
            value={this.state.otherOptionValue}
            onChange={(e) => {
              this.setState({ otherOptionValue: e.target.value });
              onChangeHandler(e.target.value);
            }}
          />
        }
      </span>
    );
  }
}

export default Other;
