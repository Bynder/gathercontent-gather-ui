import { HTMLAttributes, ReactNode } from "react";

type onToggleArgs = {
  type: string;
  payload: {
    id: string;
  };
};

interface RenderProps {
  setShowContent: (showContent: boolean) => void,
  showContent: boolean,
}

export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  id: string;
  onToggle: (args: onToggleArgs) => void;
  onHide: () => void;
  autoPosition: boolean;
  block: boolean;
  persistShow: boolean;
  children: ReactNode | JSX.Element | ((renderProps: RenderProps) => ReactNode | JSX.Element);
}
