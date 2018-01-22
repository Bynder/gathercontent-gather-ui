import { Footer } from 'react-bootstrap/lib/Modal';
import { React, shallow } from '../setup';
import { Modal } from '../../lib';

describe('Modal Footer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Modal.Footer testProp="test">
        <p>Hello world</p>
      </Modal.Footer>
    );
  });

  test('renders its children', () => {
    expect(wrapper.find('p')).toHaveLength(1);
  });

  test('shares props with Bootstrap component', () => {
    expect(wrapper.type()).toEqual(Footer);
    expect(wrapper.prop('testProp')).toEqual('test');
  });
});
