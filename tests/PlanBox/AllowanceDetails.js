import { React, expect, jsDomGlobal, shallow, mount } from '../setup';
import PlanBoxAllowanceDetails from '../../lib/PlanBox/AllowanceDetails';
jsDomGlobal();

describe('PlanBox/AllowanceDetails', () => {
  const props = {
    iconElement: <img />,
    plan: {
      name: 'studio',
    },
  };
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<PlanBoxAllowanceDetails {...props}/>);
  });

  afterEach(() => {
    shallowWrapper = null;
  });

  it('renders 4 allowance detail list items', () => {
    expect(shallowWrapper.find('li')).to.have.length(4);
  });

  it('renders 4 icons', () => {
    const mountedWrapper = mount(<PlanBoxAllowanceDetails {...props} />);
    expect(mountedWrapper.find('img')).to.have.length(4);
  });

  it('does not render any icons', () => {
    shallowWrapper.setProps({iconElement: null});
    expect(shallowWrapper.find('img')).to.have.length(0);
  });
});