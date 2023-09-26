import React from "react";

function ButtonLink({ children, className, buttonRef, ...rest }: any) {
  return (
    <button
      type="button"
      className={`${className} bg-transparent border-0 hover:underline focus:outline-none rounded`}
      ref={buttonRef}
      {...rest}
    >
      {children}
    </button>
  );
}

ButtonLink.defaultProps = {
  className: "",
};

export { ButtonLink };
