import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
  
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
    errorFormat: "pretty",
  });

export const db = globalForPrisma.prisma ?? prisma;

export const getPrisma = (database_url: string) => {
 
  const prisma = new PrismaClient({
    datasourceUrl: database_url,
  });
  return prisma;
};

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
