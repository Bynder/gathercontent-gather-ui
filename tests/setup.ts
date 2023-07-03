import React from "react";
// @ts-expect-error
import Enzyme, { shallow, mount } from "enzyme";
// @ts-expect-error
import Adapter from "enzyme-adapter-react-16";
import "@testing-library/jest-dom/extend-expect";

Enzyme.configure({ adapter: new Adapter() });

export { React, shallow, mount };
