import React, { useState, useEffect, useRef } from 'react';
import { node, arrayOf, oneOfType, string, func } from 'prop-types';
import cx from 'classnames';
import Button from '../Button';

function Guideline({ children, title, onToggle, className }) {
  const [showContent, setShowContent] = useState(true);
  const [style, setStyle] = useState(null);
  const guidelineBody = useRef(null);

  const getHeight = () => {
    if (guidelineBody.current) {
      const { height } = guidelineBody.current.getBoundingClientRect();
      if (height !== 0) {
        setStyle({ maxHeight: height });
      }
    }
  };

  const toggleShow = () => {
    const newShowContent = !showContent;
    setShowContent(newShowContent);
    onToggle(newShowContent);
    getHeight();
  };

  useEffect(() => {
    if (children) {
      getHeight();
    }
  }, [guidelineBody.current]);

  const toggleText = showContent ? 'Hide guidelines' : 'Show guidelines';

  const classNames = cx(
    `guideline bg-blue-98 border border-blue-90 border-solid ${className}`,
    {
      'is-active': showContent
    }
  );

  return (
    <div className={classNames}>
      <div className="guideline__head">
        <h2 className="guideline__title">{title}</h2>
        {children && (
          <Button
            types={['link-default', 'collapse']}
            onClick={toggleShow}
            className="guideline__button"
          >
            {toggleText}
          </Button>
        )}
      </div>

      {children && (
        <div
          className="guideline__body"
          style={showContent ? style : null}
          ref={guidelineBody}
        >
          {children}
        </div>
      )}
    </div>
  );
}

Guideline.propTypes = {
  children: oneOfType([node, arrayOf(node), string]),
  title: string.isRequired,
  onToggle: func,
  className: string
};

Guideline.defaultProps = {
  children: '',
  onToggle: () => {},
  className: ''
};

export default Guideline;
