import { IS_SERVER } from "../common/isServer";
if (IS_SERVER) {
  const { server } = require("./server");
  server.listen();
} else {
  const { worker } = require("./browser");
  worker.start();
}
