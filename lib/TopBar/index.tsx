import React, {
  HTMLAttributes,
  ReactNode,
  useEffect,
  useState,
  useRef,
} from "react";
import cx from "classnames";
import { Grid, Row } from "lib";

interface Props extends HTMLAttributes<HTMLDivElement> {
  fixed?: boolean;
  scrollToFixed?: boolean;
  useDarkTheme?: boolean;
  notification?: ReactNode;
  shadow?: boolean;
  useLightGreyTheme?: boolean;
}

export function TopBar({
  className = "",
  children,
  fixed,
  scrollToFixed,
  useDarkTheme,
  notification,
  shadow,
  useLightGreyTheme,
}: Props) {
  const [initialPostion, setInitialPosition] = useState(0);
  const [scrollFixed, setScrollFixed] = useState(false);

  const topbarRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleScroll = () => {
    const topBarPosition = topbarRef.current.getBoundingClientRect().top;
    if (topBarPosition <= 0 && !scrollFixed) {
      setScrollFixed(true);
    }
    if (window.pageYOffset < initialPostion && scrollFixed) {
      setScrollFixed(false);
    }
  };

  useEffect(() => {
    if (scrollToFixed && topbarRef.current) {
      window.addEventListener("scroll", handleScroll);
      setInitialPosition(
        topbarRef.current.getBoundingClientRect().top + window.pageYOffset
      );
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [topbarRef.current]);

  const wrapperClasses = cx("top-bar__wrapper", {
    shadow,
    "top-bar__wrapper--fixed": fixed || scrollFixed,
  });

  const classes = cx(`top-bar p-0 ${className}`, {
    "top-bar--dark": useDarkTheme,
    "top-bar-light-grey": useLightGreyTheme,
    "top-bar--has-notification": notification,
  });

  return (
    <Grid className={classes} role="banner">
      <div className={wrapperClasses} ref={topbarRef}>
        {notification}
        <Row className="top-bar__inner">{children}</Row>
      </div>
    </Grid>
  );
}

TopBar.defaultProps = {
  fixed: false,
  scrollToFixed: false,
  useDarkTheme: false,
  notification: null,
  shadow: true,
  useLightGreyTheme: false,
};

export default TopBar;
