import Fastify, { FastifyInstance } from "fastify";
import path from "path";

import fastifyStatic from "@fastify/static";
import handleRender from "./renderer";

const server: FastifyInstance = Fastify({});

server.register(fastifyStatic, {
  root: path.join(__dirname, "public"),
  prefix: "/public/",
});

server.get("*", {}, handleRender);

server.listen({ port: 3000 }, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }

  const address = server.server.address();
  const port = typeof address === "string" ? address : address?.port;
});
