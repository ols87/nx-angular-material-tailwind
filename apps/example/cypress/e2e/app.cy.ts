describe('example-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should show toolbar', () => {
    cy.get('mat-toolbar').should('have.class', 'mat-toolbar');
  });

  it('should show "Hello World"', () => {
    cy.get('#helloWorld').contains('Hello World');
  });
});
