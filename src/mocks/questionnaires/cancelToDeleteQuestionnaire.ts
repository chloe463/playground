import { graphql } from "msw";

export const cancelToDeleteQuestionnaireMock = graphql.mutation("CancelToDeleteQuestionnaire", (req, res, ctx) => {
  return res(
    ctx.data({
      cancelToDeleteQuestionnaire: {
        questionnaire: {
          id: 1,
          title: "Questionnaire.1",
          description: "ab accusantium ipsam voluptatibus vero voluptatum beatae et sed eum harum eveniet et fugiat deleniti laborum dolor ea perferendis ea eligendi molestias possimus molestiae quae et aspernatur et aut omnis",
          state: 1,
          startAt: "2021-04-29T16:23:20.874Z",
          endAt: "2021-06-29T15:00:00.000Z",
          questions: [
            {
              id: 1,
              __typename: "Question"
            },
            {
              id: 2,
              __typename: "Question"
            },
            {
              id: 3,
              __typename: "Question"
            },
            {
              id: 4,
              __typename: "Question"
            }
          ],
          __typename: "Questionnaire"
        },
        __typename: "CancelToDeleteQuestionnairePayload"
      }
    })
  );
});
