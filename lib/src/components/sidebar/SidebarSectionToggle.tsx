import * as React from "react";
import { ButtonSecondary } from "lib";
import { SidebarSectionContext } from "./SidebarSection";

export function SidebarSectionToggle({
  showText,
  hideText,
  children,
  className = "",
  ...rest
}: any) {
  const { showMore, setShowMore }: any = React.useContext(
    SidebarSectionContext
  );

  return (
    <ButtonSecondary
      className={`gui-sidebar-section-toggle whitespace-nowrap ${className}`}
      size={ButtonSecondary.sizes.sm}
      onClick={() => setShowMore(!showMore)}
      {...rest}
    >
      {showMore ? hideText : showText}
    </ButtonSecondary>
  );
}

SidebarSectionToggle.defaultProps = {
  showText: "Show",
  hideText: "Hide",
};
