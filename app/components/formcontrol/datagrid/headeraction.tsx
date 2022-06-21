import { useState } from "react";
import DynamicIcon from "~/components/dynamicicon";
import { Input } from "../input";

export default function HeaderAction() {
  const [openExport, setOpenExport] = useState(false);

  return (
    <div className="flex items-center justify-between border border-b-0 border-theme-base text-theme-base">
      <div className="flex gap-1 bg-theme-fill/40 text-xs">
        <button className="flex items-center rounded-sm px-1 py-[6px] hover:bg-theme-btn-hover">
          <DynamicIcon icon="MdAddBox" className="h-5 w-5" /> Add New
        </button>
        <button className="flex items-center rounded-sm px-1 py-[6px] hover:bg-theme-btn-hover">
          <DynamicIcon icon="MdSave" className="h-5 w-5" /> Save
        </button>
        <div className="relative flex">
          <button
            onClick={(e) => setOpenExport(!openExport)}
            className="flex items-center rounded-sm px-1 py-[6px] hover:bg-theme-btn-hover"
          >
            <DynamicIcon icon="MdDownloadForOffline" className="h-5 w-5" /> Export To
            <DynamicIcon icon="MdExpandMore" className="h-5 w-5" />
          </button>
          {openExport && (
            <div
              className={`absolute bottom-0 h-fit w-full translate-y-full border border-theme-base bg-theme-muted`}
            >
              <button className="flex w-full items-center rounded-sm px-1 py-[6px] hover:bg-theme-btn-hover">
                <DynamicIcon icon="MdPictureAsPdf" className="h-5 w-5" /> pdf
              </button>
              <button className="flex w-full items-center rounded-sm px-1 py-[6px] hover:bg-theme-btn-hover">
                <DynamicIcon icon="FiFileText" className="h-5 w-5" /> csv
              </button>
              <button className="flex w-full items-center rounded-sm px-1 py-[6px] hover:bg-theme-btn-hover">
                <DynamicIcon icon="MdPrint" className="h-5 w-5" /> Print
              </button>
            </div>
          )}
        </div>
      </div>
      <Input className="my-1 mr-1 h-6 w-32 rounded-sm text-xs" placeholder="Search" value="" />
    </div>
  );
}
