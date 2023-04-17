import { faker } from "@faker-js/faker";
import { createServer, Response } from "miragejs";
import { factories } from "./factories";
import { models } from "./models";
import { AppSchema } from "./types";

export function startMirage() {
  const server = createServer({
    models,
    factories,
    seeds(server) {
      server.createList("user", faker.datatype.number({ min: 1, max: 1 }));
    },
    routes() {
      this.namespace = "api";

      this.get("/users", (schema: AppSchema, request) => {
        const users = schema.all("user");
        return new Response(200, {}, users);
      });

      this.get("/users/:id", (schema: AppSchema, request) => {
        const param: string = request.params["id"];
        const user = schema.find("user", param);
        return new Response(200, {}, user || "foo");
      });
    },
  });
  server.logging = true;
  server.passthrough("https://exchange.dial.global/**");
  console.log({ dump: server.db.dump() });
}
