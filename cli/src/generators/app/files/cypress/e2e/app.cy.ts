describe('example-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should show Hello World', () => {
    cy.get('#helloWorld').contains('Hello World');
  });
});
