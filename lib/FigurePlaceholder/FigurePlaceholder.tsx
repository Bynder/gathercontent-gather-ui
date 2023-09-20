import React from "react";
import FigurePlaceholderSVG from "../../assets/figureplaceholder.svg";

function FigurePlaceholder(props: any) {
  return (
    <div className={`figure__placeholder ${props.className}`}>
      <div className={`figure__placeholder__svg ${props.svgClassName}`}>
        <FigurePlaceholderSVG />
      </div>
      {props.children}
    </div>
  );
}

FigurePlaceholder.defaultProps = {
  svgClassName: "",
};

export { FigurePlaceholder };
