describe('example-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should show toolbar', () => {
    cy.get('mat-toolbar').should('have.class', 'mat-toolbar mat-primary');
  });

  it('should show "Hello World"', () => {
    cy.get('#helloWorld').contains('Hello World');
  });
});
