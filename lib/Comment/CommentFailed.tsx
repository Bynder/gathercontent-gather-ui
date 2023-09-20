import React from "react";

export function CommentFailed({ errorText }: any) {
  return <span className="text-red-primary text-sm">{errorText}</span>;
}
