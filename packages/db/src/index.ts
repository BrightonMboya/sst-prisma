import { Resource } from "sst";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    datasources: {
      db: {
        url: Resource.DATABASE_URL.value
      },
    },
  });

// Create single client in `sst dev`
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

