import { Tooltip, OverlayTrigger } from 'react-bootstrap/lib';
import { React, mount } from '../setup';
import { Button, ButtonWithTooltip } from '../../lib';

describe('ButtonWithTooltip', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ButtonWithTooltip clickHandler={() => {}} tooltipText="tooltip text">
        Botão
      </ButtonWithTooltip>
    );
  });

  test('should render a Button component', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  test('should render a OverlayTrigger component', () => {
    expect(wrapper.find(OverlayTrigger)).toHaveLength(1);
  });

  test('should pass its children to the Button component', () => {
    const sharedChildren = wrapper.find(Button).prop('children');
    expect(sharedChildren[0]).toEqual(wrapper.prop('children'));
  });

  test('should set the overlay as a Tooltip component', () => {
    const tooltip = mount(wrapper.find(OverlayTrigger).prop('overlay'));
    expect(tooltip.instance()).toBeInstanceOf(Tooltip);
    expect(tooltip.text()).toEqual('tooltip text');
  });

  test('should set the tooltip size, text and position', () => {
    wrapper.setProps({
      tooltipPosition: 'top',
      tooltipSize: 'large',
      tooltipText: 'tooltip text'
    });
    const tooltip = mount(wrapper.find(OverlayTrigger).prop('overlay'));

    expect(wrapper.find(OverlayTrigger).prop('placement')).toEqual('top');
    expect(tooltip.find('.tooltip--large')).toHaveLength(1);
    expect(tooltip.find('.tooltip--large').prop('children')).toEqual(
      'tooltip text'
    );
  });

  test('should render tooltip helper HTML element', () => {
    expect(wrapper.find('.button--has-tooltip')).toHaveLength(1);
  });
});
