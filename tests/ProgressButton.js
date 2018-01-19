import { React, shallow } from './setup';
import Button from '../lib/Button';

describe('ProgressButton', () => {
  let props;

  test('should render a button component', () => {
    props = { type: 'primary' };

    const Element = shallow(
      <Button clickHandler={() => {}} {...props}>
        Botão
      </Button>
    );
    const button = Element.find('button');

    expect(button).toHaveLength(1);
    expect(button.text()).toEqual('Botão');
    expect(button.hasClass('button--primary')).toBe(true);
  });
});
