import { CyHttpMessages } from "cypress/types/net-stubbing";
import isEqual from "lodash/isEqual";

export const GRAPHQL_SERVER_URI = `${Cypress.env("NEXT_PUBLIC_GRAPHQL_SERVER_URI")}/graphql`;

// Utility to match GraphQL mutation based on the operation name
const checkOperationName = (req: CyHttpMessages.IncomingHttpRequest, operationName: string) => {
  const { body } = req;
  return body.hasOwnProperty("operationName") && body.operationName === operationName;
};

const checkVariables = (req: CyHttpMessages.IncomingHttpRequest, variables: unknown) => {
  const { body } = req;
  if (!body.hasOwnProperty("variables")) return false;
  return isEqual(body.variables, variables);
};

export type MockOparationParam = {
  operationName: string;
  fixture: string;
  variables?: unknown;
  delay?: number;
};

export const mockOperation = (
  req: CyHttpMessages.IncomingHttpRequest,
  { operationName, fixture, variables, delay }: MockOparationParam
) => {
  if (!checkOperationName(req, operationName)) return;
  if (variables && !checkVariables(req, variables)) return;

  req.alias = operationName;

  req.reply({
    fixture,
    delay,
  });
};
