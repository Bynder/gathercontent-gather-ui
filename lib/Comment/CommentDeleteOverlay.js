import React from 'react';
import { bool, func, string } from 'prop-types';
import ConfirmationOverlay from '../ConfirmationOverlay';

export function CommentDeleteOverlay({ onCancel, onConfirm, text, show }) {
  return (
    <ConfirmationOverlay
      cancel={onCancel}
      confirm={onConfirm}
      confirmationText={text}
      show={show}
    />
  );
}

CommentDeleteOverlay.propTypes = {
  onCancel: func.isRequired,
  onConfirm: func.isRequired,
  text: string,
  show: bool
};

CommentDeleteOverlay.defaultProps = {
  text: '',
  show: false
};
