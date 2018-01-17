import { React, expect, shallow, sinon } from '../setup';
import { Tabs } from '../../lib';
import { GATHER_UI_TABS } from '../../lib/Tabs';
import TabItem from '../../lib/Tabs/TabsItem';
import TabButton from '../../lib/Tabs/TabsButton';
import TabOptions from '../../lib/Tabs/TabsOptions';
import TabForm from '../../lib/Tabs/TabsForm';

describe('Tabs', () => {
  const onTabChangeSpy = sinon.spy();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Tabs onTabChange={onTabChangeSpy} activeTabId="tabId-2">
        <Tabs.Item id="tabId-1">Tab 1</Tabs.Item>
        <Tabs.Item id="tabId-2">Tab 2</Tabs.Item>
      </Tabs>
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

  it('sets the Item/Button static prop to the Item/Button/Options/Form component', () => {
    expect(Tabs.Item).to.deep.equal(TabItem);
    expect(Tabs.Button).to.deep.equal(TabButton);
    expect(Tabs.Options).to.deep.equal(TabOptions);
    expect(Tabs.Form).to.deep.equal(TabForm);
  });

  it('sets an active tab and calls props.onTabChange when the active tab changes', () => {
    wrapper.instance().setActiveTab('123');
    expect(wrapper.state('activeTabId')).to.equal('123');
    expect(onTabChangeSpy).to.be.calledWithExactly('123');

    wrapper.instance().setActiveTab('123');
    expect(onTabChangeSpy).to.be.calledOnce();

    wrapper.instance().setActiveTab('321');
    expect(onTabChangeSpy).to.be.calledTwice();
  });

  it('sets the initial active tab', () => {
    expect(wrapper.state('activeTabId')).to.equal('tabId-2');
  });

  it('adds an editable class', () => {
    wrapper.setProps({ editable: true });
    expect(wrapper.hasClass('tabs--editable')).to.equal(true);
  });
});
