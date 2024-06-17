import React from "react";

function LogoAndName() {
  const defaultColor = "#5A639C";
  const backgroundColourObject = {
    backgroundColor: defaultColor,
  };
  return (
    <div className="flex gap-2 items-center sm:justify-start justify-center">
      <span className="text-2xl font-light flex items-center gap-2 ">
        {/* icon */}
        <div style={backgroundColourObject} className="p-2 rounded-md"></div>
        {/* name */}
        <span style={{ color: "#5A639C" }} className="font-bold">
          Life
        </span>
        <span>Tracker</span>
      </span>
    </div>
  );
}

export default LogoAndName;
