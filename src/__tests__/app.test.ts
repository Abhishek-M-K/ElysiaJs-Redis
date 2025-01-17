import { Elysia } from "elysia";
import { describe, it, expect } from "vitest";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/api", () => "Hello Elysia API")

describe("Elysia App", () => {
  it("should respond with 'Hello Elysia' on GET /", async () => {
    const response = await app.handle(new Request(`http://localhost/`));
    const text = await response.text();
    expect(text).toBe("Hello Elysia");
  });

  it("should respond with 'Hello Elysia API' on GET /api", async () => {
    const response = await app.handle(new Request(`http://localhost/api`));
    const text = await response.text();
    expect(text).toBe("Hello Elysia API");
  });
});
