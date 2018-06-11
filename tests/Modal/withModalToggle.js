import { React, shallow } from '../setup';
import { withModalTrigger, Button, Modal } from '../../lib';

describe('Modal Body', () => {
  let wrapper;
  let Trigger;

  beforeEach(() => {
    Trigger = withModalTrigger({ children: 'test', className: 'test-class' });
    wrapper = shallow(
      <Trigger>
        <Modal.Container>test</Modal.Container>
      </Trigger>
    );
  });

  afterEach(() => {});

  test('renders the trigger Button component (and props)', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Button).prop('className')).toEqual('test-class');
  });

  test('renders its children', () => {
    expect(wrapper.find(Modal.Container)).toHaveLength(1);
  });

  test('updates the show state to its children', () => {
    wrapper.find(Button).prop('clickHandler')();
    wrapper.update();
    expect(wrapper.state('show')).toEqual(true);
    expect(wrapper.find(Modal.Container).prop('show')).toEqual(true);
  });

  test('passes onHide to its children', () => {
    wrapper.setState({ show: true });
    wrapper.find(Modal.Container).prop('onHide')();
    expect(wrapper.state('show')).toEqual(false);
  });
});
