import { redis } from "../lib/redis";

export async function addPairToKV(key: string, value: string, set: any) {
  try {
    if (!key || !value) {
      set.status = 400;
      return {
        status: "error",
        message: "Bad Request",
      };
    }

    await redis.set(key, value);
    set.status = 201;
    return {
      status: "success",
      message: `${key} added to KV Store with value: ${value}`,
    };
  } catch (error) {
    console.log("Error adding pair to KV Store: ", error);
    set.status = 500;
    return {
      status: "error",
      message: "Internal Server Error",
    };
  }
}
