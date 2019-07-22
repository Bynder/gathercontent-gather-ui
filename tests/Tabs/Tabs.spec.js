import { React, shallow } from '../setup';
import { Tabs } from '../../lib';
import { GATHER_UI_TABS } from '../../lib/Tabs/consts';
import TabItem from '../../lib/Tabs/TabsItem';
import TabButton from '../../lib/Tabs/TabsButton';
import TabOptions from '../../lib/Tabs/TabsOptions';
import TabForm from '../../lib/Tabs/TabsForm';

describe('Tabs', () => {
  const onTabChangeSpy = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Tabs onTabChange={onTabChangeSpy} activeTabId="tabId-2">
        <Tabs.Item id="tabId-1">Tab 1</Tabs.Item>
        <Tabs.Item id="tabId-2">Tab 2</Tabs.Item>
      </Tabs>
    );
  });

  test('renders children', () => {
    expect(wrapper.find(Tabs.Item)).toHaveLength(2);
  });

  test('shares context', () => {
    wrapper.setState({ activeTabId: '123' });
    expect(wrapper.instance().getChildContext()).toEqual({
      [GATHER_UI_TABS]: {
        activeTabId: '123',
        setActiveTab: wrapper.instance().setActiveTab
      }
    });
  });

  test('sets the Item/Button static prop to the Item/Button/Options/Form component', () => {
    expect(Tabs.Item).toEqual(TabItem);
    expect(Tabs.Button).toEqual(TabButton);
    expect(Tabs.Options).toEqual(TabOptions);
    expect(Tabs.Form).toEqual(TabForm);
  });

  test('sets an active tab and calls props.onTabChange when the active tab changes', () => {
    wrapper.instance().setActiveTab('123');
    expect(wrapper.state('activeTabId')).toEqual('123');
    expect(onTabChangeSpy).toHaveBeenCalledWith('123');

    wrapper.instance().setActiveTab('123');
    expect(onTabChangeSpy).toHaveBeenCalledTimes(1);

    wrapper.instance().setActiveTab('321');
    expect(onTabChangeSpy).toHaveBeenCalledTimes(2);
  });

  test('sets the initial active tab', () => {
    expect(wrapper.state('activeTabId')).toEqual('tabId-2');
  });

  test('adds an editable class', () => {
    wrapper.setProps({ editable: true });
    expect(wrapper.hasClass('tabs--editable')).toEqual(true);
  });
});
