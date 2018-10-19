import { React, shallow } from '../setup';
import { Card } from '../../lib';
import CardContent from '../../lib/Card/CardContent';
import CardFooter from '../../lib/Card/CardFooter';
import CardFooterLeft from '../../lib/Card/CardFooterLeft';
import CardFooterRight from '../../lib/Card/CardFooterRight';
import CardSubHeading from '../../lib/Card/CardSubHeading';

describe('Card', () => {
  let wrapper;
  const onClickSpy = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Card onClick={onClickSpy}>
        <div className="child" />
      </Card>
    );
  });

  test('renders children', () => {
    expect(wrapper.find('.child')).toHaveLength(1);
  });

  test('sets the compound static props', () => {
    expect(Card.Content).toEqual(CardContent);
    expect(Card.Footer).toEqual(CardFooter);
    expect(Card.FooterLeft).toEqual(CardFooterLeft);
    expect(Card.FooterRight).toEqual(CardFooterRight);
    expect(Card.SubHeading).toEqual(CardSubHeading);
  });

  test('calls the onClick prop', () => {
    wrapper.simulate('click');
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });

  test('adds a selected modifier', () => {
    expect(wrapper.hasClass('card--selected')).toBe(false);
    wrapper.setProps({ selected: true });
    expect(wrapper.hasClass('card--selected')).toBe(true);
  });

  test('adds an interactive modifier', () => {
    expect(wrapper.hasClass('card--interactive')).toBe(true);
    wrapper.setProps({ onClick: null });
    expect(wrapper.hasClass('card--selected')).toBe(false);
  });
});
