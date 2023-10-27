import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import cx from "classnames";
import BoundaryClickWatcher from "../BoundaryClickWatcher";
import { DropdownProps } from "./.types/DropdownTypes";

type boundsType = {
  top: number;
  left: number;
  bottom: number;
  right: number;
  width: number;
  height: number;
};

interface Context {
  showContent?: boolean;
  toggleShowContent: (elBounds: boundsType | null) => void;
  setShowContent?: Dispatch<SetStateAction<boolean>>;
  autoPosition?: boolean;
  bounds?: boundsType;
}

export const DropdownContext = createContext<Context>({
  toggleShowContent: () => {},
});

function DropdownProvider({
  id,
  onToggle,
  persistShow,
  children,
  onHide,
  autoPosition,
  block,
  className,
}: DropdownProps) {
  const [showContent, setShowContent] = useState(false);
  const [bounds, setBounds] = useState({
    top: -9999,
    left: -9999,
    right: -9999,
    bottom: -9999,
    width: 0,
    height: 0,
  });

  const dispatchToggle = (contentWillShow: any) => {
    const type = contentWillShow || persistShow ? "ACTIVE" : "UNACTIVE";

    onToggle({
      type,
      payload: { id },
    });
  };

  const toggleAndSetShowContent = (show: any) => {
    dispatchToggle(show);
    setShowContent(persistShow ? true : show);
  };

  const toggleShowContent = (elBounds: boundsType | null) => {
    dispatchToggle(!showContent);
    setShowContent(persistShow ? true : !showContent);

    if (elBounds) {
      setBounds({
        top: elBounds.top,
        left: elBounds.left,
        right: elBounds.right,
        width: elBounds.width,
        bottom: elBounds.bottom,
        height: elBounds.height,
      });
    }
  };

  const sharedState = {
    showContent,
    toggleShowContent,
    setShowContent: toggleAndSetShowContent,
    autoPosition,
    bounds,
  };

  const classNames = cx(`gui-dropdown-gc ${className}`, {
    "gui-is-active": showContent,
    "gui-auto-top": autoPosition,
    "gui-dropdown-gc--block": block,
  });

  return (
    <DropdownContext.Provider value={sharedState}>
      <BoundaryClickWatcher
        className={classNames}
        outsideClickHandler={() => {
          toggleAndSetShowContent(false);
          onHide();
        }}
        tabIndex={-1}
      >
        {typeof children === "function"
          ? children({
              setShowContent: toggleAndSetShowContent,
              showContent,
            })
          : children}
      </BoundaryClickWatcher>
    </DropdownContext.Provider>
  );
}

export default DropdownProvider;
