import React from "react";

function ButtonStoryItem({ children, title, className }: any) {
  return (
    <div className={`flex flex-col items-center px-2 ${className}`}>
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  );
}

export { ButtonStoryItem };
