import Switch from "~/components/formcontrol/switch";
import { rowProps } from "~/components/formcontrol/datagrid/";
import GeneralField from "~/components/formcontrol/datagrid/generalfield";
import IconField from "./iconfield";
import DynamicIcon from "~/components/dynamicicon";

interface props {
  prop: rowProps;
  edit: boolean | false;
  action: string | undefined;
}

export default function FieldComponent({ prop, edit, action }: props) {
  if (prop.key === "ActionControl") {
    if (action === "none") {
      return (
        <div className="flex gap-1 px-1">
          <button
            className="px-1 hover:bg-theme-btn-hover"
            onClick={(e) => {
              //@ts-ignore
              prop.handleEditClick(prop.value, "edit");
            }}
          >
            <DynamicIcon icon="MdModeEdit" className="h-5 w-5" />
          </button>
          <button className="px-1 hover:bg-theme-btn-hover">
            <DynamicIcon icon="MdDeleteForever" className="h-5 w-5" />
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex gap-1 px-1">
          <button
            className="px-1 hover:bg-theme-btn-hover"
            onClick={(e) => {
              //@ts-ignore
              prop.handleEditClick("", "none");
            }}
          >
            <DynamicIcon icon="MdCancel" className="h-5 w-5" />
          </button>
          <button className="px-1 hover:bg-theme-btn-hover">
            <DynamicIcon icon="MdSave" className="h-5 w-5" />
          </button>
        </div>
      );
    }
  }

  switch (prop.fieldType) {
    case "switch":
      return (
        <Switch
          name={prop.name}
          value={prop.value}
          trueValue={prop.switchTrue}
          falseValue={prop.switchFalse}
          enable={edit}
        />
      );
    case "icon":
      return <IconField name={prop.name} value={prop.value} enable={edit} />;
    default:
      return <GeneralField name={prop.name} value={prop.value} enable={edit} />;
  }
}
