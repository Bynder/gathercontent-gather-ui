import { React, shallow } from '../setup';
import { ConfirmationOverlay, Button } from '../../lib';

describe('Confirmation Overlay', () => {
  let wrapper;

  const cancelSpy = jest.fn();
  const confirmSpy = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <ConfirmationOverlay
        cancel={cancelSpy}
        confirm={confirmSpy}
        confirmationText="dooo ittttt"
        show
      />
    );
  });

  afterEach(() => {
    cancelSpy.mockReset();
    confirmSpy.mockReset();
  });

  test('adds a show modifier', () => {
    expect(wrapper.hasClass('confirmation-overlay--show')).toBe(true);
    wrapper.setProps({ show: false });
    expect(wrapper.hasClass('confirmation-overlay--show')).toBe(false);
  });

  test('renders two Buttons', () => {
    const buttons = wrapper.find(Button);
    expect(buttons).toHaveLength(2);
    buttons.first().prop('clickHandler')();
    expect(cancelSpy).toHaveBeenCalledTimes(1);
    buttons.last().prop('clickHandler')();
    expect(confirmSpy).toHaveBeenCalledTimes(1);
    expect(
      buttons
        .last()
        .render()
        .text()
    ).toEqual('dooo ittttt');
  });
});
