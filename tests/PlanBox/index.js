import { React, expect, jsDomGlobal, shallow, mount } from '../setup';
import PlanBox from '../../lib/PlanBox';
import PlanBoxButton from '../../lib/PlanBox/Button';
jsDomGlobal();

describe('PlanBox', () => {
  const props = {
    name: 'Studio',
    description: 'This is a plan description',
    upgradeUrl: 'test/url/here',
    buttonText: 'Switch',
    disabled: false,
    recommended: false,
  };
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(
      <PlanBox {...props}>
        <div className="child-node"></div>
      </PlanBox>
    );
  });

  it('renders the correct plan name and description', () => {
    expect(shallowWrapper.find('.plan-box__title').text()).to.equal(props.name);
    expect(shallowWrapper.find('.plan-box__description').text()).to.equal(props.description);
  });

  it('renders children', () => {
    expect(shallowWrapper.find('.child-node')).to.have.length(1);
  });

  it('renders a PlanBoxButton UI component', () => {
    expect(shallowWrapper.find(PlanBoxButton)).to.have.length(1);
  });

  it('passes the correct props to the PlanBoxButton UI component', () => {
    const mountedWrapper = mount(<PlanBox {...props} />);
    const planBoxButtonComponent = mountedWrapper.find(PlanBoxButton);
    expect(planBoxButtonComponent.prop('recommended')).to.equal(false);
    expect(planBoxButtonComponent.prop('href')).to.equal('test/url/here');
    expect(planBoxButtonComponent.prop('buttonText')).to.equal('Switch');
    expect(planBoxButtonComponent.prop('disabled')).to.equal(false);
  });

  it('has a disabled state class', () => {
    shallowWrapper.setProps({disabled: true});
    expect(shallowWrapper.hasClass('is-disabled')).to.equal(true);
  });

  it('has a recommended state class', () => {
    shallowWrapper.setProps({recommended: true});
    expect(shallowWrapper.hasClass('plan-box--recommended')).to.equal(true);
  });
});