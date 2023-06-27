export const createClassesFromTypesList = (types, prefix) =>
  types.reduce((className, type) => `${className} ${prefix}${type}`, '');
