const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: 'iPhone Case',
        preis: 19.99,
        beschreibung: 'Schutz für dein Smartphone'
      },
      {
        name: 'USB-C Kabel',
        preis: 14.99,
        beschreibung: 'Schnelles Laden'
      },
      {
        name: 'Panzerglas',
        preis: 9.99,
        beschreibung: 'Extra Schutz fürs Display'
      }
    ]
  });

  console.log('Produkte hinzugefügt!');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });