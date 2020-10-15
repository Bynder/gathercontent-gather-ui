import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { node, arrayOf, oneOfType, string, func, bool } from 'prop-types';
import cx from 'classnames';
import Button from '../Button';

function Guideline({ children, title, onToggle, className, dir, visible }) {
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

  const buttonClasses = cx('guideline__button', {
    'ml-auto': dir === 'ltr',
    'mr-auto': dir === 'rtl ml-0'
  });

  const animatedStyle = useSpring({
    opacity: visible ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 300 }
  });

  return (
    <animated.div style={animatedStyle} className={classNames} dir={dir}>
      <div className="guideline__head">
        <h2 className="guideline__title">{title}</h2>
        {children && (
          <Button
            types={['link-default', 'collapse']}
            onClick={toggleShow}
            className={buttonClasses}
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
    </animated.div>
  );
}

Guideline.propTypes = {
  children: oneOfType([node, arrayOf(node), string]),
  title: string.isRequired,
  onToggle: func,
  className: string,
  dir: string,
  visible: bool
};

Guideline.defaultProps = {
  children: '',
  onToggle: () => {},
  className: '',
  dir: 'ltr',
  visible: true
};

export default Guideline;
