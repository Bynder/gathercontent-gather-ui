import { React, shallow } from '../setup';
import { Button, ProgressButton } from '../../lib';

describe('ProgressButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ProgressButton clickHandler={() => {}}>Botão</ProgressButton>
    );
  });

  test('should render a button component', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  test('clicking the button should set the state and render the icon', () => {
    expect(wrapper.state().showSpinner).toBe(false);
    expect(wrapper.find('.progress-button__icon')).toHaveLength(0);
    wrapper.instance().clickHandler();
    wrapper.update();
    expect(wrapper.state().showSpinner).toBe(true);
    expect(wrapper.find('.progress-button__icon')).toHaveLength(1);
  });

  test('if useShowSpinnerProp is true the show spinner prop should detirmine the spinning state', () => {
    wrapper.setProps({ useShowSpinnerProp: true });
    expect(wrapper.state().showSpinner).toBe(false);
    expect(wrapper.find('.progress-button__icon')).toHaveLength(0);
    wrapper.setProps({ showSpinner: true });
    expect(wrapper.state().showSpinner).toBe(false);
    expect(wrapper.find('.progress-button__icon')).toHaveLength(1);
  });
});
