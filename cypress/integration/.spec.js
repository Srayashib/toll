// cypress/integration/example_spec.js

describe('My First Test', () => {
    it('Visits the homepage and clicks a button', () => {
      // Visit your application's homepage
      cy.visit('/');
  
      // Perform actions and assertions
      cy.get('#calculateToll').click();
  
      // Validate the result, for example, check if an element exists
      cy.get('#tollDetails').should('exist');
    });
  });

  