import React from "react";
import logoSVG from "../../assets/logo.svg";

/**
 * @usage
 *
 * <Logo url="http://example.com/myimage.png" alt="Alt Tag" />
 */

export function LogoGC(props: any) {
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
}

LogoGC.defaultProps = {
  url: "",
  alt: "GatherContent Logo",
};

export default LogoGC;
