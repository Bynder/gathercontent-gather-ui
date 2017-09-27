import { Tooltip, OverlayTrigger } from 'react-bootstrap/lib';
import { React, expect, sinon, jsDomGlobal, mount } from '../setup';
import { Button, ButtonWithTooltip } from '../../lib';

describe('ButtonWithTooltip', () => {
  let sandbox;
  let wrapper;

  jsDomGlobal();

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    wrapper = mount(
      <ButtonWithTooltip clickHandler={() => {}} tooltipText="tooltip text">
        Botão
      </ButtonWithTooltip>
    );
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should render a Button component', () => {
    expect(wrapper.find(Button)).to.have.length(1);
  });

  it('should render a OverlayTrigger component', () => {
    expect(wrapper.find(OverlayTrigger)).to.have.length(1);
  });

  it('should pass its children to the Button component', () => {
    const sharedChildren = wrapper.find(Button).prop('children');
    expect(sharedChildren[0]).to.equal(wrapper.prop('children'));
  });

  it('should set the overlay as a Tooltip component', () => {
    const tooltip = mount(wrapper.find(OverlayTrigger).prop('overlay'));
    expect(tooltip.instance()).to.be.instanceOf(Tooltip);
    expect(tooltip.text()).to.equal('tooltip text');
  });

  it('should set the tooltip size, text and position', () => {
    wrapper.setProps({
      tooltipPosition: 'top',
      tooltipSize: 'large',
      tooltipText: 'tooltip text'
    });
    const tooltip = mount(wrapper.find(OverlayTrigger).prop('overlay'));

    expect(wrapper.find(OverlayTrigger).prop('placement')).to.equal('top');
    expect(tooltip.find('.tooltip--large')).to.have.length(1);
    expect(tooltip.find('.tooltip--large').prop('children')).to.equal(
      'tooltip text'
    );
  });

  it('should render tooltip helper HTML element', () => {
    expect(wrapper.find('.button--has-tooltip')).to.have.length(1);
  });
});
