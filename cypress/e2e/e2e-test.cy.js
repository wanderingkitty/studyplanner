//Test based on user stories

describe('Todo Application - Item Component', () => {
  // Som en student vill jag kunna ändra texten för en todo item, så att jag kan uppdatera den om något nytt händer

  it('should edit a todo item and verify the update', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.edit-icon[title="Ändra"]').first().click();
    cy.get('input[type="text"]').should('exist');
    cy.get('input[type="text"]').first().clear().type('Updated todo');
    cy.get('.save-btn[title="Spara"]').first().click();
    cy.get('label').first().should('contain', 'Updated todo');
  });
})

//Som en student vill jag kunna ta bort en todo item, eftersom saker kan ändras.

  it('should remove a todo item', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.item').should('have.length.greaterThan', 0);
    cy.get('.item').first().invoke('attr', 'data-testid').then((todoId) => {
      cy.get(`.item[data-testid="${todoId}"] .delete-icon[title="Ta bort"]`).click();
      cy.get(`.item[data-testid="${todoId}"]`).should('not.exist');
    });
  });


describe('Todo Application - Main Component', () => {

  // Som en student vill jag att veckans alla dagar ska visas, så att jag kan välja fritt när jag vill göra mina uppgifter.

  it('should render all days of the week', () => {
    cy.visit('http://localhost:5173/');
    const dayNames = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"]
    dayNames.forEach(day => {
      cy.contains(day).should('exist');
    });
  });
}); 

describe('Todo Application - PrioList Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/'); 
  });

  it('should render the priority list', () => {
    cy.get('.prio-list').should('exist'); 
    cy.get('.prio-list h2').should('contain', 'Vad ska jag göra nu?'); 
  });
});

// Som en student vill jag kunna söka efter todo items som innehåller en viss text, så att jag lätt kan se om en viss sak finns med i priolistan.

it('should filter todo items based on search input', () => {
  const searchText = 'Övning';
  cy.visit('http://localhost:5173/');
  cy.get('.prio-list').should('be.visible');
  cy.get('[data-testid="search-input"]').type(searchText);

  cy.get('body').then(($body) => {
    if ($body.find('[data-cy="prio-item"]').length) {
      cy.get('[data-testid="prio-items"] [data-cy="prio-item"]').should('have.length.greaterThan', 0)
        .each(($item) => {
          cy.wrap($item).should('contain', searchText);
        });
    } 
  });
});

