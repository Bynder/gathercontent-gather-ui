import { React, expect, sinon, jsDomGlobal, shallow } from './setup';
import CheckToggle from '../lib/CheckToggle/';

jsDomGlobal();

describe('CheckToggle', () => {
  let sandbox;
  let props;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('renders a wrapper with an input', () => {
    const Element = shallow(<CheckToggle id="test-id" />);
    const div = Element.find('div');
    const input = div.find('input');

    expect(div).to.have.length(1);
    expect(input).to.have.length(1);
  });

  it('changes its state when clicked', () => {
    props = {
      id: 'hello',
      clickHandler: sandbox.spy()
    };

    const Element = shallow(<CheckToggle {...props} />);
    Element.find('input').simulate('change');

    expect(Element.state().checked).to.equal(true);
    expect(props.clickHandler.called).to.equal(true);
  });

  it('receives a matching ID for both input and label', () => {
    props = { id: 'hello' };

    const Element = shallow(<CheckToggle {...props} />);
    const label = Element.find('[data-label-id]');
    expect(label.props().htmlFor).to.equal(props.id);
  });
});
