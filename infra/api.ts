/// <reference path="../.sst/platform/config.d.ts" />
import { secrets } from "./secrets";


export const api = new sst.aws.Function("api", {
  handler: "packages/api/src/index.handler",
  url: true,
  copyFiles: [
    {
      from: "node_modules/.pnpm/prisma@6.3.1_typescript@5.7.3/node_modules/@prisma",
    },
  ],
  link: [secrets.DATABASE_URL],
});
