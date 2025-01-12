import { Elysia, t } from "elysia";
import { getAllKVs } from "../handlers/getAllKVs";
import { addPairToKV } from "../handlers/addPair";

export const redisRoutes = new Elysia({ prefix: "/redis" })
  .get("/", ({ set }: any) => {
    return getAllKVs(set);
  })
  .post(
    "/",
    ({ set, body }: any) => {
      const { key, value } = body;
      return addPairToKV(key, value, set);
    },
    {
      body: t.Object({
        key: t.String(),
        value: t.Any(),
      }),
    }
  );
