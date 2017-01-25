import { React, expect, sinon, jsDomGlobal, shallow } from './setup';
import NavLink from '../lib/NavLink/';
jsDomGlobal();

describe('NavLink', () => {
  let sandbox, props;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('renders a <a> element with content', () => {
    let Element = shallow(<NavLink>text</NavLink>);
    let el = Element.find('a');

    expect(el.text()).to.equal('text');
    expect(el).to.have.length(1);
  });

  it('renders a custom class', () => {
    let Element = shallow(<NavLink className="custom-class">text</NavLink>);
    let el = Element.find('a');

    expect(el.props().className).to.contain('custom-class');
  });

  it('renders with a custom target attribute', () => {
    let Element = shallow(<NavLink target="_blank">text</NavLink>);
    let el = Element.find('a');
    
    expect(el.props().target).to.equal('_blank');
  });
});
