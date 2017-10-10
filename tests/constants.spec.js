import { expect } from './setup';
import { constants } from '../lib';

describe('Constants', () => {
  it('exports animation constants', () => {
    expect(constants.ANIMATION_TIME_LONG).to.equal(3000);
    expect(constants.ANIMATION_TIME_MICRO).to.equal(300);
  });
});
