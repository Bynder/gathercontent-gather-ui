import { React, expect, shallow, sinon } from '../setup';
import { Tabs } from '../../lib';
import { GATHER_UI_TABS } from '../../lib/Tabs';
import TabItem from '../../lib/Tabs/TabsItem';

describe('Tabs', () => {
  const onTabChangeSpy = sinon.spy();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Tabs onTabChange={onTabChangeSpy}>
        <Tabs.Item id="tabId-1">Tab 1</Tabs.Item>
        <Tabs.Item id="tabId-2">Tab 2</Tabs.Item>
      </Tabs>,
      { context: { [GATHER_UI_TABS]: { activeTabItem: null } } }
    );
  });

  it('renders children', () => {
    expect(wrapper.find(Tabs.Item)).to.have.length(2);
  });

  it('shares context', () => {
    wrapper.setState({ activeTabId: '123' });
    expect(wrapper.instance().getChildContext()).to.deep.equal({
      [GATHER_UI_TABS]: {
        activeTabId: '123',
        setActiveTab: wrapper.instance().setActiveTab
      }
    });
  });

  it('sets the Item static prop to the Item component', () => {
    expect(Tabs.Item).to.deep.equal(TabItem);
  });

  it('sets an active tab and calls props.onTabChange', () => {
    wrapper.instance().setActiveTab('123');
    expect(wrapper.state('activeTabId')).to.equal('123');
    expect(onTabChangeSpy).to.be.calledWithExactly('123');
  });
});
