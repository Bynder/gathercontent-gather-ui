import React, { createContext, useEffect, useState } from "react";

const CommentContext = createContext({});

function CommentProvider({
  children,
  isOpen,
  isEditing: editing,
  isDeleting: deleting,
  hasFailed: failed,
  showBorders,
}: any) {
  const [isEditing, setIsEditing] = useState(editing);
  const [isDeleting, setIsDeleting] = useState(deleting);
  const [hasFailed, setHasFailed] = useState(failed);

  const resetToDefaults = () => {
    setIsEditing(CommentProvider.defaultProps.isDeleting);
    setIsDeleting(CommentProvider.defaultProps.isEditing);
    setHasFailed(CommentProvider.defaultProps.hasFailed);
  };

  useEffect(() => {
    if (!isOpen) {
      resetToDefaults();
    }
  }, [isOpen]);

  const sharedState = {
    isOpen,
    showBorders,
    isEditing,
    setIsEditing,
    isDeleting,
    setIsDeleting,
    hasFailed,
    setHasFailed,
  };

  return (
    <CommentContext.Provider value={sharedState}>
      {children}
    </CommentContext.Provider>
  );
}
CommentProvider.defaultProps = {
  isDeleting: false,
  isEditing: false,
  hasFailed: false,
  showBorders: false,
};

export { CommentProvider, CommentContext };
