import { Footer } from 'react-bootstrap/lib/Modal';
import { React, expect, jsDomGlobal, shallow } from '../setup';
import { Modal } from '../../lib';
jsDomGlobal();

describe('Modal Footer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Modal.Footer testProp="test">
        <p>Hello world</p>
      </Modal.Footer>,
    );
  });

  it('renders its children', () => {
    expect(wrapper.find('p')).to.have.length(1);
  });

  it('shares props with Bootstrap component', () => {
    expect(wrapper.type()).to.deep.equal(Footer);
    expect(wrapper.prop('testProp')).to.equal('test');
  });
});
