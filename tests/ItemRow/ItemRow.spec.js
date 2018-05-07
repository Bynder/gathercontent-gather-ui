import { React, shallow } from '../setup';
import { ItemRow } from '../../lib';

describe('Item Row', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ItemRow indicator="indicator" label="label text">
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
    expect(wrapper.find('.item-row-title').contains('Hello world')).toEqual(
      true
    );
  });

  test('renders an indicator', () => {
    expect(wrapper.find('.item-row-indicator').contains('indicator')).toEqual(
      true
    );
  });

  test('renders an label', () => {
    expect(wrapper.find('.item-row-label').contains('label text')).toEqual(
      true
    );
  });
});
