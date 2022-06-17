import bcrypt from "@node-rs/bcrypt";
import type { users } from "@prisma/client";
import { prisma } from "prisma/db.connect";
export type { users } from "@prisma/client";

export async function getUserById(userid: users["userid"]) {
  return prisma.users.findUnique({ where: { userid } });
}

export async function getUserByEmail(useremail: users["useremail"]) {
  return prisma.users.findUnique({ where: { useremail } });
}

export async function createUser(useremail: users["useremail"], userpassword: users["userpassword"]) {
  const hashedPassword = await bcrypt.hash(userpassword, 10);

  return prisma.users.create({
    data: {
      useremail: useremail,
      userpassword: hashedPassword,
      createby: "systemjoin",
    },
  });
}

export async function verifyLogin(useremail: users["useremail"], userpassword: users["userpassword"]) {
  const user = await prisma.users.findUnique({
    where: { useremail },
  });

  if (!user) {
    return null;
  }

  const isValid = await bcrypt.verify(userpassword, user?.userpassword);
  if (!isValid) {
    return null;
  }

  return user;
}
