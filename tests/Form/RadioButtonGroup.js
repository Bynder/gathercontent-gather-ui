import { React, expect, sinon, jsDomGlobal, shallow } from '../setup';
import RadioButtonGroup from '../../lib/Form/RadioButtonGroup';
jsDomGlobal();

describe('RadioButtonGroup', () => {
	let shallowWrapper;
	let props = {
		name: 'name',
		title: 'gardens',
		subtitle: 'subtitle',
		id: 'id',
		onChange: sinon.spy()
	};

	beforeEach(() => {
		shallowWrapper = shallow(<RadioButtonGroup {...props}/>);
	});

	it('should render an outer DIV wrapper as a CSS media object', () => {
		expect(shallowWrapper.first().type()).to.equal('div');
		expect(shallowWrapper.first().hasClass('o-media-obj')).to.equal(true);
	});

	it('should contain only one input of type "radio"', () => {
		expect(shallowWrapper.find('input[type="radio"]')).to.have.length(1);
	});

	it('should render the title property as the label', () => {
		expect(shallowWrapper.text().indexOf(props.title)).to.not.equal(-1);
	});

	it('should run a callback when the input changes state"', () => {
		// Trigger an input change
		shallowWrapper.find('input').simulate('change');
		expect(props.onChange.calledOnce).to.equal(true);
	});
});