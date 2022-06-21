import DynamicIcon from "~/components/dynamicicon";
import EditableRow from "~/components/formcontrol/datagrid/editablerow";
import { ReadOnlyRow } from "~/components/formcontrol/datagrid/readonlyrow";
import { Input } from "../input";
import HeaderAction from "./headeraction";

export type dataGridProps = {
  header: string;
  field: string;
  fieldType?: "string" | "number" | "date" | "icon" | "switch" | "lov" | "currency";
  fieldMask?: string;
  fieldData?: any[];
  switchTrue?: string;
  switchFalse?: string;
  prefix?: string;
  suffix?: string;
  hidden?: boolean | false;
  sortable?: boolean | false;
};

export type rowProps = {
  key: string;
  name: string;
  value: string;
  hidden?: boolean;
  fieldType?: string;
  switchTrue?: string;
  switchFalse?: string;
};

interface props {
  title?: string;
  dataGridProps: dataGridProps[];
  tableData: any[];
  action?: "edit" | "none";
}

export default function Datagrid({ title, dataGridProps, tableData, action }: props) {
  const data = tableData.map((item, index) => {
    let rowData: rowProps[] = [];
    let i = 0;

    for (const key in item) {
      rowData.push({
        key: dataGridProps[i].header,
        name: dataGridProps[i].field,
        value: item[dataGridProps[i].field],
        hidden: dataGridProps[i].hidden,
        fieldType: dataGridProps[i].fieldType,
        switchTrue: dataGridProps[i].switchTrue,
        switchFalse: dataGridProps[i].switchFalse,
      });
      i++;
    }

    return (
      <tr key={index}>
        {rowData.map((data, index) => (
          <td
            key={index}
            data-heading={data.key}
            className="border-b border-theme-base p-1 text-xs"
            hidden={data.hidden}
          >
            <ReadOnlyRow prop={data} />
          </td>
        ))}
        {action == "edit" && (
          <td data-heading="action-heading" className="border-b border-theme-base text-xs">
            <div className="flex gap-1 px-1">
              <button className="px-1 hover:bg-theme-btn-hover">
                <DynamicIcon icon="MdModeEdit" className="h-5 w-5" />
              </button>
              <button className="px-1 hover:bg-theme-btn-hover">
                <DynamicIcon icon="MdDeleteForever" className="h-5 w-5" />
              </button>
            </div>
          </td>
        )}
      </tr>
    );
  });

  return (
    <div className="m-2 block w-fit">
      {title && (
        <p className="pb-[2px] text-center text-base font-semibold text-theme-strong">{title}</p>
      )}
      {action == "edit" && <HeaderAction />}

      <table className="table-auto border border-theme-base text-theme-base">
        <thead>
          <tr>
            {dataGridProps.map((item, index) => (
              <th
                key={index}
                className="border border-theme-base bg-theme-fill/75 p-1 text-sm font-semibold"
                hidden={item.hidden}
              >
                {item.header}
              </th>
            ))}
            {action == "edit" && (
              <th className="border border-theme-base bg-theme-fill/75 p-1 text-sm font-semibold">
                Action
              </th>
            )}
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
}
