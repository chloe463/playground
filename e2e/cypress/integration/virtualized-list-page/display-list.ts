describe("Virtualized page tests", () => {
  it("should display a list of posts", () => {
    cy.visit("/virtualized-list");
    cy.getByDataCy("link-to-post-detail").should("have.length", 10);
    cy.getByDataCy("link-to-post-detail").first().click();
    cy.wait(300);
    cy.getByDataCy("post-detail-card-title").should("have.text", "1. architecto");
  });
});
