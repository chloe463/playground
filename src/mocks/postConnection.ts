import { graphql } from "msw";

export const getPostConnectionMock = graphql.query("GetPostConnection", (req, res, ctx) => {
  if (req.body?.variables.after === "0") {
    return res(
      ctx.data({
        postConnection: {
          pageInfo: {
            hasNextPage: true,
            hasPreviousPage: false,
            startCursor: null,
            endCursor: null,
            __typename: "PageInfo",
          },
          totalCount: 100,
          edges: [
            {
              node: {
                id: 1,
                userId: 1,
                title: "architecto",
                body: "facere repudiandae distinctio aut optio aut voluptas aut et esse et inventore voluptate placeat fuga ab est numquam aut rerum placeat repellendus est modi ea ut id accusantium dolor laborum minus asperiores et totam et et doloremque veritatis ut occaecati et suscipit maiores enim quibusdam deserunt sequi autem aut repudiandae unde voluptatum dicta facilis illum laboriosam voluptas distinctio sapiente aut corporis qui ut asperiores qui aut non voluptas possimus omnis dolores sunt consequatur maxime sit ea ducimus rem pariatur itaque dolores et enim similique et quasi et tempora dolorum ut et aspernatur et repellendus qui qui beatae eius velit corrupti",
                __typename: "Post",
              },
              cursor: "1",
              __typename: "PostEdge",
            },
            {
              node: {
                id: 2,
                userId: 1,
                title: "voluptatem",
                body: "incidunt maxime omnis architecto laborum et deleniti error sed veritatis consequatur voluptas dolor perspiciatis voluptas aut minima repudiandae quos veniam ipsam illo voluptatem quo ducimus possimus et dolorem provident sed modi animi qui id reiciendis quis quas totam impedit rerum distinctio consequatur odit eum sint et atque occaecati autem sunt nemo omnis dolorem accusantium alias reprehenderit dolor et est minus expedita est eum reprehenderit atque dignissimos aut et alias quas corporis numquam provident voluptatem atque iste ut deserunt fuga harum aperiam assumenda aut et similique excepturi fugiat quibusdam cum alias provident quia qui et accusamus voluptas nulla sapiente quia veritatis",
                __typename: "Post",
              },
              cursor: "2",
              __typename: "PostEdge",
            },
            {
              node: {
                id: 3,
                userId: 1,
                title: "voluptatum",
                body: "in sit et neque nostrum et deserunt quos optio iusto id sed quia velit laudantium perspiciatis non aliquid voluptates hic aut veritatis ut sapiente enim modi alias maxime repellat est quasi delectus consequatur et minus voluptatem quia est veritatis a amet aut sed ut nihil et deleniti ea ut mollitia aut nisi illum et ullam impedit voluptas et doloremque enim ea nemo explicabo sed fugiat quia unde occaecati dolor delectus exercitationem voluptatem vitae voluptatem voluptatibus adipisci iure et voluptas sit quam vero et perspiciatis sed placeat et velit dolor laudantium velit aut asperiores laborum at quas illo quos quasi aut",
                __typename: "Post",
              },
              cursor: "3",
              __typename: "PostEdge",
            },
            {
              node: {
                id: 4,
                userId: 1,
                title: "voluptatem",
                body: "accusamus nesciunt aut debitis tempore exercitationem ipsum architecto voluptatem quo aliquid ut reprehenderit doloremque quidem esse voluptatem qui perferendis omnis ea beatae beatae incidunt aut aspernatur quia et accusantium architecto sit deserunt quos recusandae rerum fuga esse rerum error recusandae illo id quia voluptas voluptatibus ullam est quo possimus quia ut laboriosam pariatur rerum ad praesentium et voluptatem enim non eius quo qui dolorem quis ut dolorem inventore occaecati sed officia autem quam ut vel qui consequuntur sint minus autem cum doloribus ipsam sit dignissimos vitae maiores fugit maxime velit perferendis id suscipit quis quasi qui aut velit necessitatibus et",
                __typename: "Post",
              },
              cursor: "4",
              __typename: "PostEdge",
            },
            {
              node: {
                id: 5,
                userId: 1,
                title: "cupiditate",
                body: "aut dignissimos repellat est excepturi culpa quia alias ut fuga aut perspiciatis nisi fugit quae nihil cum aliquam veritatis repellat non nulla aut dolore rerum consequatur tenetur fugit quia minus autem earum harum voluptas repellendus maxime aut dolorum quis quae et eum dicta non pariatur placeat error natus voluptas amet illum ullam fugiat minima beatae ea sed accusamus aliquam necessitatibus rerum sunt aliquam corporis voluptatibus eum accusamus fuga unde et perferendis voluptatum soluta quia id ex qui quo exercitationem quis labore consequatur voluptate maiores magnam voluptates et praesentium a aliquid tempora aspernatur dolor veritatis neque ratione distinctio nihil eum quaerat",
                __typename: "Post",
              },
              cursor: "5",
              __typename: "PostEdge",
            },
            {
              node: {
                id: 6,
                userId: 1,
                title: "cupiditate",
                body: "autem sit porro minima et sed officia cum debitis architecto culpa magni rerum consequatur inventore aspernatur id laboriosam et non non et qui distinctio ut qui saepe dolor odio corrupti mollitia et nostrum enim ducimus molestias et facere voluptatem itaque totam fuga quam eos expedita sed veritatis dolor odit quia consequatur necessitatibus perspiciatis reiciendis quibusdam provident illo reiciendis cum aut ipsum consectetur earum ab incidunt unde saepe et dolor cumque accusantium vitae sit velit in qui et id quia qui sunt quos optio dignissimos voluptatem cupiditate officiis est debitis pariatur eos quia labore minima aut consectetur corporis tempora laboriosam quia",
                __typename: "Post",
              },
              cursor: "6",
              __typename: "PostEdge",
            },
            {
              node: {
                id: 7,
                userId: 1,
                title: "voluptates",
                body: "voluptatem sapiente nihil nobis temporibus qui et praesentium atque dolorem nisi iste quisquam voluptates consequatur voluptate error molestiae nisi ipsam omnis commodi voluptatem dolorem placeat ducimus veniam repudiandae neque rem perferendis sequi expedita esse est aut sint consectetur adipisci cum harum modi provident qui quasi est consequatur reiciendis culpa vitae neque vero molestiae qui doloremque consequatur voluptatum et aliquid sit et possimus dignissimos alias nam dolorem adipisci odit dicta eveniet voluptatibus quasi perspiciatis sit labore minus dolore pariatur non dolore reiciendis eligendi officiis rerum eius sunt modi autem et voluptatem laborum assumenda velit omnis aspernatur nam ab fugit ut odit",
                __typename: "Post",
              },
              cursor: "7",
              __typename: "PostEdge",
            },
            {
              node: {
                id: 8,
                userId: 1,
                title: "doloremque",
                body: "quod vero aut libero quae culpa ut corrupti fugiat quisquam repellendus corrupti rerum similique aliquid dignissimos vero aperiam dolore hic odio incidunt delectus voluptatem labore qui voluptas iste odit possimus consequatur explicabo sapiente non dolorem nihil ratione id doloribus quos atque omnis sit eos exercitationem doloremque nobis odit iure eos et id sed ipsa necessitatibus molestias ab saepe dolorum rem exercitationem mollitia deserunt voluptatibus nihil commodi omnis ut aut eos quod sit molestias repellat et magni deserunt vitae ut laborum id ut qui vitae molestias tempora earum tempore dolorum quo voluptatem ea et ut in voluptates facilis facere rerum ipsa",
                __typename: "Post",
              },
              cursor: "8",
              __typename: "PostEdge",
            },
            {
              node: {
                id: 9,
                userId: 1,
                title: "voluptatem",
                body: "vero ab praesentium eum consequatur magni aliquam fuga laborum repellat dolor culpa voluptates qui in qui et est adipisci molestias animi pariatur expedita in similique maiores impedit odio quidem a libero temporibus dolores atque voluptas hic libero odio est dolores voluptas nihil harum iure placeat impedit facere molestiae atque assumenda ex veritatis neque rem nulla dicta et nisi eligendi inventore odio quaerat sed nulla odit aperiam illum omnis reprehenderit et laudantium voluptatem est quod magni occaecati temporibus odit nobis necessitatibus voluptates voluptas ipsam hic nihil nulla sunt eum consequatur similique temporibus doloremque pariatur laborum maxime et non veritatis in earum",
                __typename: "Post",
              },
              cursor: "9",
              __typename: "PostEdge",
            },
            {
              node: {
                id: 10,
                userId: 1,
                title: "doloremque",
                body: "cumque doloribus unde deleniti et voluptatem fugit rerum vero quae natus laboriosam nihil ut occaecati beatae aut voluptatum quod quia ipsam unde vitae ut et dolor non enim qui quos rem quod corrupti dolore voluptate saepe ipsam debitis ducimus non facere consequatur doloribus dolor omnis vitae repudiandae ea magnam eos sunt voluptatem atque omnis quos quam suscipit omnis qui autem occaecati molestiae et molestiae et quibusdam molestiae sit aut perspiciatis et voluptate deserunt error placeat itaque nostrum itaque dignissimos ea dolores quis perferendis soluta rerum necessitatibus voluptatibus quos optio autem corrupti soluta est magni consectetur autem distinctio voluptatem incidunt sint",
                __typename: "Post",
              },
              cursor: "10",
              __typename: "PostEdge",
            },
          ],
          __typename: "QueryPostConnection_Connection",
        },
      })
    );
  }
  return res(
    ctx.data({
      postConnection: {
        totalCount: 100,
        pageInfo: {
          hasNextPage: true,
          hasPreviousPage: true,
          startCursor: null,
          endCursor: null,
        },
        edges: [
          {
            node: {
              id: 11,
              userId: 2,
              title: "voluptatum",
              body: "aut sunt molestias aliquam tenetur deserunt asperiores voluptates et ut a blanditiis dolor quos inventore temporibus unde ipsum repellat modi reiciendis autem itaque eos aspernatur expedita voluptatem debitis sit et aperiam provident odio at voluptates autem eos eos labore consequatur est doloribus rerum quia cumque et blanditiis praesentium deserunt est qui sequi debitis id sed aliquid velit amet est id qui quaerat molestias dolore fuga nemo aut quam sunt et dolorem et eaque ut quo consectetur quis in facilis et placeat repellendus autem nesciunt officiis voluptas exercitationem dolores quae aut magnam reprehenderit sunt ipsa earum sint assumenda delectus qui odio",
            },
            cursor: "11",
          },
          {
            node: {
              id: 12,
              userId: 2,
              title: "asperiores",
              body: "vitae voluptas ut quis facilis magni ducimus blanditiis est omnis dolor soluta eius molestiae error ea voluptas nostrum assumenda id ratione ipsa eum corrupti iste aut aut corrupti et officia expedita reprehenderit mollitia alias numquam blanditiis voluptatem sit expedita nihil nihil quia quas voluptatum rerum ex ea sint neque in temporibus ducimus quasi nisi debitis ipsa similique quibusdam quidem pariatur dolores minus non unde odit sit et laborum voluptatum perspiciatis vel dolore earum sit vel voluptatem quis dolorem et earum minima corrupti animi aut aut sed velit ipsa fugit voluptatem et et a ipsa enim tempora vitae voluptates similique repellendus",
            },
            cursor: "12",
          },
          {
            node: {
              id: 13,
              userId: 2,
              title: "doloremque",
              body: "nihil voluptatem est distinctio voluptatem magnam harum similique fugit consequatur omnis ut temporibus necessitatibus qui quia voluptates non eaque facilis excepturi qui ex ea veniam enim facere rerum voluptatem velit amet enim nobis recusandae assumenda qui alias tempora ratione soluta fugit unde explicabo enim nostrum aliquid sed ut est recusandae culpa pariatur et incidunt aut sit nulla error aperiam sed non totam aut voluptas consequuntur quam voluptas aliquam sunt neque adipisci et voluptatem quia sed maxime amet et et et quia eaque et doloribus sed error eum dicta dolor amet est sapiente in maiores ea amet occaecati quidem qui quisquam",
            },
            cursor: "13",
          },
          {
            node: {
              id: 14,
              userId: 2,
              title: "aspernatur",
              body: "ab facere qui beatae recusandae aut asperiores consectetur dicta laudantium nulla sit sint modi eligendi ut iure sit aut velit vel perspiciatis totam ea in sunt id laborum dolores et ut beatae esse temporibus sequi consectetur unde recusandae non laboriosam sit tenetur tempora excepturi nostrum tenetur ea ut nobis omnis cupiditate in atque eum perferendis in impedit culpa nesciunt occaecati alias vel cumque nihil facilis cupiditate consequatur veritatis aut porro ipsa recusandae neque quas quia et explicabo eos iure fuga voluptas eaque rem deleniti omnis aliquam quas illo quas aperiam sit maiores molestias rem nam sed labore labore vel doloremque",
            },
            cursor: "14",
          },
          {
            node: {
              id: 15,
              userId: 2,
              title: "laudantium",
              body: "iusto voluptate sunt maiores quisquam ipsam quae repellat exercitationem suscipit nobis ut ex sunt occaecati assumenda consectetur tempora soluta ut voluptas ipsam autem molestiae fuga dolor ut ea ut non voluptatem et et quia repellendus commodi illo tempore maiores ut sed et doloribus voluptas alias quidem veritatis sint in dignissimos aut consequuntur est voluptas dolor voluptatem sapiente placeat molestiae fugit odit eveniet fugit vel qui distinctio et autem et molestias non ut consequatur hic sed officia debitis dolor non nulla et nisi natus quia ad saepe rem dignissimos voluptates eos corrupti dolorem nisi et ea nulla quasi minima consequatur eligendi",
            },
            cursor: "15",
          },
          {
            node: {
              id: 16,
              userId: 2,
              title: "voluptatem",
              body: "deleniti omnis qui ullam necessitatibus iusto vitae quam vel quia repellat est perferendis harum eveniet id consequatur eveniet ipsa quia perspiciatis impedit quia tenetur voluptate odio corrupti ex labore qui non alias molestiae autem alias ipsa quod enim quasi qui deleniti veniam et quis aut voluptatem non necessitatibus aut reprehenderit dolores et non non non ea quas dolorem doloremque autem perferendis quia aut ut eos sunt est iure assumenda reiciendis totam reiciendis quos expedita non harum sunt et neque ea velit ut quia nam voluptatem provident distinctio quisquam sed assumenda quisquam quia quibusdam quis error sint recusandae cupiditate repellat eum",
            },
            cursor: "16",
          },
          {
            node: {
              id: 17,
              userId: 2,
              title: "laboriosam",
              body: "nihil doloribus explicabo dolor maiores deleniti consectetur ducimus molestiae nobis at voluptate officiis eum autem vitae minima officia doloribus earum nihil voluptates explicabo harum voluptatibus illo omnis quae voluptatem dolor et iusto est a in consequuntur a voluptatem quae repellat natus enim repudiandae possimus voluptatem aliquid veritatis placeat quia facilis harum voluptatem tenetur sit in dolore et est et id distinctio tempore ea aperiam qui quasi iste et amet qui iusto iusto fuga non esse possimus quisquam et mollitia nihil est iure illo libero quos eos incidunt nesciunt aliquid aperiam omnis qui impedit fuga qui omnis corporis nulla aut eum",
            },
            cursor: "17",
          },
          {
            node: {
              id: 18,
              userId: 2,
              title: "architecto",
              body: "est quia tempore iure ad recusandae sint a ullam rerum officia aliquid dignissimos sunt quos rerum aut vero sunt voluptas nam aut eveniet ut sed et quas necessitatibus magni aut pariatur aut sit hic accusantium repellendus maxime blanditiis repellendus nisi est delectus nihil id voluptatem omnis quidem id nobis autem sunt expedita quod omnis temporibus aut maiores nemo iusto praesentium exercitationem voluptatem adipisci voluptatem rerum mollitia harum delectus maxime ipsum ea veritatis cum occaecati ut voluptatem quis sed possimus voluptatum temporibus id aspernatur soluta qui eum et ipsa voluptatem aut quasi assumenda nihil expedita accusamus nobis laudantium omnis aut in",
            },
            cursor: "18",
          },
          {
            node: {
              id: 19,
              userId: 2,
              title: "voluptates",
              body: "minima dolorem porro ex hic ea voluptatem quidem eius quo magni enim voluptatem aut laudantium debitis inventore reiciendis sint voluptate sed fugiat velit est repudiandae magni itaque alias nostrum repudiandae exercitationem sequi eos quo libero adipisci explicabo ea dolores et ea nam incidunt voluptatem reiciendis laboriosam eum nesciunt ab ut dolor veritatis optio id eaque sunt delectus et maxime ut quia est ut necessitatibus aliquam fugit sequi dolor earum dolorum inventore aut nobis sint iste esse consequatur laboriosam quasi architecto ipsam tempore maiores delectus fuga magni nihil quae dolorem quibusdam vel nobis sed illo sed occaecati qui ipsam numquam eaque",
            },
            cursor: "19",
          },
          {
            node: {
              id: 20,
              userId: 2,
              title: "asperiores",
              body: "dolor exercitationem corporis qui placeat sint sunt nostrum eligendi facilis nihil eum natus consequatur dignissimos quia nam ut maiores inventore animi molestias aspernatur animi perferendis impedit vel ut ea autem reiciendis unde reiciendis fugiat et velit maxime sint omnis explicabo porro quis sed amet vitae eos eum doloremque sapiente aperiam repellendus aut nihil qui eum voluptate qui rem error dolorem perferendis qui voluptas architecto hic minus at qui ducimus porro molestias nemo est beatae consequatur nesciunt ducimus dolorem ipsa doloribus est laboriosam dolor ab molestiae libero neque omnis id optio id et voluptatem quo nisi doloremque aperiam eum sit qui",
            },
            cursor: "20",
          },
        ],
      },
    })
  );
});
