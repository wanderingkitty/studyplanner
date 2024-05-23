import React from 'react';
import PrioItem from './PrioItem';

describe('<PrioItem />', () => {
	it('renders', () => {
		const item = {
			id: 10,
			text: 'Make a component test',
			done: false,
			late: false
		};
		const num = 1;
		const dataCy = 'prio-item';
		
		cy.mount(<PrioItem item={item} num={num} dataCy={dataCy} />);
		cy.get('[data-cy="prio-item"]').should('contain', '1. Make a component test');
	});
});