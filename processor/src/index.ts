import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
  while (true) {
    const pendinRows = await client.zapRunOutbox.findMany({
      where: {},
      take: 10, // limit the number of rows to process
    });

    pendinRows.forEach((row) => {});
  }
}
