import { PrismaClient } from '@prisma/client';
import BookSeeder from './book.seed';
import CategorySeeder from './category.seed';

const prisma = new PrismaClient();
const main = async () => {
  await CategorySeeder();
  await BookSeeder();
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log('Seeding error', e);
    await prisma.$disconnect();
    process.exit(1);
  });
