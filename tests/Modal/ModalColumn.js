import { React, expect, shallow } from '../setup';
import { Modal } from '../../lib';

describe('Modal Column', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Modal.Column className="test">
        <p>Hello world</p>
      </Modal.Column>,
    );
  });

  it('renders its children', () => {
    expect(wrapper.find('p')).to.have.length(1);
  });

  it('renders the className prop', () => {
    expect(wrapper.hasClass('test')).to.equal(true);
  });
});
