import React, { Fragment } from "react";
import { useSpring, animated } from "react-spring";

export function TabsScrollShadow({ scrollPosition }: any) {
  const shouldTopShadowBeVisible =
    scrollPosition === "bottom" || scrollPosition === "middle";
  const shouldBottomShadowBeVisible =
    scrollPosition === "top" || scrollPosition === "middle";

  const [propsTop, setTop] = useSpring(() => ({
    opacity: shouldTopShadowBeVisible ? 1 : 0,
  }));
  const [propsBottom, setBottom] = useSpring(() => ({
    opacity: shouldBottomShadowBeVisible ? 1 : 0,
  }));

  setTop({
    opacity: shouldTopShadowBeVisible ? 1 : 0,
  });

  setBottom({
    opacity: shouldBottomShadowBeVisible ? 1 : 0,
  });

  const initialClassName = "absolute w-full h-4 -mr-4 pointer-events-none z-20";

  return (
    <>
      <animated.span
        style={propsTop}
        className={`${initialClassName} top-0 shadow-top-inset`}
      />
      <animated.span
        style={propsBottom}
        className={`${initialClassName} bottom-0 shadow-bottom-inset`}
      />
    </>
  );
}
