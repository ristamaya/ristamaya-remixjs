import Switch from "~/components/formcontrol/switch";
import { rowProps } from "~/components/formcontrol/datagrid";
import GeneralField from "~/components/formcontrol/datagrid/generalfield";
import IconField from "./iconfield";

interface props {
  prop: rowProps;
}

export const ReadOnlyRow = ({ prop }: props) => {
  if (!prop.fieldType) {
    return <div>{prop.value}</div>;
  }

  switch (prop.fieldType) {
    case "switch":
      return (
        <Switch
          name={prop.name}
          value={prop.value}
          trueValue={prop.switchTrue}
          falseValue={prop.switchFalse}
          enable={false}
        />
      );
    case "icon":
      return <IconField name={prop.name} value={prop.value} enable={false} />;
    default:
      return <GeneralField name={prop.name} value={prop.value} enable={false} />;
  }
};
