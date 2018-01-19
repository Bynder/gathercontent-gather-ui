import { React, shallow, mount } from '../setup';
import PlanBoxAllowanceDetails from '../../lib/PlanBox/AllowanceDetails';

describe('PlanBox/AllowanceDetails', () => {
  const props = {
    iconElement: <img alt="alt text" />,
    plan: {
      name: 'studio'
    }
  };
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<PlanBoxAllowanceDetails {...props} />);
  });

  afterEach(() => {
    shallowWrapper = null;
  });

  test('renders 4 allowance detail list items', () => {
    expect(shallowWrapper.find('li')).toHaveLength(4);
  });

  test('renders 4 icons', () => {
    const mountedWrapper = mount(<PlanBoxAllowanceDetails {...props} />);
    expect(mountedWrapper.find('img')).toHaveLength(4);
  });

  test('does not render any icons', () => {
    shallowWrapper.setProps({ iconElement: null });
    expect(shallowWrapper.find('img')).toHaveLength(0);
  });
});
