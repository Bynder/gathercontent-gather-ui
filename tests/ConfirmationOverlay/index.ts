import { React, shallow } from '../setup';
import {
  ConfirmationOverlay,
  ButtonTertiary,
  ButtonPrimaryDanger
} from '../../lib';

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
    const cancelButton = wrapper.find(ButtonTertiary);
    const submitButton = wrapper.find(ButtonPrimaryDanger);

    cancelButton.prop('onClick')();
    expect(cancelSpy).toHaveBeenCalledTimes(1);
    expect(submitButton.render().text()).toEqual('dooo ittttt');
  });
});
