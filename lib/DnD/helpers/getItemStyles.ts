function getItemStyles(initialOffset: any, currentOffset: any, clientOffset: any) {
  if (!initialOffset || !currentOffset || !clientOffset) {
    return {
      display: 'none'
    };
  }

  const { x, y } = clientOffset;

  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
    WebkitTransform: transform,
    display: 'inline-block'
  };
}

export { getItemStyles };
