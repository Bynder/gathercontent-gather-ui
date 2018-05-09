import { React, shallow } from '../setup';
import { ItemRow } from '../../lib';
import Avatar from '../../lib/Avatar';

describe('Item Row', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ItemRow
        indicator="indicator"
        label="label text"
        participants={<Avatar />}
      >
        Hello world
      </ItemRow>
    );
  });

  afterEach(() => {});

  test('adds classes per prop', () => {
    expect(wrapper.hasClass('has-indicator')).toEqual(true);
    expect(wrapper.hasClass('has-label')).toEqual(true);
  });

  test('renders children', () => {
    expect(wrapper.find('.item-row__title').contains('Hello world')).toEqual(
      true
    );
  });

  test('renders an indicator', () => {
    expect(wrapper.find('.item-row__indicator').contains('indicator')).toEqual(
      true
    );
  });

  test('renders an label', () => {
    expect(wrapper.find('.item-row__label').contains('label text')).toEqual(
      true
    );
  });

  test('rending participants', () => {
    expect(
      wrapper.find('.item-row__participants').contains(<Avatar />)
    ).toEqual(true);
  });
});
