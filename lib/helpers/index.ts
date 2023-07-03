export const childIsComponent = (child: any, func: any) => {
  if (!child) {
    return false;
  }

  return child.type === func;
};

export const childrenContainsComponent = (children: any, func: any) => {
  if (!children || !func) {
    return false;
  }

  if (childIsComponent(children, func)) {
    return true;
  }

  return children.some && children.some((child: any) => childIsComponent(child, func));
};
