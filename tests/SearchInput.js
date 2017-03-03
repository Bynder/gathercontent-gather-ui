import { React, expect, sinon, jsDomGlobal, shallow, mount } from './setup';
jsDomGlobal();

import SearchInput from '../lib/SearchInput';

describe('SearchInput', () => {
	let sandbox, props;

	beforeEach(() => {
		sandbox = sinon.sandbox.create();
	});

	afterEach(() => {
		sandbox.restore();
	});

	it('should render an input component', () => {
		props = { value: 'Botão', type: 'primary' };

		let Element = shallow(<SearchInput {...props}/>);
		let input = Element.find('input');

		expect(input).to.have.length(1);
		expect(input.props().className).to.equal('search-input__input');
	});

	it('should run a callback when the query changes', () => {
		let onChangeHandler = sinon.spy();

		const Element = mount(<SearchInput onChangeHandler={ onChangeHandler } />);

		Element.find('input').simulate('change');
		expect(onChangeHandler.calledOnce).to.equal(true);
	});

	it('should map the state query to the input value', () => {
		const Element = mount(<SearchInput />);
		const input = Element.find('.input-search');

		Element.setState({query: 'fake query'});
		expect(Element.state().query).to.equal('fake query');
	});

	it('should clear the search when button is pressed', () => {
		let callback = sinon.stub();

		const Element = mount(<SearchInput onChangeHandler={ callback } />);
		const clearButton = Element.find('.search-input__clear');
		const input = Element.find('.search-input__input');
		const onClick = sinon.spy();

		Element.setState({query: 'fake query'});
		clearButton.simulate('click');
		expect(Element.state().query).to.equal('');
		expect(input.props().value).to.equal('');
	});
});
