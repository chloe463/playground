describe("LayoutAnimation page tests", () => {
  it("display 3 pills by default", () => {
    cy.visit("/layout-animation");

    cy.get(".pill").should(($p) => {
      expect($p).to.have.length(3);
    });
  });

  it("display more pills by clicking add button", () => {
    cy.visit("/layout-animation");

    cy.get("button#add-button").click();

    cy.get(".pill").should(($p) => {
      expect($p.length).to.be.greaterThan(3);
    });
  });

  it("selected pills will appear on gray box", () => {
    cy.visit("/layout-animation");

    cy.get(".pill").first().click();

    cy.get(".selected-pill").should(($p) => {
      expect($p).to.have.length(1);
    });
  });
});
