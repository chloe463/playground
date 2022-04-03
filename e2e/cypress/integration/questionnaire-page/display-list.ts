describe("Questionnaire page tests", () => {
  it("should display a list of questionnaires", () => {
    cy.visit("/questionnaires");
    cy.getByDataCy("questionnaire").should("have.length", 10);
  });
});
