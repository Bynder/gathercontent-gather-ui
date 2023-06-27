import { React, mount } from "../setup";
import { DropdownMenu } from "../../lib/DropdownMenu";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("DropdownMenu", () => {
  let wrapper: any;
  let mockItems: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    mockItems = [
      {
        name: "item 1",
        action: () => {},
      },
      {
        name: "item 2",
        action: () => {},
      },
    ];
    wrapper = mount(<DropdownMenu items={mockItems}>Menu text</DropdownMenu>);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("should render text passed on children", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.prop("children")).toEqual("Menu text");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("should render the dropdown items", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.prop("items")).toEqual(mockItems);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("clicking the dropdown menu button should toggle the menu", () => {
    wrapper.find(".dropdown-menu__button").hostNodes().simulate("click");
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.render().hasClass("open")).toEqual(true);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.render().hasClass("is-active")).toEqual(true);
    wrapper.find(".dropdown-menu__button").hostNodes().simulate("click");
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.render().hasClass("open")).toEqual(false);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.render().hasClass("is-active")).toEqual(false);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("setting the caret prop to true should render a caret icon", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown-menu__caret").length).toEqual(0);
    wrapper.setProps({
      caret: true,
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown-menu__caret").length).toEqual(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("setting the downIcon prop to true should render a down icon", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown-menu__down").length).toEqual(0);
    wrapper.setProps({
      downIcon: true,
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown-menu__down").length).toEqual(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("setting the fullWidth prop to true should add a full-width class", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".full-width").length).toEqual(0);
    wrapper.setProps({
      fullWidth: true,
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".full-width").length).toEqual(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("setting the direction prop to up should add a dropup class", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropup").length).toEqual(0);
    wrapper.setProps({
      direction: "up",
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropup").length).toEqual(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("it adds a disabled class to the button when disabled prop passed", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper
        .find(".dropdown-menu__button")
        .hostNodes()
        .hasClass("dropdown-menu__button-disabled")
    ).toBe(false);
    wrapper.setProps({
      disabled: true,
    });
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper
        .find(".dropdown-menu__button")
        .hostNodes()
        .hasClass("dropdown-menu__button-disabled")
    ).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("items should default to a link type", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown__link").length).toEqual(2);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("items can have a separator type", () => {
    const mockItemsWithSeparator = [
      {
        name: "item 1",
        action: () => {},
      },
      {
        type: "separator",
      },
      {
        name: "item 2",
        action: () => {},
      },
    ];
    wrapper.setProps({
      items: mockItemsWithSeparator,
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown__link").length).toEqual(2);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown__separator").length).toEqual(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("active items will render a tick icon", () => {
    const mockItemsWithSeparator = [
      {
        name: "item 1",
        action: () => {},
        active: true,
      },
      {
        name: "item 2",
        action: () => {},
      },
    ];
    wrapper.setProps({
      items: mockItemsWithSeparator,
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown__link").length).toEqual(2);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown-item__tick").length).toEqual(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("items can have additional information", () => {
    const mockAdditionalItems = [
      {
        name: "item 1",
        additional: "more info",
        type: "withAdditional",
        action: () => {},
      },
      {
        name: "item 2",
        additional: "more info too",
        type: "withAdditional",
        action: () => {},
      },
    ];
    wrapper.setProps({
      items: mockAdditionalItems,
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown__additional").length).toEqual(2);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown__item--additional").length).toEqual(2);
  });
});
