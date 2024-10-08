describe('Fundamentals Test', () => {
  beforeEach(() => {
    cy.visit('/fundamentals/');
  })
  it('Contains header text', () => {
    cy.getDataTest('fundamentals-header').contains(/Testing Fundamentals/i);
  })

  it('Has correct accordion functionality', () => {
    var accordion_btn_1 = '[data-test="accordion-item-1"] div[role="button"]';
    cy.visit('/fundamentals');
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible');
    cy.get(accordion_btn_1).click();
    cy.contains(/Your tests will exist in a describe block/).should('be.visible');
    cy.get(accordion_btn_1).click();
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible');


  })
})