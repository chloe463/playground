describe("Questionnaire page - delete test", () => {
  it("should delete a questionnaire", () => {
    cy.visit("/questionnaires");
    cy.getByDataCy("questionnaire").should("have.length", 10);
    cy.getByDataCy("questionnaire").first().trigger("mouseover");
    cy.wait(300);
    cy.getByDataCy("delete-button-1").click();
    cy.getByDataCy("submit-deletion").click();
    cy.getByDataCy("questionnaire").should("have.length", 9);
    cy.getByDataCy("complete-snackbar").should("be.visible");
  });

  it("should cancel to delete a questionnaire", () => {
    cy.visit("/questionnaires");
    cy.getByDataCy("questionnaire").should("have.length", 10);
    cy.getByDataCy("questionnaire").first().trigger("mouseover");
    cy.getByDataCy("delete-button-1").click();
    cy.wait(300);
    cy.getByDataCy("submit-deletion").click();
    cy.getByDataCy("questionnaire").should("have.length", 9);
    cy.wait(300);
    cy.getByDataCy("complete-snackbar").should("be.visible");
    cy.getByDataCy("undo-button").click();
    cy.getByDataCy("questionnaire").should("have.length", 10);
  });
});
