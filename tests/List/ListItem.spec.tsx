import { React, shallow } from "../setup";
import { List, ListItem } from "lib";
import Button from "../../lib/Button";

describe("List Item", () => {
  let wrapper: any;
  let onToggleMock: any;

  const mockAction = <button type="button">test button</button>;
  const props = {
    id: "123",
    isCurrent: true,
    collapse: true,
  };

  beforeEach(() => {
    onToggleMock = jest.fn();

    wrapper = shallow(
      <ListItem action={mockAction} onToggle={onToggleMock} {...props}>
        Hello world
        <List>
          <ListItem>This is bruce!</ListItem>
        </List>
        {/* @ts-expect-error */}
        {mockAction.mockProp}
      </ListItem>
    );
  });

  afterEach(() => {});

  test("adds classes per prop", () => {
    expect(wrapper.hasClass("is-current")).toEqual(true);

    expect(wrapper.hasClass("list__item--collapse")).toEqual(true);
  });

  test("adds a is-active class to the toggle children button", () => {
    expect(wrapper.find(Button).hasClass("is-active")).toEqual(false);
    wrapper.setState({ showSubList: true });

    expect(wrapper.find(Button).hasClass("is-active")).toEqual(true);
  });

  test("toggles state.showSubList from false to true", () => {
    expect(wrapper.find(Button)).toHaveLength(1);

    wrapper.find(Button).prop("clickHandler")();

    expect(onToggleMock).toHaveBeenCalledWith(props.id);

    expect(wrapper.state("showSubList")).toEqual(true);
    wrapper.find(Button).prop("clickHandler")();

    expect(wrapper.state("showSubList")).toEqual(false);

    wrapper.setProps({ children: null });

    expect(wrapper.find(Button)).toHaveLength(0);
  });

  test("renders an action", () => {
    expect(
      wrapper.find(".list__action").first().contains("test button")
    ).toEqual(true);

    expect(wrapper.hasClass("has-action")).toEqual(true);
  });

  test("rendering children within the text container", () => {
    expect(wrapper.find(".list__item-text").contains("Hello world")).toEqual(
      true
    );
  });

  test("rendering sub lists outside of the content container", () => {
    wrapper.setState({ showSubList: true });

    expect(wrapper.find(".list__item-content").find(List)).toHaveLength(0);

    expect(wrapper.find(List)).toHaveLength(1);
  });
});
