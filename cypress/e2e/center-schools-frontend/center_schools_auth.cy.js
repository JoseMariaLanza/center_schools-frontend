describe('Center Schools Auth API - Django Backend', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Home page can be opened', () => {
    cy.contains('Asociación de Escuelas Center de TaeKwon-Do');
    cy.contains('Home');
    cy.contains('Schools');
    cy.contains('History');
    cy.contains('News');
  });

  it('User can login', () => {
    cy.get('[id=login]').click();
    cy.get('input:first').type('lanza.josemaria@gmail.com');
    cy.get('input:last').type('123456');
    cy.get('#login-button').click();
  });
});
