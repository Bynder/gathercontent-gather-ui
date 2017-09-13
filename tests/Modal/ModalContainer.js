import BootstrapModal from 'react-bootstrap/lib/Modal';
import { React, expect, shallow } from '../setup';
import { Modal } from '../../lib';

describe('Modal Container', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Modal.Container
        testProp="test"
        className="test-class"
      >
        <p>Hello world</p>
      </Modal.Container>,
    );
  });

  it('renders its children', () => {
    expect(wrapper.find('p')).to.have.length(1);
  });

  it('shares props with Bootstrap component', () => {
    expect(wrapper.type()).to.deep.equal(BootstrapModal);
    expect(wrapper.prop('testProp')).to.equal('test');
  });

  it('extends the className prop with the size', () => {
    wrapper.setProps({ size: 'small' });
    expect(wrapper.prop('className')).to.equal('test-class modal--small');

    wrapper.setProps({ size: 'large' });
    expect(wrapper.prop('className')).to.equal('test-class modal--large');

    wrapper.setProps({ size: 'x-large' });
    expect(wrapper.prop('className')).to.equal('test-class modal--x-large');
  });

  it('sets the keyboard prop to true by default', () => {
    expect(wrapper.prop('keyboard')).to.equal(true);
  });
});
