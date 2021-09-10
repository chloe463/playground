declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      // eslint-disable-next-line no-undef
      getByDataCy(selector: string, options?: Partial<Loggable & Timeoutable & Withinable & Shadow>): Chainable;
    }
  }
}

Cypress.Commands.add("getByDataCy", (selector, options) => {
  return cy.get(`[data-cy=${selector}]`, options);
});

export { };

