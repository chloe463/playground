describe("Questionnaire page tests", () => {
  it("should display a list of questionnaires", () => {
    cy.visit("/questionnaires");
    cy.getByDataCy("questionnaire-list-item").should("have.length", 10);
  });
});
