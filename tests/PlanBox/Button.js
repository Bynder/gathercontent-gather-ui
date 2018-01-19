import { React, shallow } from '../setup';
import PlanBoxButton from '../../lib/PlanBox/Button';
import ButtonWithTooltip from '../../lib/Button/ButtonWithTooltip';

describe('PlanBox/Button', () => {
  const props = {
    disabled: false,
    href: '/some/href',
    buttonText: 'Switch',
    exceedsUsageMessage: 'This exceeds your plan',
    tooltipText: 'This exceeds your plan'
  };
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<PlanBoxButton {...props} />);
  });

  afterEach(() => {
    shallowWrapper = null;
  });

  test('renders an anchor with the correct href', () => {
    expect(shallowWrapper.find('a').prop('href')).toEqual(props.href);
  });

  test('renders a none interactive element if the buttonText is "Current Plan"', () => {
    shallowWrapper.setProps({
      disabled: true,
      buttonText: 'Current Plan'
    });
    expect(shallowWrapper.find('.plan-box__button').type()).toEqual('span');
  });

  test('renders a span with a exceeds usage tooltip message', () => {
    shallowWrapper.setProps({
      disabled: true
    });
    expect(shallowWrapper.find(ButtonWithTooltip)).toHaveLength(1);
    expect(shallowWrapper.find(ButtonWithTooltip).prop('tooltipText')).toEqual(
      'This exceeds your plan'
    );
  });

  test('renders a button with a function that is called when clicked', () => {
    const spy = jest.fn();
    shallowWrapper.setProps({
      clickHandler: spy
    });
    shallowWrapper.find('button').simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
