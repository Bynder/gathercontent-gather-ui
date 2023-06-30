import React, { useState, useEffect, useRef } from "react";
import { node, arrayOf, oneOfType, string, func } from "prop-types";
import cx from "classnames";
import Button from "../Button";

export function Guideline({ children, title, onToggle, className, dir }: any) {
  const [showContent, setShowContent] = useState(true);
  const [style, setStyle] = useState(null);
  const guidelineBody = useRef(null);

  const getHeight = () => {
    if (guidelineBody.current) {
      // @ts-expect-error TS(2339): Property 'getBoundingClientRect' does not exist on... Remove this comment to see the full error message
      const { height } = guidelineBody.current.getBoundingClientRect();
      if (height !== 0) {
        // @ts-expect-error TS(2345): Argument of type '{ maxHeight: any; }' is not assi... Remove this comment to see the full error message
        setStyle({ maxHeight: height });
      }
    }
  };

  const toggleShow = () => {
    const newShowContent = !showContent;
    setShowContent(newShowContent);
    onToggle(newShowContent);
    getHeight();
  };

  useEffect(() => {
    if (children) {
      getHeight();
    }
  }, [guidelineBody.current]);

  const toggleText = showContent ? "Hide guidelines" : "Show guidelines";

  const classNames = cx(
    `guideline bg-blue-98 border border-blue-90 border-solid ${className}`,
    {
      "is-active": showContent,
    }
  );

  const buttonClasses = cx("guideline__button", {
    "ml-auto": dir === "ltr",
    "mr-auto": dir === "rtl ml-0",
  });

  return (
    <div className={classNames} dir={dir}>
      <div className="guideline__head">
        <h2 className="guideline__title">{title}</h2>
        {children && (
          <Button
            types={["link-default", "collapse"]}
            onClick={toggleShow}
            className={buttonClasses}
          >
            {toggleText}
          </Button>
        )}
      </div>

      {children && (
        <div
          className="guideline__body"
          // @ts-expect-error TS(2322): Type 'null' is not assignable to type 'CSSProperti... Remove this comment to see the full error message
          style={showContent ? style : null}
          ref={guidelineBody}
        >
          {children}
        </div>
      )}
    </div>
  );
}

Guideline.propTypes = {
  children: oneOfType([node, arrayOf(node), string]),
  title: string.isRequired,
  onToggle: func,
  className: string,
  dir: string,
};

Guideline.defaultProps = {
  children: "",
  onToggle: () => {},
  className: "",
  dir: "ltr",
};

export default Guideline;
