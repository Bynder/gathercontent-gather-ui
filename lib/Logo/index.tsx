import React from "react";
import logoSVG from "../../assets/logo.svg";

/**
 * @usage
 *
 * <Logo url="http://example.com/myimage.png" alt="Alt Tag" />
 */

export function Logo(props: any) {
  const LogoPath = props.url || logoSVG;
  console.log(LogoPath);
  const image =
    typeof LogoPath === "string" ? (
      <img src={props.url} alt={props.alt} className="logo__image" />
    ) : (
      <span className="logo__image bynder-logo">
        <LogoPath />
      </span>
    );
  return <span className="logo">{image}</span>;
}

Logo.defaultProps = {
  url: "",
  alt: "GatherContent Logo",
};

export default Logo;
