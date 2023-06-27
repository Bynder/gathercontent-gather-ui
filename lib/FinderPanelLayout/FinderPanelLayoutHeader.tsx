import React, { useContext, useRef, useEffect } from 'react';
import { node, string } from 'prop-types';
import cx from 'classnames';
import { FinderPanelLayoutContext } from './FinderPanelLayoutProvider';

const FinderPanelLayoutHeader = ({ children, className }) => {
  const { fixed, setHeaderHeight } = useContext(FinderPanelLayoutContext);
  const headerRef = useRef();

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [headerRef]);

  const classes = cx(`finder-panel-layout__left-head ${className}`, {
    'finder-panel-layout__left-head--fixed': fixed
  });

  return (
    <div className={classes} ref={headerRef}>
      {children}
    </div>
  );
};

FinderPanelLayoutHeader.propTypes = {
  children: node.isRequired,
  className: string
};

FinderPanelLayoutHeader.defaultProps = {
  className: ''
};

export default FinderPanelLayoutHeader;
