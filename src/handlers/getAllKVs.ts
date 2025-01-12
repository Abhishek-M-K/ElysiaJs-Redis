import { redis } from "../lib/redis";

export async function getAllKVs(set: any) {
  try {
    const keys = await redis.keys("*");
    const pairs = await redis.mget(keys);
    const pairsObject: any = {};

    keys.forEach((key, index) => {
      pairsObject[key] = pairs[index];
    });

    set.status = 200;
    return {
      status: "success",
      message: "All key-value pairs fetched",
      data: pairsObject,
    };
  } catch (error) {
    console.log("Error getting all pairs from KV Store: ", error);
    set.status = 500;
    return {
      status: "error",
      message: "Internal Server Error",
    };
  }
}
