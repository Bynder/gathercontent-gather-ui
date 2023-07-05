import { HTMLAttributes } from "react";

type onToggleArgs = {
  type: string;
  payload: {
    id: string;
  };
};

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  onToggle: (args: onToggleArgs) => {};
  onHide: () => {};
  autoPosition: boolean;
  block: boolean;
  persistShow: boolean;
}
