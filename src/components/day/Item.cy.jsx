import Item from "./Item";
import { useStore } from '../../data/store.js';

describe('Item', () => {
	
	const todoItem = { id: 1, day: 'mo', done: true, late: false, text: 'Göra klart inlämning' };
	
	beforeEach(() => {
		cy.mount(<Item item={todoItem} />);
	});
	
	it('renders correctly with given props', () => {
		cy.get('.item').should('be.visible');
		cy.get('.edit-icon').should('be.visible');
		cy.get('.delete-icon').should('be.visible');
		cy.get('label').should('contain', todoItem.text);
	});
	
	it('can toggle todo', () => {
		cy.mount(<Item item={todoItem} />);
		cy.get('input[type="checkbox"]').click();
	});
	
	it('activates edit mode when edit icon is clicked', () => {
		cy.get('input[type="text"]').should('not.exist');
		cy.get('.edit-icon').click();
		cy.get('input[type="text"]').should('be.visible');
		cy.get('.save-btn').contains('Spara').should('be.visible');
		cy.get('button').contains('Cancel').should('be.visible');
	});
	
	it('toggles the completion status of the item when checkbox is clicked', () => {
		cy.get('input[type="checkbox"]').click();
	});
	
	
	// it('saves the edited text when save is clicked', () => {
	// 	cy.get('.edit-icon').click();
	// 	const updatedText = 'Updated Task Text';
	// const todosSnapshot = useStore.getState().todos
	// const updatedTodo = todosSnapshot.find(todo => todo.id === testItem.id )
	// expect(updatedTodo.text).to.equal('Göra klart inlämning')
	// 	cy.get('input[type="text"]').clear().type(updatedText);
	// 	cy.get('.save-btn').contains('Spara').click();
	// 	cy.get('label').should('contain', updatedText);
	// 	cy.get('input[type="text"]').should('not.exist');
	// });
	
	
	it('can edit todo', () => {
		cy.mount(<Item item={todoItem} />);
		cy.get('.edit-icon').contains('✍️').click();
		cy.get('button').contains('Spara').click();
	});
	

	it('saves edited text in todo', () => {
		const updatedText = 'Updated Task Text';
	
		cy.get('.edit-icon').click();
		cy.get('input[type="text"]').clear().type(updatedText);
		cy.get('.save-btn').contains('Spara').click();
	
		// Wait for the save operation to complete
		cy.get('input[type="text"]').should('not.exist'); // Checks that edit mode is exited
	
		// Check that the label contains the updated text
		cy.get('label').should('contain', updatedText);
	});
	
	
	it('can remove todo', () => {
		cy.get('.delete-icon').contains('🗑️').click();	
	});
	
});



