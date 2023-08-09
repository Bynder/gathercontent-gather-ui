import { HTMLAttributes } from "react";

type onToggleArgs = {
  type: string;
  payload: {
    id: string;
  };
};

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  onToggle: (args: onToggleArgs) => void;
  onHide: () => void;
  autoPosition: boolean;
  block: boolean;
  persistShow: boolean;
}
