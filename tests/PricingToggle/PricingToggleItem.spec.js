import { React, shallow } from '../setup';
import PricingToggleItem from '../../lib/PricingToggle/PricingToggleItem';

describe('PageInformation', () => {
  let wrapper;
  const onClickSpy = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <PricingToggleItem onClick={onClickSpy}>Hello world</PricingToggleItem>
    );
  });

  test('rendering children', () => {
    expect(wrapper.text()).toEqual('Hello world');
  });

  test('rendering savings', () => {
    const savingsText = 'Save 20%';
    expect(wrapper.find('span')).toHaveLength(0);
    wrapper.setProps({ savings: savingsText });
    expect(wrapper.find('span').text()).toEqual(savingsText);
  });

  test('calling onClick', () => {
    wrapper.simulate('click');
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });

  test('add is-active class', () => {
    expect(wrapper.hasClass('is-active')).toBe(false);
    wrapper.setProps({ isActive: true });
    expect(wrapper.hasClass('is-active')).toBe(true);
  });
});
