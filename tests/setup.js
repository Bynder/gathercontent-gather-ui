import React from 'react';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { assert, expect } from 'chai';
import jsDomGlobal from 'jsdom-global';
import { shallow, mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'

chai.should();
chai.use(sinonChai);
chai.use(chaiEnzyme())

export {
  React,
  expect,
  sinon,
  sinonChai,
  jsDomGlobal,
  shallow,
  mount,
}