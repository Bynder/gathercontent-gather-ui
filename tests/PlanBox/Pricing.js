import { React, shallow } from '../setup';
import PlanBoxPricing from '../../lib/PlanBox/Pricing';

describe('PlanBox/Pricing', () => {
  const props = {
    price: 200,
    priceIn: '/mo',
    priceType: 'priceMonthly'
  };
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<PlanBoxPricing {...props} />);
  });

  afterEach(() => {
    shallowWrapper = null;
  });

  test('renders the correct text', () => {
    expect(shallowWrapper.text()).toEqual('$200/mo');
  });

  test('includes the additional billing information', () => {
    shallowWrapper.setProps({ priceType: 'priceYearly' });
    expect(shallowWrapper.text().includes('Billed annually')).toEqual(true);
  });
});
