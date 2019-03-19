import { React, shallow } from './setup';
import FontAwesomeIcon from '../lib/FontAwesomeIcon';

describe('FontAwesomeIcon', () => {
  test('renders an <i> element', () => {
    const Element = shallow(<FontAwesomeIcon name="fa-cog" />);
    const el = Element.find('i');

    expect(el).toHaveLength(1);
  });

  test('renders the right class names', () => {
    const Element = shallow(<FontAwesomeIcon name="fa-cog" />);
    expect(Element.find('i').hasClass('fa fa-cog')).toBe(true);
  });

  test('renders a custom class name', () => {
    const Element = shallow(
      <FontAwesomeIcon name="fa-cog" className="banana-bread" />
    );
    expect(Element.find('i').hasClass('fa fa-cog banana-bread')).toBe(true);
  });

  test('renders child elements', () => {
    const Element = shallow(
      <FontAwesomeIcon name="fa-cog">
        <span>Hello</span>
      </FontAwesomeIcon>
    );
    expect(Element.find('span').text()).toBe('Hello');
  });
});
