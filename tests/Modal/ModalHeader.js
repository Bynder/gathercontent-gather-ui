import { Header } from 'react-bootstrap/lib/Modal';
import { React, shallow } from '../setup';
import { Modal } from '../../lib';

describe('Modal Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Modal.Header testProp="test">
        <p>Hello world</p>
      </Modal.Header>
    );
  });

  test('renders its children', () => {
    expect(wrapper.find('p')).toHaveLength(1);
  });

  test('shares props with Bootstrap component', () => {
    expect(wrapper.type()).toEqual(Header);
    expect(wrapper.prop('testProp')).toEqual('test');
  });

  test('sets the closeButton prop to true by default', () => {
    expect(wrapper.prop('closeButton')).toEqual(true);
  });
});
