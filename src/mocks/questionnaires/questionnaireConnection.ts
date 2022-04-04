import { graphql } from "msw";

export const getQuestionnaireConnectionMock = graphql.query(
  "QuestionnaireConnection",
  (_req, res, ctx) => {
    return res(
      ctx.data({
        questionnaireConnection: {
          totalCount: 26,
          pageInfo: {
            hasNextPage: true,
            hasPreviousPage: false,
            startCursor: "1",
            endCursor: "10",
            __typename: "PageInfo",
          },
          edges: [
            {
              cursor: "1",
              node: {
                id: 1,
                title: "Questionnaire.1",
                description:
                  "ab accusantium ipsam voluptatibus vero voluptatum beatae et sed eum harum eveniet et fugiat deleniti laborum dolor ea perferendis ea eligendi molestias possimus molestiae quae et aspernatur et aut omnis",
                state: 1,
                startAt: "2021-04-29T16:23:20.874Z",
                endAt: "2021-06-29T15:00:00.000Z",
                questions: [
                  {
                    id: 1,
                    type: 1,
                    text: "expedita",
                    options: [
                      {
                        id: 1,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 2,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 3,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 4,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 2,
                    type: 2,
                    text: "voluptas",
                    options: [
                      {
                        id: 5,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 6,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 7,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 8,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 3,
                    type: 3,
                    text: "officiis",
                    options: [
                      {
                        id: 9,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 10,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 11,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 12,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 4,
                    type: 0,
                    text: "delectus",
                    options: [
                      {
                        id: 13,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 14,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 15,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 16,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                ],
                __typename: "Questionnaire",
              },
              __typename: "QuestionnaireEdge",
            },
            {
              cursor: "2",
              node: {
                id: 2,
                title: "Questionnaire.2",
                description:
                  "voluptatibus magni et nesciunt quo commodi beatae ea error qui fugit minus nostrum dolores eaque quidem beatae error necessitatibus consequatur quibusdam sunt molestiae aut nulla dolor ad alias neque corrupti",
                state: 2,
                startAt: "2021-04-29T16:23:20.874Z",
                endAt: "2021-06-29T15:00:00.000Z",
                questions: [
                  {
                    id: 5,
                    type: 1,
                    text: "expedita",
                    options: [
                      {
                        id: 17,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 18,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 19,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 20,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 6,
                    type: 2,
                    text: "voluptas",
                    options: [
                      {
                        id: 21,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 22,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 23,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 24,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 7,
                    type: 3,
                    text: "officiis",
                    options: [
                      {
                        id: 25,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 26,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 27,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 28,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 8,
                    type: 0,
                    text: "delectus",
                    options: [
                      {
                        id: 29,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 30,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 31,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 32,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                ],
                __typename: "Questionnaire",
              },
              __typename: "QuestionnaireEdge",
            },
            {
              cursor: "3",
              node: {
                id: 3,
                title: "Questionnaire.3",
                description:
                  "optio maiores similique dolorem aut voluptatem autem voluptatem ipsum exercitationem nihil voluptatem nemo illo quis in ut rerum et ad esse ipsa quae esse voluptas perspiciatis aspernatur possimus ut dolorem",
                state: 3,
                startAt: "2021-04-29T16:23:20.874Z",
                endAt: "2021-06-29T15:00:00.000Z",
                questions: [
                  {
                    id: 9,
                    type: 1,
                    text: "expedita",
                    options: [
                      {
                        id: 33,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 34,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 35,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 36,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 10,
                    type: 2,
                    text: "voluptas",
                    options: [
                      {
                        id: 37,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 38,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 39,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 40,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 11,
                    type: 3,
                    text: "officiis",
                    options: [
                      {
                        id: 41,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 42,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 43,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 44,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 12,
                    type: 0,
                    text: "delectus",
                    options: [
                      {
                        id: 45,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 46,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 47,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 48,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                ],
                __typename: "Questionnaire",
              },
              __typename: "QuestionnaireEdge",
            },
            {
              cursor: "4",
              node: {
                id: 4,
                title: "Questionnaire.4",
                description:
                  "quod nesciunt ad doloremque quia velit et vel asperiores voluptates non natus ut omnis excepturi aliquid quis excepturi et quis voluptate reprehenderit velit vitae sed quia numquam aperiam nemo esse",
                state: 0,
                startAt: "2021-04-29T16:23:20.874Z",
                endAt: "2021-06-29T15:00:00.000Z",
                questions: [
                  {
                    id: 13,
                    type: 1,
                    text: "expedita",
                    options: [
                      {
                        id: 49,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 50,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 51,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 52,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 14,
                    type: 2,
                    text: "voluptas",
                    options: [
                      {
                        id: 53,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 54,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 55,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 56,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 15,
                    type: 3,
                    text: "officiis",
                    options: [
                      {
                        id: 57,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 58,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 59,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 60,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 16,
                    type: 0,
                    text: "delectus",
                    options: [
                      {
                        id: 61,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 62,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 63,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 64,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                ],
                __typename: "Questionnaire",
              },
              __typename: "QuestionnaireEdge",
            },
            {
              cursor: "5",
              node: {
                id: 5,
                title: "Questionnaire.5",
                description:
                  "ut inventore hic nihil suscipit aut quidem numquam aut ut aut rem officiis quia et et amet praesentium dolor cupiditate ullam beatae quis molestias ullam et necessitatibus asperiores nam est",
                state: 1,
                startAt: "2021-04-29T16:23:20.874Z",
                endAt: "2021-06-29T15:00:00.000Z",
                questions: [
                  {
                    id: 17,
                    type: 1,
                    text: "expedita",
                    options: [
                      {
                        id: 65,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 66,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 67,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 68,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 18,
                    type: 2,
                    text: "voluptas",
                    options: [
                      {
                        id: 69,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 70,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 71,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 72,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 19,
                    type: 3,
                    text: "officiis",
                    options: [
                      {
                        id: 73,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 74,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 75,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 76,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 20,
                    type: 0,
                    text: "delectus",
                    options: [
                      {
                        id: 77,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 78,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 79,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 80,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                ],
                __typename: "Questionnaire",
              },
              __typename: "QuestionnaireEdge",
            },
            {
              cursor: "6",
              node: {
                id: 6,
                title: "Questionnaire.6",
                description:
                  "ducimus est occaecati rerum vel optio provident et voluptatem magni et est id placeat ducimus consequatur praesentium qui debitis sed tempora eveniet ut aut qui cum sint fuga molestias eum",
                state: 2,
                startAt: "2021-04-29T16:23:20.874Z",
                endAt: "2021-06-29T15:00:00.000Z",
                questions: [
                  {
                    id: 21,
                    type: 1,
                    text: "expedita",
                    options: [
                      {
                        id: 81,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 82,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 83,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 84,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 22,
                    type: 2,
                    text: "voluptas",
                    options: [
                      {
                        id: 85,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 86,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 87,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 88,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 23,
                    type: 3,
                    text: "officiis",
                    options: [
                      {
                        id: 89,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 90,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 91,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 92,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 24,
                    type: 0,
                    text: "delectus",
                    options: [
                      {
                        id: 93,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 94,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 95,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 96,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                ],
                __typename: "Questionnaire",
              },
              __typename: "QuestionnaireEdge",
            },
            {
              cursor: "7",
              node: {
                id: 7,
                title: "Questionnaire.7",
                description:
                  "cupiditate commodi est at animi accusantium porro voluptatem porro consequuntur assumenda aut consectetur atque vitae non illo sint dolorum distinctio repellendus qui nemo et distinctio ducimus rerum incidunt sed quod",
                state: 3,
                startAt: "2021-04-29T16:23:20.874Z",
                endAt: "2021-06-29T15:00:00.000Z",
                questions: [
                  {
                    id: 25,
                    type: 1,
                    text: "expedita",
                    options: [
                      {
                        id: 97,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 98,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 99,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 100,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 26,
                    type: 2,
                    text: "voluptas",
                    options: [
                      {
                        id: 101,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 102,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 103,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 104,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 27,
                    type: 3,
                    text: "officiis",
                    options: [
                      {
                        id: 105,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 106,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 107,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 108,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 28,
                    type: 0,
                    text: "delectus",
                    options: [
                      {
                        id: 109,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 110,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 111,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 112,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                ],
                __typename: "Questionnaire",
              },
              __typename: "QuestionnaireEdge",
            },
            {
              cursor: "8",
              node: {
                id: 8,
                title: "Questionnaire.8",
                description:
                  "magni tempora mollitia et dolores et culpa eum dolore aliquid velit reiciendis ratione non amet deleniti itaque aut eaque impedit sed deleniti sint animi omnis nesciunt dignissimos odit magni ducimus",
                state: 0,
                startAt: "2021-04-29T16:23:20.874Z",
                endAt: "2021-06-29T15:00:00.000Z",
                questions: [
                  {
                    id: 29,
                    type: 1,
                    text: "expedita",
                    options: [
                      {
                        id: 113,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 114,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 115,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 116,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 30,
                    type: 2,
                    text: "voluptas",
                    options: [
                      {
                        id: 117,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 118,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 119,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 120,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 31,
                    type: 3,
                    text: "officiis",
                    options: [
                      {
                        id: 121,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 122,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 123,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 124,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 32,
                    type: 0,
                    text: "delectus",
                    options: [
                      {
                        id: 125,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 126,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 127,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 128,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                ],
                __typename: "Questionnaire",
              },
              __typename: "QuestionnaireEdge",
            },
            {
              cursor: "9",
              node: {
                id: 9,
                title: "Questionnaire.9",
                description:
                  "voluptatum quam voluptas laudantium officiis porro dolorem aut fuga cumque et et soluta adipisci id suscipit eos ea ea eius nulla architecto quia enim occaecati fugiat et quam rem voluptatem",
                state: 1,
                startAt: "2021-04-29T16:23:20.874Z",
                endAt: "2021-06-29T15:00:00.000Z",
                questions: [
                  {
                    id: 33,
                    type: 1,
                    text: "expedita",
                    options: [
                      {
                        id: 129,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 130,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 131,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 132,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 34,
                    type: 2,
                    text: "voluptas",
                    options: [
                      {
                        id: 133,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 134,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 135,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 136,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 35,
                    type: 3,
                    text: "officiis",
                    options: [
                      {
                        id: 137,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 138,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 139,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 140,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 36,
                    type: 0,
                    text: "delectus",
                    options: [
                      {
                        id: 141,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 142,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 143,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 144,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                ],
                __typename: "Questionnaire",
              },
              __typename: "QuestionnaireEdge",
            },
            {
              cursor: "10",
              node: {
                id: 10,
                title: "Questionnaire.10",
                description:
                  "in in vitae consequatur at necessitatibus vero ut officiis quisquam corrupti ut soluta dolores ab recusandae totam ut in est exercitationem esse autem saepe ad quaerat voluptas est vitae odio",
                state: 2,
                startAt: "2021-04-29T16:23:20.874Z",
                endAt: "2021-06-29T15:00:00.000Z",
                questions: [
                  {
                    id: 37,
                    type: 1,
                    text: "expedita",
                    options: [
                      {
                        id: 145,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 146,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 147,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 148,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 38,
                    type: 2,
                    text: "voluptas",
                    options: [
                      {
                        id: 149,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 150,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 151,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 152,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 39,
                    type: 3,
                    text: "officiis",
                    options: [
                      {
                        id: 153,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 154,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 155,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 156,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                  {
                    id: 40,
                    type: 0,
                    text: "delectus",
                    options: [
                      {
                        id: 157,
                        text: "voluptas",
                        __typename: "Option",
                      },
                      {
                        id: 158,
                        text: "repellat",
                        __typename: "Option",
                      },
                      {
                        id: 159,
                        text: "deleniti",
                        __typename: "Option",
                      },
                      {
                        id: 160,
                        text: "adipisci",
                        __typename: "Option",
                      },
                    ],
                    __typename: "Question",
                  },
                ],
                __typename: "Questionnaire",
              },
              __typename: "QuestionnaireEdge",
            },
          ],
          __typename: "QueryQuestionnaireConnection_Connection",
        },
        __typename: "Query",
      })
    );
  }
);
