import { React, shallow } from '../setup';
import { CollectionsTable, Button } from '../../lib/index';

describe('Collections table action', () => {
  let wrapper;
  const onClick = () => {};

  beforeEach(() => {
    wrapper = shallow(
      <CollectionsTable.Action onClick={onClick}>
        Hello world
      </CollectionsTable.Action>
    );
  });

  test('renders children', () => {
    expect(wrapper.find(Button).prop('children')).toEqual('Hello world');
  });

  test('rendering a <Button /> component', () => {
    expect(wrapper.find(Button).prop('clickHandler')).toEqual(onClick);
    expect(wrapper.find(Button).prop('types')).toEqual(['icon-only']);
  });
});
