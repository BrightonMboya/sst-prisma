import { PrismaClient } from "@repo/db/types";
import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import withDB from "./middlewares/with-db";

const app = new Hono();
app.use(withDB);

app.get("/", async (c) => {
  const db: PrismaClient = c.get("db");
  const blogs = await db.posts.findMany();
  return c.json(blogs, 200);
});

export const handler = handle(app);
