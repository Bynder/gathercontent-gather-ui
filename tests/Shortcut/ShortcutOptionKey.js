import UAParser from 'ua-parser-js';
import { React, expect, mount } from '../setup';
import { ShortcutOptionKey } from '../../lib';

describe('Shortcut/ShortcutOptionKey', () => {
  let wrapper;
  const ua = new UAParser();

  it('renders a Option for Mac OS', () => {
    ua.setUA(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36'
    );
    wrapper = mount(<ShortcutOptionKey UAParser={ua} />);
    expect(wrapper.text()).to.equal('Option');
  });

  it('renders a Alt for everything else', () => {
    ua.setUA(
      'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0'
    );
    wrapper = mount(<ShortcutOptionKey UAParser={ua} />);
    expect(wrapper.text()).to.equal('Alt');
  });
});
