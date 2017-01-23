import { React, expect, sinon, jsDomGlobal, shallow } from './setup';
import FontAwesomeIcon from '../lib/FontAwesomeIcon/';
jsDomGlobal();

describe('FontAwesomeIcon', () => {
  let sandbox, props;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('renders an <i> element', () => {
    let Element = shallow(<FontAwesomeIcon name="fa-cog" />);
    let el = Element.find('i');

    expect(el).to.have.length(1);
  });

  it('renders the right class names', () => {
    let Element = shallow(<FontAwesomeIcon name="fa-cog" />);

    expect(Element
      .find('i')
      .props()
      .className
    ).to.contain('fa fa-cog');
  });

  it('renders a custom class name', () => {
    let Element = shallow(<FontAwesomeIcon name="fa-cog" className="banana-bread" />);
    expect(Element
      .find('i')
      .props()
      .className
    ).to.contain('fa fa-cog banana-bread');
  });

  it('renders child elements', () => {
    let Element = shallow(<FontAwesomeIcon name="fa-cog"><span>Hello</span></FontAwesomeIcon>);
    expect(Element.find('span').text()).to.contain('Hello');
  });
});
