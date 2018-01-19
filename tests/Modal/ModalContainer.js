import BootstrapModal from 'react-bootstrap/lib/Modal';
import { React, shallow } from '../setup';
import { Modal } from '../../lib';

describe('Modal Container', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Modal.Container testProp="test" className="test-class">
        <p>Hello world</p>
      </Modal.Container>
    );
  });

  test('renders its children', () => {
    expect(wrapper.find('p')).toHaveLength(1);
  });

  test('shares props with Bootstrap component', () => {
    expect(wrapper.type()).toEqual(BootstrapModal);
    expect(wrapper.prop('testProp')).toEqual('test');
  });

  test('extends the className prop with the size', () => {
    wrapper.setProps({ size: 'small' });
    expect(wrapper.prop('className')).toEqual('test-class modal--small');

    wrapper.setProps({ size: 'large' });
    expect(wrapper.prop('className')).toEqual('test-class modal--large');

    wrapper.setProps({ size: 'x-large' });
    expect(wrapper.prop('className')).toEqual('test-class modal--x-large');
  });

  test('sets the keyboard prop to true by default', () => {
    expect(wrapper.prop('keyboard')).toEqual(true);
  });
});
