import prisma from '#config/prisma.js';
import * as bcrypt from "bcryptjs";

async function main() {
  const adminEmail = "admin@example.com";
  const plainPassword = "AdminPassword123!";

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  console.log("Seeding admin...");

  const admin = await prisma.admin.upsert({
    where: { email: adminEmail },
    update: {}, // If admin exists, do nothing
    create: {
      name: "System Admin",
      email: adminEmail,
      password: hashedPassword,
    },
  });

  console.log({ admin });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
