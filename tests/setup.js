import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });

export { React, shallow, mount };
