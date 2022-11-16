import React from "react";
import GridOnIcon from "@mui/icons-material/GridOn";
import AddIcon from "@mui/icons-material/Add";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

function Sidebar() {
  return (
    <>
      {/* mobile */}
      <div className="md:hidden flex justify-between flex-col side-bar w-[15%] md:w-[15%] h-[95vh] py-[1.5em] px-[1em] bg-[#1849A9] text-white ">
        <div className="flex flex-col gap-4">
          <GridOnIcon sx={{ fontSize: 25 }} />
          <AddIcon sx={{ fontSize: 25 }} />
          <StarBorderIcon sx={{ fontSize: 25 }} />
          <SettingsIcon sx={{ fontSize: 25 }} />
        </div>
        <div className="flex flex-col gap-4">
          <PersonIcon sx={{ fontSize: 25 }} />
          <LightbulbIcon sx={{ fontSize: 25 }} />
        </div>
      </div>

      {/* ///////////////////////////// */}
      {/* desktop */}
      <div className="hidden md:flex justify-between flex-col side-bar w-[15%] md:w-[15%] h-[95vh] py-[3.5em] px-[1em] bg-[#1849A9] text-white ">
        <div className="flex flex-col gap-6">
          <div className="flex">
            <GridOnIcon sx={{ fontSize: 25, marginX: 1 }} /> Dashboard
          </div>
          <div className="flex">
            <AddIcon sx={{ fontSize: 25, marginX: 1 }} />
            Import Data
          </div>
          <div className="flex">
            <StarBorderIcon sx={{ fontSize: 25, marginX: 1 }} />
            History
          </div>
          <div className="flex">
            <SettingsIcon sx={{ fontSize: 25, marginX: 1 }} />
            Settings
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex">
            {" "}
            <PersonIcon sx={{ fontSize: 25, marginX: 1 }} />
            Privacy
          </div>
          <div className="flex">
            <LightbulbIcon sx={{ fontSize: 25, marginX: 1 }} />
            Help
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
