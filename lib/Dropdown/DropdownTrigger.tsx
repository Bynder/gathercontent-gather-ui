import React, { HTMLAttributes, useContext, useRef } from "react";
import cx from "classnames";
import { isFunction } from "lodash";
import Button from "../Button";
import Icon from "../Icon";
import { DropdownContext } from "./DropdownProvider";

interface RenderProps {
  toggleShowContent: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

interface Props
  extends Omit<HTMLAttributes<HTMLButtonElement>, "onClick" | "children"> {
  useButton?: boolean;
  useSelect?: boolean;
  direction?: "top" | "bottom" | "left" | "right";
  triggerClassName?: string;
  types?: string[];
  blueOnActive?: boolean;
  useHover?: boolean;
  onClick: (
    arg: boolean,
    arg2: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {};
  children:
    | React.ReactNode
    | JSX.Element
    | ((renderProps: RenderProps) => React.ReactNode | JSX.Element);
}

export function DropdownTrigger({
  onClick,
  children,
  triggerClassName,
  useButton,
  useSelect,
  direction,
  types = [],
  blueOnActive,
  useHover,
  ...rest
}: Props) {
  const triggerDivRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const triggerBtnRef = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const { toggleShowContent, autoPosition, showContent } =
    useContext(DropdownContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(!showContent, e);
    }
    const triggerRef = triggerDivRef.current || triggerBtnRef.current;
    if (triggerRef && autoPosition) {
      const bounds = triggerRef.getBoundingClientRect();
      return toggleShowContent(bounds);
    }

    return toggleShowContent(null);
  };

  const handleMouseover = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (useHover) {
      if (onClick) {
        onClick(!showContent, event);
      }
      const triggerRef = triggerDivRef.current || triggerBtnRef.current;
      if (triggerRef && autoPosition) {
        const bounds = triggerRef.getBoundingClientRect();
        return toggleShowContent(bounds);
      }

      return toggleShowContent(null);
    }
    return null;
  };

  const wrapperClassNames = cx(`gui-dropdown__trigger-wrapper--${direction}`, {
    "gui-dropdown__trigger-wrapper": useButton,
    "gui-dropdown__trigger-wrapper--select": useSelect,
  });
  const buttonClassNames = cx(triggerClassName, {
    "gui-is-active": showContent,
    "gui-dropdown__trigger": !useButton && !useSelect,
    "gui-primary-blue-text": blueOnActive && showContent,
  });

  const buttonTypes = useSelect ? types.concat("outline") : types;

  if (isFunction(children)) {
    return (
      <div className={triggerClassName} ref={triggerDivRef}>
        {children({ toggleShowContent: handleClick })}
      </div>
    );
  }

  if (useButton || useSelect) {
    return (
      <div ref={triggerDivRef} className={wrapperClassNames}>
        <Button
          types={buttonTypes}
          className={buttonClassNames}
          {...rest}
          onClick={handleClick}
          onMouseEnter={handleMouseover}
        >
          {children}
          {useSelect && <Icon name="down" />}
        </Button>
      </div>
    );
  }

  return (
    <button
      type="button"
      {...rest}
      className={buttonClassNames}
      onClick={handleClick}
      onMouseEnter={handleMouseover}
      ref={triggerBtnRef}
    >
      {children}
    </button>
  );
}

DropdownTrigger.defaultProps = {
  useButton: false,
  useSelect: false,
  direction: "top",
  triggerClassName: "",
  onClick: () => {},
  types: [],
  blueOnActive: false,
  useHover: false,
};

export default DropdownTrigger;
