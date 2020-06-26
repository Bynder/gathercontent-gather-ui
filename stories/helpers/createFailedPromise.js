function createFailedPromise(timeout = 2000) {
  return async () =>
    new Promise((resolve, reject) => setTimeout(reject, timeout));
}

export { createFailedPromise };
