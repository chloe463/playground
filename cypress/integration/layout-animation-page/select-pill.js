describe("LayoutAnimation page tests", () => {
  it("display 3 pills by default", () => {
    cy.visit("/layout-animation");

    cy.wait(600);
    cy.get(".pill").should(($p) => {
      expect($p).to.have.length(3);
    });
  });

  it("display more pills by clicking add button", () => {
    cy.visit("/layout-animation");

    cy.wait(1000);
    cy.get("button#add-button").click();

    cy.wait(1000);
    cy.get(".pill").should(($p) => {
      expect($p.length).to.be.greaterThan(3);
    });
  });
});
