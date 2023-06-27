export const childIsComponent = (child, func) => {
  if (!child) {
    return false;
  }

  return child.type === func;
};

export const childrenContainsComponent = (children, func) => {
  if (!children || !func) {
    return false;
  }

  if (childIsComponent(children, func)) {
    return true;
  }

  return children.some && children.some(child => childIsComponent(child, func));
};
