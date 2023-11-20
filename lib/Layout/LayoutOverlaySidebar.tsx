import React, { ReactElement } from "react";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'd3-e... Remove this comment to see the full error message
import * as easings from "d3-ease";
import cx from "classnames";
import { useTransition, animated } from "react-spring";

export function LayoutOverlaySidebar({
  children,
  isOpen,
  direction,
  width,
  className,
  onTransitionEnd,
}: any) {
  const classNames = cx(
    "gui-layout-overlay-sidebar",
    {
      "border-l border-r-0": direction === "right",
      "border-r border-l-0": direction === "left",
    },
    "border-solid border-neutral-90 border-b-0 border-t-0 h-full bg-white shadow",
    className
  );

  const transitions = useTransition(isOpen, null, {
    from: {
      position: "absolute",
      width,
      [direction]: `-${width}`,
    },
    enter: {
      [direction]: "0",
    },
    leave: {
      [direction]: `-${width}`,
    },
    onDestroyed: onTransitionEnd,
    config: {
      easing: easings.easeCubic,
      duration: 300,
    },
  });

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.aside className={classNames} key={key} style={props}>
              {children}
            </animated.aside>
          )
      )}
    </>
  );
}

LayoutOverlaySidebar.defaultProps = {
  isOpen: false,
  width: "25%",
  direction: "right",
};
