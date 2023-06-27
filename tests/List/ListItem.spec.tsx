import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'List'... Remove this comment to see the full error message
import { List, ListItem } from "../../lib";
import Button from "../../lib/Button";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("List Item", () => {
  let wrapper: any;
  let onToggleMock: any;

  const mockAction = <button type="button">test button</button>;
  const props = {
    id: "123",
    isCurrent: true,
    collapse: true,
  };

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
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

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {});

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds classes per prop", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("is-current")).toEqual(true);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("list__item--collapse")).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds a is-active class to the toggle children button", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button).hasClass("is-active")).toEqual(false);
    wrapper.setState({ showSubList: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button).hasClass("is-active")).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("toggles state.showSubList from false to true", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button)).toHaveLength(1);

    wrapper.find(Button).prop("clickHandler")();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onToggleMock).toHaveBeenCalledWith(props.id);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("showSubList")).toEqual(true);
    wrapper.find(Button).prop("clickHandler")();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("showSubList")).toEqual(false);

    wrapper.setProps({ children: null });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button)).toHaveLength(0);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders an action", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper.find(".list__action").first().contains("test button")
    ).toEqual(true);

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("has-action")).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("rendering children within the text container", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".list__item-text").contains("Hello world")).toEqual(
      true
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("rendering sub lists outside of the content container", () => {
    wrapper.setState({ showSubList: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".list__item-content").find(List)).toHaveLength(0);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(List)).toHaveLength(1);
  });
});
