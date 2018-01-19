import { React, shallow } from '../setup';
import { Tabs } from '../../lib';
import { GATHER_UI_TABS } from '../../lib/Tabs';

describe('Tabs Item', () => {
  const setActiveTabSpy = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Tabs.Item id="123">Tab 1</Tabs.Item>, {
      context: {
        [GATHER_UI_TABS]: {
          activeTabId: '123',
          setActiveTab: setActiveTabSpy
        }
      }
    });
  });

  test('renders children', () => {
    expect(wrapper.text()).toEqual('Tab 1');
  });

  test('sets an active class', () => {
    expect(wrapper.hasClass('is-active')).toEqual(true);
    wrapper.setContext({
      [GATHER_UI_TABS]: { activeTabId: '321' }
    });
    expect(wrapper.hasClass('is-active')).toEqual(false);
  });

  test('calls the setActiveTab function from context', () => {
    wrapper.find('.tabs__item').simulate('click');
    expect(setActiveTabSpy).toHaveBeenCalledWith('123');
  });

  test('renders options when active', () => {
    expect(wrapper.find(Tabs.Options)).toHaveLength(0);
    wrapper.setProps({ options: [{}] });
    expect(wrapper.find(Tabs.Options)).toHaveLength(1);
  });
});
