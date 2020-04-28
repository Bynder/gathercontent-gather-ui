import React from 'react';
import { bool, func, string } from 'prop-types';
import ConfirmationOverlay from '../ConfirmationOverlay';

export function CommentOverlay({ onCancel, onConfirm, text, show }) {
  return (
    <ConfirmationOverlay
      cancel={onCancel}
      confirm={onConfirm}
      confirmationText={text}
      show={show}
    />
  );
}

CommentOverlay.propTypes = {
  onCancel: func.isRequired,
  onConfirm: func.isRequired,
  text: string.isRequired,
  show: bool
};

CommentOverlay.defaultProps = {
  show: false
};
