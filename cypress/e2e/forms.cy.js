describe('This will be testing the form', () =>{
  beforeEach(()=> {
    cy.visit('/forms');
  })
  it('Tests the email form', () => {
    cy.contains(/testing forms/i);
    cy.getDataTest('subscribe-form').find('input').as('subscribeInput');
    cy.get('@subscribeInput').type('test@gmail.com');
    cy.contains(/Successfully subbed: test@gmail.com!/i).should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/Successfully subbed: test@gmail.com!/i).should('exist');
    cy.wait(3000);

    cy.contains(/Successfully subbed: test@gmail.com!/i).should('not.exist');
    cy.get('@subscribeInput').type('test@gmail.net');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/Invalid Email: test@gmail.net!/i).should('exist');
    cy.wait(3000);

    cy.contains(/fail!/i).should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/fail!/i).should('exist');

  })


})