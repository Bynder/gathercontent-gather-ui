import { React, expect, sinon, shallow } from '../setup';
import PlanBoxButton from '../../lib/PlanBox/Button';
import ButtonWithTooltip from '../../lib/Button/ButtonWithTooltip';

describe('PlanBox/Button', () => {
  const props = {
    disabled: false,
    href: '/some/href',
    buttonText: 'Switch',
    exceedsUsageMessage: 'This exceeds your plan',
    tooltipText: "This exceeds your plan",
  };
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<PlanBoxButton {...props} />);
  });

  afterEach(() => {
    shallowWrapper = null;
  });

  it('renders an anchor with the correct href', () => {
    expect(shallowWrapper.find('a').prop('href')).to.equal(props.href);
  });

  it('renders a none interactive element if the buttonText is "Current Plan"', () => {
    shallowWrapper.setProps({
      disabled: true,
      buttonText: 'Current Plan',
    });
    expect(shallowWrapper.find('.plan-box__button').type()).to.equal('span');
  });

  it('renders a span with a exceeds usage tooltip message', () => {
    shallowWrapper.setProps({
      disabled: true,
    });
    expect(shallowWrapper.find(ButtonWithTooltip)).to.have.length(1);
    console.log(shallowWrapper.find(ButtonWithTooltip).props());
    expect(shallowWrapper.find(ButtonWithTooltip).prop('tooltipText')).to.equal('This exceeds your plan');
  });

  it('renders a button with a function that is called when clicked', () => {
    const spy = sinon.spy();
    shallowWrapper.setProps({
      clickHandler: spy,
    });
    shallowWrapper.find('button').simulate('click');
    expect(spy.calledOnce).to.equal(true);
  });
});