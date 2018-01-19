import { React, shallow, mount } from '../setup';
import PlanBox from '../../lib/PlanBox';
import PlanBoxButton from '../../lib/PlanBox/Button';

describe('PlanBox', () => {
  const props = {
    name: 'Studio',
    description: 'This is a plan description',
    upgradeUrl: 'test/url/here',
    buttonText: 'Switch',
    disabled: false,
    recommended: false,
    tooltipText: 'tooltip text'
  };
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(
      <PlanBox {...props}>
        <div className="child-node">test</div>
      </PlanBox>
    );
  });

  test('renders the correct plan name and description', () => {
    expect(shallowWrapper.find('.plan-box__title').text()).toEqual(props.name);
    expect(shallowWrapper.find('.plan-box__description').text()).toEqual(
      props.description
    );
  });

  test('renders children', () => {
    expect(shallowWrapper.find('.child-node')).toHaveLength(1);
  });

  test('renders a PlanBoxButton UI component', () => {
    expect(shallowWrapper.find(PlanBoxButton)).toHaveLength(1);
  });

  test('passes the correct props to the PlanBoxButton UI component', () => {
    const mountedWrapper = mount(
      <PlanBox {...props}>Children content</PlanBox>
    );
    const planBoxButtonComponent = mountedWrapper.find(PlanBoxButton);
    expect(planBoxButtonComponent.prop('recommended')).toEqual(false);
    expect(planBoxButtonComponent.prop('href')).toEqual('test/url/here');
    expect(planBoxButtonComponent.prop('buttonText')).toEqual('Switch');
    expect(planBoxButtonComponent.prop('disabled')).toEqual(false);
  });

  test('has a disabled state class', () => {
    shallowWrapper.setProps({ disabled: true });
    expect(shallowWrapper.hasClass('is-disabled')).toEqual(true);
  });

  test('has a recommended state class', () => {
    shallowWrapper.setProps({ recommended: true });
    expect(shallowWrapper.hasClass('plan-box--recommended')).toEqual(true);
  });
});
