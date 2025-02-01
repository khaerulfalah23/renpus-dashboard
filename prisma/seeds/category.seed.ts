import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function main() {
  await prisma.category.deleteMany({
    where: {},
  });

  const data = [
    {
      id: 'clzkrv8ed0000gtkn9iyim16z',
      category: 'Novel',
    },
    {
      id: 'clzl3r2oc0000wwbhev9ozs4u',
      category: 'Komik',
    },
    {
      id: 'clzq8ka7p00006kd009rsurbb',
      category: 'Bahasa',
    },
  ];

  await prisma.category.createMany({
    data,
  });
}
