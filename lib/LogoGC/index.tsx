import React from "react";
import logoGCSVG from "../../assets/logogc.svg";

/**
 * @usage
 *
 * <Logo url="http://example.com/myimage.png" alt="Alt Tag" />
 */

export function LogoGC(props: any) {
  const LogoPath = props.url || logoGCSVG;
  const image =
    typeof LogoPath === "string" ? (
      <img src={props.url} alt={props.alt} className="gui-logo__image" />
    ) : (
      <span className="gui-logo__image">
        <LogoPath />
      </span>
    );
  return <span className="gui-logo">{image}</span>;
}

LogoGC.defaultProps = {
  url: "",
  alt: "GatherContent Logo",
};

export default LogoGC;
