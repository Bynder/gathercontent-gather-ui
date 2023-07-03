import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export const SectionFeature = ({
  children,
  extendTop,
  enhanceIntro,
  className,
}: any) => {
  const classNames = cx(`section-feature ${className}`, {
    "section-feature--extend-top": extendTop,
    "section-feature--enhance-intro": enhanceIntro,
  });

  return <div className={classNames}>{children}</div>;
};

SectionFeature.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    PropTypes.shape(),
  ]).isRequired,
  extendTop: PropTypes.bool,
  enhanceIntro: PropTypes.bool,
  className: PropTypes.string,
};

SectionFeature.defaultProps = {
  extendTop: false,
  enhanceIntro: false,
  className: "",
};

export default SectionFeature;
