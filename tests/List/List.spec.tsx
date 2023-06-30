import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'List'... Remove this comment to see the full error message
import { List, ListItem } from "../../lib";
import ListHead from "../../lib/List/ListHead";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("List", () => {
  let wrapper: any;

  const mockAction = <button type="button">test button</button>;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <List title="Project name" action={mockAction}>
        <ListItem title="row title" />
        <ListItem title="row title" />
      </List>
    );
  });

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {});

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders a ListHead component", () => {
    const component = wrapper.find(ListHead);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(component).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(component.prop("title")).toEqual("Project name");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(component.prop("action")).toEqual(mockAction);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders 2 children and surrounds them with a list__row div", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".list__row")).toHaveLength(2);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders a modifier class of "--bordered-right"', () => {
    wrapper.setProps({ borderedRight: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("list--bordered-right")).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('rendering a modifier class of "--bordered-left"', () => {
    wrapper.setProps({ borderedLeft: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("list--bordered-left")).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('rendering a modifier class of "--bordered"', () => {
    wrapper.setProps({ bordered: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("list--bordered")).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("rends a list subtitle", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".list__subtitle")).toHaveLength(0);
    wrapper.setProps({ subtitle: "Waffles" });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".list__subtitle")).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".list__subtitle").text()).toEqual("Waffles");
  });
});
