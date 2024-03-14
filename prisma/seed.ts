import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: '' },
    update: {},
    create: {
      email: 'mikhael@teste.com',
      name: 'Mikhael',
    },
  });

  const category = await prisma.category.upsert({
    where: { id: '1' },
    update: {},
    create: {
      title: 'Alimentação',
    },
  });

  const bill = await prisma.billyng.upsert({
    where: { id: '1' },
    update: {},
    create: {
      title: '',
      description: '',
      price: 120,
      userId: user.id,
      categoryId: category.id,
    },
  });

  console.log({ user, category, bill });
}
main()
  .then(() => prisma.$disconnect)
  .catch(async (e) => {
    console.error(e);
    prisma.$disconnect;
    process.exit(1);
  });
