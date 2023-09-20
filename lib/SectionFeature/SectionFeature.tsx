import React from "react";
import cx from "classnames";

export function SectionFeature({
  children,
  extendTop,
  enhanceIntro,
  className,
}: any) {
  const classNames = cx(`section-feature ${className}`, {
    "section-feature--extend-top": extendTop,
    "section-feature--enhance-intro": enhanceIntro,
  });

  return <div className={classNames}>{children}</div>;
}

SectionFeature.defaultProps = {
  extendTop: false,
  enhanceIntro: false,
  className: "",
};

export default SectionFeature;
