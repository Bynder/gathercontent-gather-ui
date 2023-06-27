import uuid from 'uuid/v4';

export const generateIdsArray = (count) => [...Array(count)].map(() => uuid());
