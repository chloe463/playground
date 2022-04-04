import { graphql } from "msw";

export const getCommentsMock = graphql.query("GetComments", (req, res, ctx) => {
  return res(
    ctx.data({
      comments: [
        {
          id: 2,
          postId: 2,
          name: "Debra Dibbert",
          email: "Guy@example.com",
          body: "dolorem et nihil laboriosam veniam aut dolor ipsa dolorem aut et nam nihil corrupti animi ut iste illo soluta qui deserunt nam voluptatem et dicta aut nemo ea asperiores vel ut quos esse eveniet quod rerum culpa mollitia velit sequi incidunt saepe quae et libero maxime commodi vero nisi laboriosam sunt id veniam hic ipsa ex tenetur alias non odio qui natus ut qui iste impedit et magni qui atque ipsum exercitationem tenetur ipsum qui sit eveniet voluptates quia aut consequatur ratione excepturi qui consequatur aut tempora maxime aut ratione quam magni nulla non illo facilis similique qui et est",
          __typename: "Comment",
        },
        {
          id: 3,
          postId: 2,
          name: "Mrs. Dana Mann",
          email: "Dangelo@example.com",
          body: "et sapiente est nobis aliquam ipsam sit ea sit iure enim ut consequuntur consequuntur neque accusamus ut illo non ratione rem culpa maiores et deserunt sint laboriosam dolor aut et explicabo pariatur quia sunt molestiae sint in totam quam consequatur adipisci eum quia aspernatur ipsum voluptatem vel magni assumenda explicabo nihil et numquam blanditiis doloremque incidunt ea sit aut in facere qui sunt illum iure saepe animi hic accusamus placeat assumenda aut voluptatibus aliquid dicta accusantium incidunt omnis earum quis rerum mollitia quasi quae rerum corporis ducimus optio ipsum atque rerum alias quas debitis animi quis deleniti numquam iusto ut",
          __typename: "Comment",
        },
        {
          id: 4,
          postId: 2,
          name: "Toni Leffler",
          email: "Cynthia@example.com",
          body: "fuga vitae neque est in modi voluptatem voluptates distinctio et ut aut assumenda minima aut repellendus inventore sed quam quia qui suscipit suscipit fuga quos ea corrupti ad quo omnis qui molestias voluptatibus qui iusto voluptatem ipsum accusantium enim iure et doloremque enim sequi qui reprehenderit mollitia placeat vitae vero ut reprehenderit corporis quo consequatur dolorum provident voluptatem quos suscipit minus eum beatae nisi quia hic ullam vel fugit et et nam debitis et deserunt quas quas sed ducimus mollitia reprehenderit aut nam eius ut accusantium nihil dolor ratione provident omnis eos aspernatur omnis pariatur nobis corporis dolor sit ducimus",
          __typename: "Comment",
        },
        {
          id: 5,
          postId: 2,
          name: "Sheryl Ebert",
          email: "Arnulfo@example.com",
          body: "aperiam vel ut qui occaecati officiis quod amet aliquam eum officia eius eum quia possimus et quibusdam eum rerum voluptas nesciunt sit sit occaecati aut veritatis dolorum officiis aut voluptates maiores ut corrupti magnam alias molestias iste neque illo fugit ab magnam culpa quam qui aut laborum recusandae ut alias voluptas tempore qui quisquam voluptatem adipisci qui non et sed fuga aut modi aut inventore quidem eaque facilis tenetur quibusdam deleniti possimus eos possimus et quo optio rerum ut quaerat quasi distinctio unde aut eum dolor temporibus qui voluptatem explicabo occaecati ut et rem mollitia vero et non in est",
          __typename: "Comment",
        },
        {
          id: 6,
          postId: 2,
          name: "Ms. John Purdy",
          email: "Meta@example.com",
          body: "aut odio sint aut totam aut dolorum provident sint provident deleniti quasi tempore molestiae numquam itaque sit officia suscipit consequuntur natus earum aut molestias repudiandae aspernatur quos porro unde quia sapiente excepturi ut exercitationem voluptates repudiandae iure voluptatem voluptatem sapiente et id ut ab vel ullam quia autem autem omnis quos beatae vel magni sunt voluptas consequatur in molestiae eligendi officia repellat accusamus fuga distinctio omnis enim repellendus voluptas amet delectus ut rerum perspiciatis consectetur magnam quis delectus sed fugiat saepe optio maiores non consectetur repellendus distinctio magnam quibusdam quod eius maxime provident aut voluptas aperiam quasi aliquid cum commodi",
          __typename: "Comment",
        },
      ],
    })
  );
});
