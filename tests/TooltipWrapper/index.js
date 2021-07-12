import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import { React, shallow } from '../setup';
import { TooltipWrapper } from '../../lib';

describe('Tooltip Wrapper', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TooltipWrapper
        id="id-1"
        tooltipText="test text"
        position="right"
        trigger={['click']}
      >
        <div className="test">Test child</div>
      </TooltipWrapper>
    );
  });

  afterEach(() => {});

  test('renders an OverlayTrigger component', () => {
    expect(wrapper.find(OverlayTrigger)).toHaveLength(1);
  });

  test('sets a Tooltip component as the overlay', () => {
    const overlayComponent = shallow(
      wrapper.find(OverlayTrigger).prop('overlay')
    );
    expect(overlayComponent.hasClass('tooltip')).toEqual(true);
    expect(overlayComponent.prop('id')).toEqual('id-1');
    expect(overlayComponent.contains('test text')).toEqual(true);
  });

  test('renders its children', () => {
    expect(wrapper.find('.test')).toHaveLength(1);
  });

  test('adds a className to the wrapper', () => {
    wrapper.setProps({ wrapperClassName: 'bloop' });
    expect(wrapper.find('.tooltip-wrapper__child.bloop')).toHaveLength(1);
  });

  test('applies the correct classname when clickable', () => {
    expect(wrapper.find('.tooltip-wrapper__child--clickable')).toHaveLength(0);

    wrapper.setProps({ clickable: true });
    expect(wrapper.find('.tooltip-wrapper__child--clickable')).toHaveLength(1);
  });
});
