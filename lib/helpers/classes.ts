export const createClassesFromTypesList = (types: any, prefix: any) =>
  types.reduce((className: any, type: any) => `${className} ${prefix}${type}`, '');
