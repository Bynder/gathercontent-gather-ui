import { Body } from 'react-bootstrap/lib/Modal';
import { React, shallow } from '../setup';
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

  test('renders its children', () => {
    expect(wrapper.find('p')).toHaveLength(1);
  });

  test('shares props with Bootstrap component', () => {
    expect(wrapper.type()).toEqual(Body);
    expect(wrapper.prop('testProp')).toEqual('test');
  });
});
