import Redis from "ioredis";

export const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

try {
  redis.on("error", (error) => {
    console.error("[ERROR] Redis: ", error);
  });

  redis.on("connect", () => {
    console.log("Connected to Redis KV Store");
  });
} catch (error) {
  console.error("Error connecting to Redis KV Store");
}