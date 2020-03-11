import { React, shallow } from '../setup';
import DismissiblePrompt from '../../lib/DismissiblePrompt';
import Button from '../../lib/Button';

describe('DismissiblePrompt', () => {
  let wrapper;
  const onDismissSpy = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <DismissiblePrompt onDismiss={onDismissSpy}>
        Hello world
      </DismissiblePrompt>
    );
  });

  test('renders children', () => {
    expect(wrapper.text()).toEqual('Hello world<Button />');
  });

  test('it fires the onDismiss prop when clicking the close button', () => {
    wrapper.find(Button).simulate('click');
    expect(onDismissSpy).toHaveBeenCalled();
  });
});
