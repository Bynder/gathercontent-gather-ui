import React, { useContext } from 'react';
import { func, string } from 'prop-types';
import { Comment } from 'lib';
import ConfirmationOverlay from '../ConfirmationOverlay';
import BoundaryClickWatcher from '../BoundaryClickWatcher';

function CommentDeleteConfirmation({ onConfirm, confirmButtonText }) {
  const { isDeleting, setIsDeleting } = useContext(Comment.Context);

  const closeConfirmation = () => setIsDeleting(false);

  return isDeleting ? (
    <BoundaryClickWatcher outsideClickHandler={closeConfirmation} alwaysListen>
      <ConfirmationOverlay
        className="comment-delete-confirmation"
        show={isDeleting}
        cancel={closeConfirmation}
        confirm={onConfirm}
        confirmationText={confirmButtonText}
      />
    </BoundaryClickWatcher>
  ) : null;
}

CommentDeleteConfirmation.propTypes = {
  onConfirm: func.isRequired,
  confirmButtonText: string
};

CommentDeleteConfirmation.defaultProps = {
  confirmButtonText: 'Delete'
};

export { CommentDeleteConfirmation };
