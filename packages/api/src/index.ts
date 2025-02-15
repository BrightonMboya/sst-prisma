import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { prisma } from "@repo/db";

const app = new Hono();

app.get("/", async (c) => {
  const blogs = await prisma.posts.findMany();
  return c.json(blogs, 200);
});

export const handler = handle(app);
