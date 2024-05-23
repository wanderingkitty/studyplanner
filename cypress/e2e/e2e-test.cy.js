describe('Todo Application - Item-komponent', () => {
  // Som en student vill jag kunna ändra texten för en todo item, så att jag kan uppdatera den om något nytt händer
  it('tillåter redigering och uppdatering av en todo-item', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.edit-icon[title="Ändra"]').first().click();
    cy.get('input[type="text"]').should('be.visible');
    cy.get('input[type="text"]').first().clear().type('Uppdaterad todo');
    cy.get('.save-btn[title="Spara"]').first().click();
    cy.get('label').first().should('have.text', 'Uppdaterad todo');
  });
  
  // Som en student vill jag kunna ta bort en todo item, eftersom saker kan ändras
  
  it('möjliggör borttagning av en todo-item', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.item').its('length').should('be.gt', 0);
    cy.get('.item').first().invoke('attr', 'data-testid').then((todoId) => {
      cy.get(`.item[data-testid="${todoId}"] .delete-icon[title="Ta bort"]`).click();
      cy.get(`.item[data-testid="${todoId}"]`).should('not.exist');
    });
  });
});

describe('Todo Application - Huvudkomponent', () => {
  // Som en student vill jag att veckans alla dagar ska visas, så att jag kan välja fritt när jag vill göra mina uppgifter
  it('visar alla veckans dagar', () => {
    cy.visit('http://localhost:5173/');
    const dagarIveckan = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"]
    dagarIveckan.forEach(dag => {
      cy.contains(dag).should('exist');
    });
  });
});

describe('Todo Application - Prioriteringslista', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/'); 
  });
  
  it('renderar prioriteringslistan', () => {
    cy.get('.prio-list').should('exist'); 
    cy.get('.prio-list h2').should('contain', 'Vad ska jag göra nu?'); 
  });
  
  // Som en student vill jag kunana söka efter todo items som innehåller en viss text, så att jag lätt kan se om en viss sak finns med i priolistan

  it('filtrerar todo items baserat på sökning', () => {
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
});
