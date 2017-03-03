import { React, expect, sinon, jsDomGlobal, shallow } from '../setup';
import ConfirmationModal from '../../lib/ConfirmationModal/';
jsDomGlobal();

describe('Confirmation Modal', () => {
  let sandbox, props;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('has no tests 🙄', () => {
    let shame = true;

    expect(shame).to.equal(false);
  });
});
