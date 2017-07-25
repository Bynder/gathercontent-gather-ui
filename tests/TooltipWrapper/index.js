import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import { React, expect, shallow } from '../setup';
import TooltipWrapper from '../../lib/TooltipWrapper';

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
      </TooltipWrapper>,
    );
  });

  afterEach(() => {});

  it('renders an OverlayTrigger component', () => {
    expect(wrapper.find(OverlayTrigger)).to.have.length(1);
  });

  it('sets a Tooltip component as the overlay', () => {
    const overlayComponent = shallow(wrapper.find(OverlayTrigger).prop('overlay'))
    expect(overlayComponent.hasClass('tooltip')).to.equal(true);
    expect(overlayComponent.prop('id')).to.equal('id-1');
    expect(overlayComponent.contains('test text')).to.equal(true);
  });

  it('renders its children', () => {
    expect(wrapper.find('.test')).to.have.length(1);
  });
});
