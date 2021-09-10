import { React, mount } from '../setup';
import { DropdownMenu } from '../../lib/DropdownMenu';

describe('DropdownMenu', () => {
  let wrapper;
  let mockItems;

  beforeEach(() => {
    mockItems = [
      {
        name: 'item 1',
        action: () => {}
      },
      {
        name: 'item 2',
        action: () => {}
      }
    ];
    wrapper = mount(<DropdownMenu items={mockItems}>Menu text</DropdownMenu>);
  });

  test('should render text passed on children', () => {
    expect(wrapper.prop('children')).toEqual('Menu text');
  });

  test('should render the dropdown items', () => {
    expect(wrapper.prop('items')).toEqual(mockItems);
  });

  test('clicking the dropdown menu button should toggle the menu', () => {
    wrapper
      .find('.dropdown-menu__button')
      .hostNodes()
      .simulate('click');
    wrapper.update();
    expect(wrapper.render().hasClass('open')).toEqual(true);
    expect(wrapper.render().hasClass('is-active')).toEqual(true);
    wrapper
      .find('.dropdown-menu__button')
      .hostNodes()
      .simulate('click');
    wrapper.update();
    expect(wrapper.render().hasClass('open')).toEqual(false);
    expect(wrapper.render().hasClass('is-active')).toEqual(false);
  });

  test('setting the caret prop to true should render a caret icon', () => {
    expect(wrapper.find('.dropdown-menu__caret').length).toEqual(0);
    wrapper.setProps({
      caret: true
    });
    expect(wrapper.find('.dropdown-menu__caret').length).toEqual(1);
  });

  test('setting the downIcon prop to true should render a down icon', () => {
    expect(wrapper.find('.dropdown-menu__down').length).toEqual(0);
    wrapper.setProps({
      downIcon: true
    });
    expect(wrapper.find('.dropdown-menu__down').length).toEqual(1);
  });

  test('setting the fullWidth prop to true should add a full-width class', () => {
    expect(wrapper.find('.full-width').length).toEqual(0);
    wrapper.setProps({
      fullWidth: true
    });
    expect(wrapper.find('.full-width').length).toEqual(1);
  });

  test('setting the direction prop to up should add a dropup class', () => {
    expect(wrapper.find('.dropup').length).toEqual(0);
    wrapper.setProps({
      direction: 'up'
    });
    expect(wrapper.find('.dropup').length).toEqual(1);
  });

  test('it adds a disabled class to the button when disabled prop passed', () => {
    expect(
      wrapper
        .find('.dropdown-menu__button')
        .hostNodes()
        .hasClass('dropdown-menu__button-disabled')
    ).toBe(false);
    wrapper.setProps({
      disabled: true
    });
    wrapper.update();
    expect(
      wrapper
        .find('.dropdown-menu__button')
        .hostNodes()
        .hasClass('dropdown-menu__button-disabled')
    ).toBe(true);
  });

  test('items should default to a link type', () => {
    expect(wrapper.find('.dropdown__link').length).toEqual(2);
  });

  test('items can have a separator type', () => {
    const mockItemsWithSeparator = [
      {
        name: 'item 1',
        action: () => {}
      },
      {
        type: 'separator'
      },
      {
        name: 'item 2',
        action: () => {}
      }
    ];
    wrapper.setProps({
      items: mockItemsWithSeparator
    });
    expect(wrapper.find('.dropdown__link').length).toEqual(2);
    expect(wrapper.find('.dropdown__separator').length).toEqual(1);
  });

  test('active items will render a tick icon', () => {
    const mockItemsWithSeparator = [
      {
        name: 'item 1',
        action: () => {},
        active: true
      },
      {
        name: 'item 2',
        action: () => {}
      }
    ];
    wrapper.setProps({
      items: mockItemsWithSeparator
    });
    expect(wrapper.find('.dropdown__link').length).toEqual(2);
    expect(wrapper.find('.dropdown-item__tick').length).toEqual(1);
  });

  test('items can have additional information', () => {
    const mockAdditionalItems = [
      {
        name: 'item 1',
        additional: 'more info',
        type: 'withAdditional',
        action: () => {}
      },
      {
        name: 'item 2',
        additional: 'more info too',
        type: 'withAdditional',
        action: () => {}
      }
    ];
    wrapper.setProps({
      items: mockAdditionalItems
    });
    expect(wrapper.find('.dropdown__additional').length).toEqual(2);
    expect(wrapper.find('.dropdown__item--additional').length).toEqual(2);
  });
});
