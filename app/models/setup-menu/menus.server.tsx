import { prisma } from "prisma/db.connect";
import type { menus } from "@prisma/client";

export async function getAllMenus() {
  const menu = await prisma.menus.findMany({
    orderBy: [{ group: "asc" }, { order: "asc" }],
  });

  return menu;
}

export async function getMenusByGroup(group: menus["group"]) {
  const menu = await prisma.menus.findMany({
    where: { group, status: "active" },
    orderBy: { order: "asc" },
  });

  return menu;
}
