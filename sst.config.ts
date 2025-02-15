/// <reference path="./.sst/platform/config.d.ts" />
import { readdirSync } from "fs";

export default $config({
  app(input) {
    return {
      name: "sst-prisma",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const infra = {};
    for (const value of readdirSync("./infra")) {
      const result = await import("./infra/" + value);
      if (result.outputs) Object.assign(infra, result.outputs);
    }
    return infra;
  },
});
