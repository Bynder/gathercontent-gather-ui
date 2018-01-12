import { React, expect, shallow, sinon } from '../setup';
import { Tabs } from '../../lib';
import { GATHER_UI_TABS } from '../../lib/Tabs';

describe('Tabs Item', () => {
  const setActiveTabSpy = sinon.spy();
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

  it('renders children', () => {
    expect(wrapper.text()).to.equal('Tab 1');
  });

  it('sets an active class', () => {
    expect(wrapper.hasClass('is-active')).to.equal(true);
    wrapper.setContext({
      [GATHER_UI_TABS]: { activeTabId: '321' }
    });
    expect(wrapper.hasClass('is-active')).to.equal(false);
  });

  it('calls the setActiveTab function from context', () => {
    wrapper.find('button').simulate('click');
    expect(setActiveTabSpy).to.be.calledWithExactly('123');
  });
});
