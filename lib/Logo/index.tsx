import React from "react";
import { string, func, oneOfType } from "prop-types";
// @ts-expect-error TS(2307): Cannot find module '../../assets/logo.svg' or its ... Remove this comment to see the full error message
import logoSVG from "../../assets/logo.svg";

/**
 * @usage
 *
 * <Logo url="http://example.com/myimage.png" alt="Alt Tag" />
 */

export const Logo = (props: any) => {
  const LogoPath = props.url || logoSVG;
  const image =
    typeof LogoPath === "string" ? (
      <img src={props.url} alt={props.alt} className="logo__image" />
    ) : (
      <span className="logo__image">
        <LogoPath />
      </span>
    );
  return <span className="logo">{image}</span>;
};

Logo.defaultProps = {
  url: "",
  alt: "GatherContent Logo",
};

Logo.propTypes = {
  url: oneOfType([string, func]),
  alt: string,
};

export default Logo;
