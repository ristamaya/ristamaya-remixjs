import { useEffect, useState } from "react";
import DynamicIcon from "~/components/dynamicicon";
import IconData from "~/components/formcontrol/datagrid/iconlist.json";

type props = {
  name: string;
  value: string;
  enable: boolean;
};

export default function IconField({ name, value, enable }: props) {
  const [itemValue, setItemValue] = useState(value);
  const [openList, setOpenList] = useState(false);

  useEffect(() => {
    if (!enable) {
      setOpenList(false);
    }
  });

  return (
    <div className="flex items-center text-theme-base">
      <DynamicIcon icon={itemValue.length > 0 ? itemValue : "MdClose"} className="mr-1 h-5 w-5" />
      <div className="relative flex">
        <input
          name={name}
          value={itemValue}
          onChange={(e) => setItemValue(e.target.value)}
          disabled={true}
          className="relative w-fit bg-transparent outline-none"
        ></input>

        {enable && (
          <button
            className="absolute right-1 z-10"
            onClick={(e) => {
              enable && setOpenList(!openList);
            }}
          >
            <DynamicIcon
              icon="MdMoreHoriz"
              className="mx-1 h-4 w-4 rounded-sm border border-theme-base"
            />
          </button>
        )}

        {openList && enable && (
          <div
            id="iconfield"
            className="absolute bottom-0 right-0 z-20 max-h-32 translate-y-full flex-row overflow-auto 
            rounded-sm border border-t-0 border-theme-base bg-theme-muted drop-shadow-md"
          >
            {IconData.map((item, index) => (
              <div
                key={index}
                className="flex cursor-pointer items-center"
                onClick={(e) => {
                  setItemValue(item.iconName);
                  setOpenList(!openList);
                }}
              >
                <DynamicIcon
                  icon={item.iconName.length > 0 ? item.iconName : "MdClose"}
                  className="my-1 mr-1 h-5 w-5"
                />
                {item.iconName}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
