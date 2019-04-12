import { React, shallow } from '../setup';
import PricingPlan from '../../lib/PricingPlan/PricingPlan';

describe('PricingPlan', () => {
  let wrapper;

  const props = {
    title: 'title',
    price: '$300',
    priceDesc: 'price description',
    smallPrint: 'small print',
    upgradeButton: <p>Hello world</p>,
    savings: 'savings'
  };

  beforeEach(() => {
    wrapper = shallow(<PricingPlan {...props}>Hello world</PricingPlan>);
  });

  test('renders content props', () => {
    expect(wrapper.find('.pricing__plan-price').text()).toEqual(props.price);
    expect(wrapper.find('.pricing__plan-description').text()).toEqual(
      props.priceDesc
    );
    expect(wrapper.find('.pricing__plan-savings').text()).toEqual(
      props.savings
    );
    expect(wrapper.find('.pricing__plan-small-print').text()).toEqual(
      props.smallPrint
    );
    expect(wrapper.find('.pricing__plan-body').text()).toEqual('Hello world');
    expect(wrapper.find('p')).toHaveLength(2);
  });
});
