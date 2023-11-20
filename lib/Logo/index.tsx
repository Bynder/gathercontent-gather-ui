import React from "react";
import logoSVG from "../../assets/logo.svg";

/**
 * @usage
 *
 * <Logo url="http://example.com/myimage.png" alt="Alt Tag" />
 */

export function Logo(props: any) {
  const LogoPath = props.url || logoSVG;
  const image =
    typeof LogoPath === "string" ? (
      <img src={props.url} alt={props.alt} className="gui-logo__image" />
    ) : (
      <span className="logo__image bynder-logo">
        <LogoPath />
      </span>
    );
  return <span className="gui-logo">{image}</span>;
}

Logo.defaultProps = {
  url: "",
  alt: "GatherContent Logo",
};

export default Logo;
