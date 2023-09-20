import React from "react";

export function CommentMeta({ children }: any) {
  return (
    <div className="comment-meta flex w-full item items-center">
      <span className="text-sm text-neutral-primary">{children}</span>
    </div>
  );
}
