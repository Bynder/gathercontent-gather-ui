import React, { useContext } from 'react';
import { func, string } from 'prop-types';
import { Comment } from 'lib';
import ConfirmationOverlay from '../ConfirmationOverlay';
import BoundaryClickWatcher from '../BoundaryClickWatcher';

function CommentDeleteConfirmation({ onConfirm, confirmButtonText, onCancel }) {
  const { isDeleting, setIsDeleting } = useContext(Comment.Context);

  const closeConfirmation = () => setIsDeleting(false);

  return isDeleting ? (
    <BoundaryClickWatcher outsideClickHandler={closeConfirmation} alwaysListen>
      <ConfirmationOverlay
        className="comment-delete-confirmation"
        show={isDeleting}
        cancel={() => {
          onCancel();
          closeConfirmation();
        }}
        confirm={onConfirm}
        confirmationText={confirmButtonText}
      />
    </BoundaryClickWatcher>
  ) : null;
}

CommentDeleteConfirmation.propTypes = {
  onConfirm: func.isRequired,
  confirmButtonText: string,
  onCancel: func
};

CommentDeleteConfirmation.defaultProps = {
  confirmButtonText: 'Delete',
  onCancel: () => {}
};

export { CommentDeleteConfirmation };
