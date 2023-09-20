import React, { useContext } from "react";
import { Comment } from "lib";
import ConfirmationOverlay from "../ConfirmationOverlay";
import BoundaryClickWatcher from "../BoundaryClickWatcher";

function CommentDeleteConfirmation({
  onConfirm,
  confirmButtonText,
  failureText,
  onCancel,
}: any) {
  const { isDeleting, setIsDeleting }: any = useContext(Comment.Context);

  const closeAndCancel = () => {
    setIsDeleting(false);
    onCancel();
  };

  return isDeleting ? (
    <BoundaryClickWatcher outsideClickHandler={closeAndCancel} alwaysListen>
      <ConfirmationOverlay
        className="comment-delete-confirmation"
        show={isDeleting}
        cancel={closeAndCancel}
        confirm={onConfirm}
        confirmationText={confirmButtonText}
        failureText={failureText}
      />
    </BoundaryClickWatcher>
  ) : null;
}

CommentDeleteConfirmation.defaultProps = {
  confirmButtonText: "Delete",
  onCancel: () => {},
  failureText: "",
};

export { CommentDeleteConfirmation };
