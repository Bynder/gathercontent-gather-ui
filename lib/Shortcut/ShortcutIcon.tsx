import React from "react";

export function ShortcutIcon(props: any) {
  return <span className="shortcut__keyboard">{props.children}</span>;
}

ShortcutIcon.defaultProps = {
  children: [],
};

export default ShortcutIcon;
