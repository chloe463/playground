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
    cy.contains("Virtualized List example");
    cy.contains("architecto");
    cy.contains("facere repudiandae distinctio aut optio aut voluptas aut et esse et inventore voluptate placeat fuga ab est numquam aut rerum placeat repellendus est modi ea ut id accusantium dolor laborum minus asperiores et totam et et doloremque veritatis ut occaecati et suscipit maiores enim quibusdam deserunt sequi autem aut repudiandae unde voluptatum dicta facilis illum laboriosam voluptas distinctio sapiente aut corporis qui ut asperiores qui aut non voluptas possimus omnis dolores sunt consequatur maxime sit ea ducimus rem pariatur itaque dolores et enim similique et quasi et tempora dolorum ut et aspernatur et repellendus qui qui beatae eius velit corrupti");
    cy.contains("architecto").click();
    cy.contains("Debra Dibbert");
    cy.contains("Mrs. Dana Mann");
  });
});
