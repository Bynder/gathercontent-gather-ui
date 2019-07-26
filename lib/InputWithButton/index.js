import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from '../core/Input';
import Button from '../Button';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftHandInput = styled(Input)`
  width: 220px;
  border-radius: 4px 0px 0px 4px;
`;

const RightHandButton = styled(Button)`
  ${props =>
    props.paddingSmall
      ? `
	font-size: ${props.theme.fonts.sizes.slight};
	padding-top: ${props.theme.layout.spacingBase / 4}px;
	padding-bottom: ${props.theme.layout.spacingBase / 4}px;
	width: 95px;
	height: ${props.theme.layout.spacingBase + props.theme.layout.spacingBase / 2}px
      `
      : ''}
`;

class InputWithButton extends Component {
  state = {
    hasBeenClicked: false
  };

  onClick = () => {
    const { inputId, onClick } = this.props;
    const inputElement = document.getElementById(inputId);

    this.setState({ hasBeenClicked: true });
    onClick(inputElement);
  };

  render() {
    const {
      value,
      buttonText,
      buttonTextAfterClick,
      inputId,
      buttonId,
      disabled,
      paddingSmall
    } = this.props;

    const { hasBeenClicked } = this.state;

    return (
      <Container>
        <LeftHandInput
          readOnly
          id={inputId}
          aria-labelledby={buttonId}
          value={value}
          disabled={disabled}
          paddingSmall={paddingSmall}
        />
        <RightHandButton
          id={buttonId}
          disabled={disabled}
          types={['primary', 'input-appendage']}
          onClick={this.onClick}
          paddingSmall={paddingSmall}
        >
          {buttonTextAfterClick && hasBeenClicked
            ? buttonTextAfterClick
            : buttonText}
        </RightHandButton>
      </Container>
    );
  }
}

InputWithButton.defaultProps = {
  disabled: false,
  buttonTextAfterClick: null,
  paddingSmall: false
};

InputWithButton.propTypes = {
  inputId: PropTypes.string.isRequired,
  buttonId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonTextAfterClick: PropTypes.string,
  disabled: PropTypes.bool,
  paddingSmall: PropTypes.bool
};

export default InputWithButton;
