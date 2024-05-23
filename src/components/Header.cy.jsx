import Header from "./Header";

describe('Header', () => {
    it('shows the header and its components', () => {
        cy.mount(<Header />);
        cy.get('h1').should('be.visible').and('contain', 'Min vecka');  
        cy.get('button.restart-week').should('be.visible').and('contain', 'Starta om vecka');  
    });
});
