import * as constants from '../lib/constants';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Constants', () => {
  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('exports animation constants', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(constants.ANIMATION_TIME_LONG).toEqual(3000);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(constants.ANIMATION_TIME_MICRO).toEqual(300);
  });
});
