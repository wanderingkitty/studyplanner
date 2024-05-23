// Day.cy.jsx
import React from 'react';
import Main from './Main';

describe('Day component tests with Zustand', () => {
    beforeEach(() => {
        cy.mount(<Main />);
    });

    it('displays all days with their respective names', () => {
		
        const days = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];

        days.forEach(day => {
            cy.contains('h2', day).should('be.visible');
        });
    });
});
