import React from "react";
import cx from "classnames";

export function SectionFeature({
  children,
  extendTop,
  enhanceIntro,
  className,
}: any) {
  const classNames = cx(`gui-section-feature ${className}`, {
    "gui-section-feature--extend-top": extendTop,
    "gui-section-feature--enhance-intro": enhanceIntro,
  });

  return <div className={classNames}>{children}</div>;
}

SectionFeature.defaultProps = {
  extendTop: false,
  enhanceIntro: false,
  className: "",
};

export default SectionFeature;
