import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import BoundaryClickWatcher from '../BoundaryClickWatcher';

export const DropdownContext = createContext({});

function DropdownProvider({
  id,
  onToggle,
  persistShow,
  children,
  onHide,
  autoPosition,
  block,
  className
}: any) {
  const [showContent, setShowContent] = useState(false);
  const [bounds, setBounds] = useState({ top: -9999 });

  const dispatchToggle = (contentWillShow: any) => {
    const type = contentWillShow || persistShow ? 'ACTIVE' : 'UNACTIVE';

    onToggle({
      type,
      payload: { id }
    });
  };

  const toggleAndSetShowContent = (show: any) => {
    dispatchToggle(show);
    setShowContent(persistShow ? true : show);
  };

  const toggleShowContent = (elBounds = null) => {
    dispatchToggle(!showContent);
    setShowContent(persistShow ? true : !showContent);

    if (elBounds) {
      setBounds({
        // @ts-expect-error TS(2339): Property 'top' does not exist on type 'never'.
        top: elBounds.top,
        // @ts-expect-error TS(2345): Argument of type '{ top: any; left: any; right: an... Remove this comment to see the full error message
        left: elBounds.left,
        // @ts-expect-error TS(2339): Property 'right' does not exist on type 'never'.
        right: elBounds.right,
        // @ts-expect-error TS(2339): Property 'width' does not exist on type 'never'.
        width: elBounds.width,
        // @ts-expect-error TS(2339): Property 'bottom' does not exist on type 'never'.
        bottom: elBounds.bottom,
        // @ts-expect-error TS(2339): Property 'height' does not exist on type 'never'.
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
}

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
