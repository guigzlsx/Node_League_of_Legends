import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

async function main() {
  const data = fs.readFileSync(
    path.join(__dirname, "./data/champions.json"),
    "utf8"
  );
  const championsData = JSON.parse(data);

  for (let champion of championsData) {
    await prisma.champion.create({
      data: champion,
    });
  }
  console.log("Data has been seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
