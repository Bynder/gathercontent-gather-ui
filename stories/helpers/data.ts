// @ts-expect-error TS(7016): Could not find a declaration file for module 'uuid... Remove this comment to see the full error message
import uuid from 'uuid/v4';

export const generateIdsArray = (count: any) => [...Array(count)].map(() => uuid());
