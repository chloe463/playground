describe("Virtualized page tests", () => {
  beforeEach(() => {
    cy.mockQuery({
      operationName: "GetPostConnection",
      fixture: "queries/posts.json",
      variables: {
        first: 10,
        after: "0",
        query: "",
      },
    });

    cy.mockQuery({
      operationName: "GetPostConnection",
      fixture: "queries/posts.json",
      variables: {
        first: 10,
        after: "10",
        query: "",
      },
    });

    cy.mockQuery({
      operationName: "GetComments",
      fixture: "queries/comments.json",
      variables: {
        postId: 1
      },
    })
  });

  it("should display a list of posts", () => {
    cy.visit("/virtualized-list");
    cy.getByDataCy("link-to-post-detail").should("have.length", 10);
    cy.getByDataCy("link-to-post-detail").first().click();
    cy.wait(300);
    cy.getByDataCy("post-detail-card-title").should("have.text", "1. architecto");
  });
});
