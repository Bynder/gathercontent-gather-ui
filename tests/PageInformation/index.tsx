// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { EditableTextWrapper, PageInformation } from "lib";
import { React, shallow } from "../setup";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("PageInformation", () => {
  let wrapper;

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("always has a title", () => {
    wrapper = shallow(<PageInformation title="Hello World" />);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".page-information__title").text()).toEqual(
      "Hello World"
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("can have an optional text subtitle", () => {
    wrapper = shallow(<PageInformation title="Foo" subtitle="bar" />);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".page-information__subtitle").text()).toEqual("bar");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("can render a node as a subtitle", () => {
    const subtitle = (
      <span>
        Template:{" "}
        <span className="page-information__subtitle--highlight">hi</span>
      </span>
    );
    wrapper = shallow(<PageInformation title="Foo" subtitle={subtitle} />);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".page-information__subtitle").text()).toEqual(
      "Template: hi"
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("can have an editable title", () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const renameSpy = jest.fn();
    wrapper = shallow(
      <PageInformation title="Original" editable rename={renameSpy} />
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(EditableTextWrapper)).toHaveLength(1);
    wrapper.find(EditableTextWrapper).prop("onChange")("foo");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(renameSpy).toHaveBeenCalledWith("foo");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds a title tag", () => {
    wrapper = shallow(<PageInformation title="Foo" subtitle="bar" />);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".page-information__title").prop("title")).toEqual(
      "Foo"
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds an inputLabel", () => {
    wrapper = shallow(
      <PageInformation title="Foo" subtitle="bar" editable contextName="bla" />
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(EditableTextWrapper).prop("inputLabel")).toEqual(
      "Rename bla"
    );

    wrapper = shallow(
      <PageInformation
        title="Foo"
        subtitle="bar"
        editable
        inputLabel="hello!"
      />
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(EditableTextWrapper).prop("inputLabel")).toEqual(
      "hello!"
    );
  });
});
