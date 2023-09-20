import React, { useContext, useRef, useEffect } from "react";
import cx from "classnames";
import { FinderPanelLayoutContext } from "./FinderPanelLayoutProvider";

function FinderPanelLayoutHeader({ children, className }: any) {
  const { fixed, setHeaderHeight }: any = useContext(FinderPanelLayoutContext);
  const headerRef = useRef();

  useEffect(() => {
    if (headerRef.current) {
      // @ts-expect-error TS(2339): Property 'offsetHeight' does not exist on type 'ne... Remove this comment to see the full error message
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [headerRef]);

  const classes = cx(`finder-panel-layout__left-head ${className}`, {
    "finder-panel-layout__left-head--fixed": fixed,
  });

  return (
    // @ts-expect-error TS(2322): Type 'MutableRefObject<undefined>' is not assignab... Remove this comment to see the full error message
    <div className={classes} ref={headerRef}>
      {children}
    </div>
  );
}

FinderPanelLayoutHeader.defaultProps = {
  className: "",
};

export default FinderPanelLayoutHeader;
