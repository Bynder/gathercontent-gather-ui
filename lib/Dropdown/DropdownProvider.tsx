import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import BoundaryClickWatcher from '../BoundaryClickWatcher';

export const DropdownContext = createContext({});

const DropdownProvider = ({
  id,
  onToggle,
  persistShow,
  children,
  onHide,
  autoPosition,
  block,
  className
}) => {
  const [showContent, setShowContent] = useState(false);
  const [bounds, setBounds] = useState({ top: -9999 });

  const dispatchToggle = contentWillShow => {
    const type = contentWillShow || persistShow ? 'ACTIVE' : 'UNACTIVE';

    onToggle({
      type,
      payload: { id }
    });
  };

  const toggleAndSetShowContent = show => {
    dispatchToggle(show);
    setShowContent(persistShow ? true : show);
  };

  const toggleShowContent = (elBounds = null) => {
    dispatchToggle(!showContent);
    setShowContent(persistShow ? true : !showContent);

    if (elBounds) {
      setBounds({
        top: elBounds.top,
        left: elBounds.left,
        right: elBounds.right,
        width: elBounds.width,
        bottom: elBounds.bottom,
        height: elBounds.height
      });
    }
  };

  const sharedState = {
    showContent,
    toggleShowContent,
    setShowContent: toggleAndSetShowContent,
    autoPosition,
    bounds
  };

  const classNames = cx(`dropdown-gc ${className}`, {
    'is-active': showContent,
    'auto-top': autoPosition,
    'dropdown-gc--block': block
  });

  return (
    <DropdownContext.Provider value={sharedState}>
      <BoundaryClickWatcher
        className={classNames}
        outsideClickHandler={() => {
          toggleAndSetShowContent(false);
          onHide();
        }}
        tabIndex={null}
      >
        {typeof children === 'function'
          ? children({
              setShowContent: toggleAndSetShowContent,
              showContent
            })
          : children}
      </BoundaryClickWatcher>
    </DropdownContext.Provider>
  );
};

DropdownProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  id: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  autoPosition: PropTypes.bool.isRequired,
  block: PropTypes.bool.isRequired,
  persistShow: PropTypes.bool.isRequired
};

export default DropdownProvider;
