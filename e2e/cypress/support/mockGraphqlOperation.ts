import { GRAPHQL_SERVER_URI, MockOparationParam, mockOperation } from "../utils/graphql";

declare global {
  namespace Cypress {
    interface Chainable {
      mockQuery(options: MockOparationParam): void;
      mockMutation(options: MockOparationParam): void;
    }
  }
}

Cypress.Commands.add("mockQuery", (options: MockOparationParam) => {
  cy.intercept("POST", GRAPHQL_SERVER_URI, (req) => {
    mockOperation(req, options);
  })
});

Cypress.Commands.add("mockMutation", (options: MockOparationParam) => {
  cy.intercept("POST", GRAPHQL_SERVER_URI, (req) => {
    mockOperation(req, options);
  })
});
