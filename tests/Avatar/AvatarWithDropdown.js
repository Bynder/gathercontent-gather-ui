import { React, expect, shallow } from '../setup';
import { Avatar, AvatarWithDropdown, Button } from '../../lib';

describe('AvatarWithDropdown', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AvatarWithDropdown
        name="Angus Edwardson"
        initials="AE"
        email="example@gmail.com"
        trigger={['focus']}
      >
        <ul className="dropdown-menu">
          <li className="dropdown__item">
            <a href="#test" className="dropdown__link">
              Personal Settings
            </a>
          </li>
        </ul>
      </AvatarWithDropdown>
    );
  });

  afterEach(() => {});

  it('renders an <Avatar> wrapped <Button>', () => {
    expect(wrapper.find(Button)).to.have.length(1);
    expect(wrapper.find(Avatar)).to.have.length(1);
  });

  it('renders its children', () => {
    expect(wrapper.find('.dropdown-menu')).to.have.length(1);
  });
});
