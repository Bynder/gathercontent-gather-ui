function createDelayedPromise(timeout = 2000) {
  return async () => new Promise((resolve) => setTimeout(resolve, timeout));
}

export { createDelayedPromise };
