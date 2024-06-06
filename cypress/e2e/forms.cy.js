describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test suscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form")
      .find("input")
      .type("tomas.duque@globant.com");
    cy.contains(/Successfully subbed: tomas.duque@globant.com!/i).should(
      "not.exist"
    );
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: tomas.duque@globant.com!/i).should(
      "exist"
    );
  });
});
