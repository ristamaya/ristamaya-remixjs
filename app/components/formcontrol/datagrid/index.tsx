import { useState } from "react";
import FieldComponent from "~/components/formcontrol/datagrid/fieldcomponent";
import HeaderAction from "./headeraction";

export type dataGridProps = {
  header: string;
  field: string;
  fieldType?: "string" | "number" | "date" | "icon" | "switch" | "lov" | "currency" | "button";
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
  pk: string;
  key: string;
  name: string;
  value: string;
  hidden?: boolean;
  fieldType?: string;
  switchTrue?: string;
  switchFalse?: string;
  handleEditClick?: (value: string, action: string) => void;
  handleSaveClick?: (value: string, action: string) => void;
  handleCancelClick?: (value: string, action: string) => void;
  handleDeleteClick?: (value: string, action: string) => void;
};

interface props {
  title?: string;
  dataGridProps: dataGridProps[];
  tableData: any[];
  primaryKey: string;
  action?: boolean | false;
}

export default function Datagrid({ title, dataGridProps, tableData, primaryKey, action }: props) {
  const [primaryKeyValue, setPrimaryKeyValue] = useState("");
  const [actionMode, setActionMode] = useState("none");

  const handleEditClick = (value: string, action: string) => {
    setPrimaryKeyValue(value);
    setActionMode(action);
  };

  const Data = tableData.map((item, index) => {
    let rowData: rowProps[] = [];
    let i = 0;

    if (action) {
      rowData.push({
        pk: item[primaryKey],
        key: "ActionControl",
        name: "ActionControl",
        value: item[primaryKey],
        hidden: false,
        fieldType: "button",
        handleEditClick: handleEditClick,
      });
    }

    for (const key in item) {
      rowData.push({
        pk: item[primaryKey],
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
      <tr key={index} className="hover:bg-theme-fill/10">
        {rowData.map((data, index) => (
          <td
            key={index}
            data-heading={data.key}
            className={`${primaryKeyValue === data.pk && "bg-theme-fill/30"} 
            border-b border-theme-base p-1 text-xs`}
            hidden={data.hidden}
          >
            {primaryKeyValue === data.pk ? (
              <FieldComponent prop={data} edit={true} action={actionMode} />
            ) : (
              <FieldComponent prop={data} edit={false} action="none" />
            )}
          </td>
        ))}
      </tr>
    );
  });

  return (
    <div className="m-2 block w-fit">
      {title && (
        <p className="pb-[2px] text-center text-base font-semibold text-theme-strong">{title}</p>
      )}
      {action && <HeaderAction />}

      <table className="table table-auto border border-theme-base text-theme-base">
        <thead>
          <tr>
            {action && (
              <th className="border border-theme-base bg-theme-fill/75 p-1 text-sm font-semibold">
                Action
              </th>
            )}
            {dataGridProps.map((item, index) => (
              <th
                key={index}
                className="border border-theme-base bg-theme-fill/75 p-1 text-sm font-semibold"
                hidden={item.hidden}
              >
                {item.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{Data}</tbody>
      </table>
    </div>
  );
}
