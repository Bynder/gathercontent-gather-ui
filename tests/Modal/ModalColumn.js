import { React, shallow } from '../setup';
import { Modal } from '../../lib';

describe('Modal Column', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Modal.Column className="test">
        <p>Hello world</p>
      </Modal.Column>
    );
  });

  test('renders its children', () => {
    expect(wrapper.find('p')).toHaveLength(1);
  });

  test('renders the className prop', () => {
    expect(wrapper.hasClass('test')).toEqual(true);
  });
});
