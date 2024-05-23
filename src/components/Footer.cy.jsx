import Footer from "./Footer";
import { getToday } from "../utils/date"; 

describe('Footer', () => {
    it('shows the footer and its components', () => {
		const currentDayName = getToday()
        cy.mount(<Footer />);
		cy.get('p').should('be.visible').and('contain', `Idag är det: ${currentDayName}`)
		cy.get('p')
       
    });
});