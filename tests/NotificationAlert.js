import { React, expect, sinon, jsDomGlobal, shallow, mount } from './setup';
import NotificationAlert from '../lib/NotificationAlert/';
import { Alert } from 'react-bootstrap/lib';

jsDomGlobal();

describe('NotificationAlert', () => {
  let sandbox, props;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('renders an <Alert> component', () => {
    props = {
      level: 'warning',
      text: 'dummy'
    };

    let Element = shallow(<NotificationAlert {...props} />);
    expect(Element.find(Alert)).to.have.length(1);
  });

  it('renders the text it receives', () => {
    props = {
      level: 'info',
      text: 'wait but why'
    };

    let Element = shallow(<NotificationAlert {...props} />);
    expect(Element.contains('wait but why')).to.be.true;
  });
});
