import { React, expect, sinon, jsDomGlobal, shallow, mount } from '../setup';
import { withModalTrigger, Button, Modal } from '../../lib';
jsDomGlobal();

describe('Modal Body', () => {
  let wrapper;
  let Trigger;

  beforeEach(() => {
    Trigger = withModalTrigger({ children: 'test', className: 'test-class' });
    wrapper = shallow(
      <Trigger>
        <Modal.Container>test</Modal.Container>
      </Trigger>,
    );
  });

  afterEach(() => {});

  it('renders the trigger Button component (and props)', () => {
    expect(wrapper.find(Button)).to.have.length(1);
    expect(wrapper.find(Button).prop('className')).to.equal('test-class');
  });

  it('renders its children', () => {
    expect(wrapper.find(Modal.Container)).to.have.length(1);
  });

  it('updates the show state to its children', () => {
    wrapper.find(Button).prop('clickHandler')();
    expect(wrapper.state('show')).to.equal(true);
    expect(wrapper.find(Modal.Container).prop('show')).to.equal(true);
  });

  it('passes onHide to its children', () => {
    wrapper.setState({ show: true });
    wrapper.find(Modal.Container).prop('onHide')();
    expect(wrapper.state('show')).to.equal(false);
  });
});
