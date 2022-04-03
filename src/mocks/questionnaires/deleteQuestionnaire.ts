import { graphql } from "msw";

export const deleteQuestionnaireMock = graphql.mutation("DeleteQuestionnaire", (req, res, ctx) => {
  console.log(req);
  return res(
    ctx.data({
      deleteQuestionnaire: {
        id: req.variables.id,
        result: true,
        __typename: "DeleteQuestionnairePayload"
      }
    })
  );
});
