import { Elysia } from "elysia";
import { redisRoutes } from "./routes/redisRoute";

const app = new Elysia({ prefix: "/v1" })
  .get("/", () => "Hello Elysia")
  .use(redisRoutes) // Access via /api/v1/redis
  .listen(8888);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
