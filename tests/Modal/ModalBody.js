import { Body } from 'react-bootstrap/lib/Modal';
import { React, expect, shallow } from '../setup';
import { Modal } from '../../lib';

describe('Modal Body', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Modal.Body testProp="test">
        <p>Hello world</p>
      </Modal.Body>
    );
  });

  it('renders its children', () => {
    expect(wrapper.find('p')).to.have.length(1);
  });

  it('shares props with Bootstrap component', () => {
    expect(wrapper.type()).to.deep.equal(Body);
    expect(wrapper.prop('testProp')).to.equal('test');
  });
});
