import React from 'react';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import dirtyChai from 'dirty-chai';
import chai, { expect } from 'chai';
import jsDomGlobal from 'jsdom-global';
import { shallow, mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

chai.should();
chai.use(sinonChai);
chai.use(dirtyChai);
chai.use(chaiEnzyme());

export { React, expect, sinon, sinonChai, jsDomGlobal, shallow, mount };
