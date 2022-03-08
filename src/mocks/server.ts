import { graphql } from "msw";
import { setupServer } from "msw/node";

const handlers = [
  graphql.query("GetPostConnection", (req, res, ctx) => {
    return res(
      ctx.data({
        "postConnection": {
          "pageInfo": {
            "hasNextPage": true,
            "hasPreviousPage": false,
            "startCursor": null,
            "endCursor": null,
            "__typename": "PageInfo"
          },
          "totalCount": 100,
          "edges": [
            {
              "node": {
                "id": 1,
                "userId": 1,
                "title": "architecto",
                "body": "facere repudiandae distinctio aut optio aut voluptas aut et esse et inventore voluptate placeat fuga ab est numquam aut rerum placeat repellendus est modi ea ut id accusantium dolor laborum minus asperiores et totam et et doloremque veritatis ut occaecati et suscipit maiores enim quibusdam deserunt sequi autem aut repudiandae unde voluptatum dicta facilis illum laboriosam voluptas distinctio sapiente aut corporis qui ut asperiores qui aut non voluptas possimus omnis dolores sunt consequatur maxime sit ea ducimus rem pariatur itaque dolores et enim similique et quasi et tempora dolorum ut et aspernatur et repellendus qui qui beatae eius velit corrupti",
                "__typename": "Post"
              },
              "cursor": "1",
              "__typename": "PostEdge"
            },
            {
              "node": {
                "id": 2,
                "userId": 1,
                "title": "voluptatem",
                "body": "incidunt maxime omnis architecto laborum et deleniti error sed veritatis consequatur voluptas dolor perspiciatis voluptas aut minima repudiandae quos veniam ipsam illo voluptatem quo ducimus possimus et dolorem provident sed modi animi qui id reiciendis quis quas totam impedit rerum distinctio consequatur odit eum sint et atque occaecati autem sunt nemo omnis dolorem accusantium alias reprehenderit dolor et est minus expedita est eum reprehenderit atque dignissimos aut et alias quas corporis numquam provident voluptatem atque iste ut deserunt fuga harum aperiam assumenda aut et similique excepturi fugiat quibusdam cum alias provident quia qui et accusamus voluptas nulla sapiente quia veritatis",
                "__typename": "Post"
              },
              "cursor": "2",
              "__typename": "PostEdge"
            },
            {
              "node": {
                "id": 3,
                "userId": 1,
                "title": "voluptatum",
                "body": "in sit et neque nostrum et deserunt quos optio iusto id sed quia velit laudantium perspiciatis non aliquid voluptates hic aut veritatis ut sapiente enim modi alias maxime repellat est quasi delectus consequatur et minus voluptatem quia est veritatis a amet aut sed ut nihil et deleniti ea ut mollitia aut nisi illum et ullam impedit voluptas et doloremque enim ea nemo explicabo sed fugiat quia unde occaecati dolor delectus exercitationem voluptatem vitae voluptatem voluptatibus adipisci iure et voluptas sit quam vero et perspiciatis sed placeat et velit dolor laudantium velit aut asperiores laborum at quas illo quos quasi aut",
                "__typename": "Post"
              },
              "cursor": "3",
              "__typename": "PostEdge"
            },
            {
              "node": {
                "id": 4,
                "userId": 1,
                "title": "voluptatem",
                "body": "accusamus nesciunt aut debitis tempore exercitationem ipsum architecto voluptatem quo aliquid ut reprehenderit doloremque quidem esse voluptatem qui perferendis omnis ea beatae beatae incidunt aut aspernatur quia et accusantium architecto sit deserunt quos recusandae rerum fuga esse rerum error recusandae illo id quia voluptas voluptatibus ullam est quo possimus quia ut laboriosam pariatur rerum ad praesentium et voluptatem enim non eius quo qui dolorem quis ut dolorem inventore occaecati sed officia autem quam ut vel qui consequuntur sint minus autem cum doloribus ipsam sit dignissimos vitae maiores fugit maxime velit perferendis id suscipit quis quasi qui aut velit necessitatibus et",
                "__typename": "Post"
              },
              "cursor": "4",
              "__typename": "PostEdge"
            },
            {
              "node": {
                "id": 5,
                "userId": 1,
                "title": "cupiditate",
                "body": "aut dignissimos repellat est excepturi culpa quia alias ut fuga aut perspiciatis nisi fugit quae nihil cum aliquam veritatis repellat non nulla aut dolore rerum consequatur tenetur fugit quia minus autem earum harum voluptas repellendus maxime aut dolorum quis quae et eum dicta non pariatur placeat error natus voluptas amet illum ullam fugiat minima beatae ea sed accusamus aliquam necessitatibus rerum sunt aliquam corporis voluptatibus eum accusamus fuga unde et perferendis voluptatum soluta quia id ex qui quo exercitationem quis labore consequatur voluptate maiores magnam voluptates et praesentium a aliquid tempora aspernatur dolor veritatis neque ratione distinctio nihil eum quaerat",
                "__typename": "Post"
              },
              "cursor": "5",
              "__typename": "PostEdge"
            },
            {
              "node": {
                "id": 6,
                "userId": 1,
                "title": "cupiditate",
                "body": "autem sit porro minima et sed officia cum debitis architecto culpa magni rerum consequatur inventore aspernatur id laboriosam et non non et qui distinctio ut qui saepe dolor odio corrupti mollitia et nostrum enim ducimus molestias et facere voluptatem itaque totam fuga quam eos expedita sed veritatis dolor odit quia consequatur necessitatibus perspiciatis reiciendis quibusdam provident illo reiciendis cum aut ipsum consectetur earum ab incidunt unde saepe et dolor cumque accusantium vitae sit velit in qui et id quia qui sunt quos optio dignissimos voluptatem cupiditate officiis est debitis pariatur eos quia labore minima aut consectetur corporis tempora laboriosam quia",
                "__typename": "Post"
              },
              "cursor": "6",
              "__typename": "PostEdge"
            },
            {
              "node": {
                "id": 7,
                "userId": 1,
                "title": "voluptates",
                "body": "voluptatem sapiente nihil nobis temporibus qui et praesentium atque dolorem nisi iste quisquam voluptates consequatur voluptate error molestiae nisi ipsam omnis commodi voluptatem dolorem placeat ducimus veniam repudiandae neque rem perferendis sequi expedita esse est aut sint consectetur adipisci cum harum modi provident qui quasi est consequatur reiciendis culpa vitae neque vero molestiae qui doloremque consequatur voluptatum et aliquid sit et possimus dignissimos alias nam dolorem adipisci odit dicta eveniet voluptatibus quasi perspiciatis sit labore minus dolore pariatur non dolore reiciendis eligendi officiis rerum eius sunt modi autem et voluptatem laborum assumenda velit omnis aspernatur nam ab fugit ut odit",
                "__typename": "Post"
              },
              "cursor": "7",
              "__typename": "PostEdge"
            },
            {
              "node": {
                "id": 8,
                "userId": 1,
                "title": "doloremque",
                "body": "quod vero aut libero quae culpa ut corrupti fugiat quisquam repellendus corrupti rerum similique aliquid dignissimos vero aperiam dolore hic odio incidunt delectus voluptatem labore qui voluptas iste odit possimus consequatur explicabo sapiente non dolorem nihil ratione id doloribus quos atque omnis sit eos exercitationem doloremque nobis odit iure eos et id sed ipsa necessitatibus molestias ab saepe dolorum rem exercitationem mollitia deserunt voluptatibus nihil commodi omnis ut aut eos quod sit molestias repellat et magni deserunt vitae ut laborum id ut qui vitae molestias tempora earum tempore dolorum quo voluptatem ea et ut in voluptates facilis facere rerum ipsa",
                "__typename": "Post"
              },
              "cursor": "8",
              "__typename": "PostEdge"
            },
            {
              "node": {
                "id": 9,
                "userId": 1,
                "title": "voluptatem",
                "body": "vero ab praesentium eum consequatur magni aliquam fuga laborum repellat dolor culpa voluptates qui in qui et est adipisci molestias animi pariatur expedita in similique maiores impedit odio quidem a libero temporibus dolores atque voluptas hic libero odio est dolores voluptas nihil harum iure placeat impedit facere molestiae atque assumenda ex veritatis neque rem nulla dicta et nisi eligendi inventore odio quaerat sed nulla odit aperiam illum omnis reprehenderit et laudantium voluptatem est quod magni occaecati temporibus odit nobis necessitatibus voluptates voluptas ipsam hic nihil nulla sunt eum consequatur similique temporibus doloremque pariatur laborum maxime et non veritatis in earum",
                "__typename": "Post"
              },
              "cursor": "9",
              "__typename": "PostEdge"
            },
            {
              "node": {
                "id": 10,
                "userId": 1,
                "title": "doloremque",
                "body": "cumque doloribus unde deleniti et voluptatem fugit rerum vero quae natus laboriosam nihil ut occaecati beatae aut voluptatum quod quia ipsam unde vitae ut et dolor non enim qui quos rem quod corrupti dolore voluptate saepe ipsam debitis ducimus non facere consequatur doloribus dolor omnis vitae repudiandae ea magnam eos sunt voluptatem atque omnis quos quam suscipit omnis qui autem occaecati molestiae et molestiae et quibusdam molestiae sit aut perspiciatis et voluptate deserunt error placeat itaque nostrum itaque dignissimos ea dolores quis perferendis soluta rerum necessitatibus voluptatibus quos optio autem corrupti soluta est magni consectetur autem distinctio voluptatem incidunt sint",
                "__typename": "Post"
              },
              "cursor": "10",
              "__typename": "PostEdge"
            }
          ],
          "__typename": "QueryPostConnection_Connection"
        }
      })
    );
  }),
];

export const server = setupServer(...handlers);
