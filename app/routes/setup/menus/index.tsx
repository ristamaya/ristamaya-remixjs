import { useLoaderData } from "@remix-run/react";
import { getAllMenus } from "~/models/setup-menu/menus.server";
import { json } from "@remix-run/node";
import { menus } from "@prisma/client";
import Datagrid, { dataGridProps } from "~/components/formcontrol/datagrid";

export async function loader() {
  const menus = await getAllMenus();

  return json(menus);
}

export default function Index() {
  const menuData: menus[] = useLoaderData();
  const dataGridProps: dataGridProps[] = [
    { header: "Title", field: "title", hidden: false },
    { header: "Menu Id", field: "menuid", hidden: true },
    { header: "Group", field: "group" },
    { header: "Create By", field: "createby", hidden: true },
    { header: "Parent", field: "parent", hidden: false },
    { header: "Type", field: "type", hidden: false },
    { header: "Icon", field: "icon", fieldType: "icon" },
    { header: "Path", field: "path" },
    { header: "Path Type", field: "pathtype", hidden: false },
    { header: "Order", field: "order" },
    {
      header: "Status",
      field: "status",
      fieldType: "switch",
      switchTrue: "active",
      switchFalse: "inactive",
    },
  ];

  return (
    <div className="flex w-screen justify-center">
      <Datagrid
        title="List of menus"
        dataGridProps={dataGridProps}
        tableData={menuData}
        primaryKey="menuid"
        action={true}
      />
    </div>
  );
}
