import { React, expect, sinon, jsDomGlobal, shallow, mount } from '../setup';
import Modal from '../../lib/Modal/';

jsDomGlobal();

describe('Modal', () => {
  let sandbox, props;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('renders a <Modal> component', () => {
    expect(false).to.be.true;
  });
});
