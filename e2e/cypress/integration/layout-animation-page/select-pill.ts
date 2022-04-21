describe("LayoutAnimation page tests", () => {
  it("display 3 pills by default", () => {
    cy.visit("/layout-animation");
    cy.getByDataCy("pill").should("have.length", 3);
  });

  it("display more pills by clicking add button", () => {
    cy.visit("/layout-animation");
    cy.getByDataCy("add-button").click();
    cy.wait(500).getByDataCy("pill").should("have.length.gt", 3);
  });

  it("selected pills will appear on gray box", () => {
    cy.visit("/layout-animation");
    cy.getByDataCy("pill").first().click();
    cy.wait(500).getByDataCy("selected-pill").should("have.length", 1);
  });
});
