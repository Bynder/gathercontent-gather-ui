import { React, expect, shallow } from '../setup';
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

  it('renders the correct text', () => {
    expect(shallowWrapper.text()).to.equal('$200/mo');
  });

  it('includes the additional billing information', () => {
    shallowWrapper.setProps({ priceType: 'priceYearly' });
    expect(shallowWrapper.text().includes('Billed annually')).to.equal(true);
  });
});
