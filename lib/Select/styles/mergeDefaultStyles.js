import { defaultStyles } from './defaultStyles';

function mergeDefaultStyles(stylesProp) {
  const elementsToStyle = [
    ...Object.keys(stylesProp),
    ...Object.keys(defaultStyles)
  ];

  const mergedStyles = elementsToStyle.reduce(
    (accumulatedStyles, elementKey) => {
      const emptyCallback = () => ({});
      const defaultStyleCallback = defaultStyles[elementKey] || emptyCallback;
      const propStyleCallback = stylesProp[elementKey] || emptyCallback;

      return {
        ...accumulatedStyles,
        [elementKey]: (...args) => ({
          ...defaultStyleCallback(...args),
          ...propStyleCallback(...args)
        })
      };
    },
    {}
  );

  return mergedStyles;
}

export { mergeDefaultStyles };
