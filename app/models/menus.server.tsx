import { prisma } from "prisma/db.connect";
import type { menus } from "@prisma/client";

export function getMenusByGroup(group: menus["group"]) {
  const menu = prisma.menus.findMany({ where: { group, status: "active" } });

  return menu;
}
