import http from "node:http";
import { jsonHandler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

async function listener(request, response) {
  await jsonHandler(request, response);
  routeHandler(request, response);
}

const server = http.createServer(listener);
server.listen(3333);
