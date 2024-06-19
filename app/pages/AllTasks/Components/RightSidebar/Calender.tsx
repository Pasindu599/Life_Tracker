import React from "react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

function Calender() {
  return (
    <div className="flex mx-7 flex-col gap-6 justify-center items-center mt-10 bg-blue-100 rounded-xl pt-7">
      <DateCalendar
        sx={{
          "& .MuiPickersDay-root": {
            "&.Mui-selected": {
              backgroundColor: "darkblue",
            },
            padding: "10px", // Reduce padding
            maxWidth: "30px", // Reduce width
            height: "30px", // Reduce height
            fontSize: "0.75rem", // Reduce font size
          },
          "& .MuiPickersDay-dayWithMargin": {
            margin: "2px", // Reduce day margin
          },
          "& .MuiPickersCalendarHeader-root": {
            "& .MuiPickersCalendarHeader-labelContainer": {
              fontSize: "0.875rem", // Reduce header font size
            },
            "& .MuiPickersArrowSwitcher-root": {
              "& .MuiButtonBase-root": {
                padding: "4px", // Reduce button padding
              },
            },
          },
          "& .MuiPickersYear-yearButton": {
            padding: "4px", // Reduce year button padding
            margin: "2px", // Reduce year button margin
            fontSize: "0.75rem", // Reduce year button font size
            "&.Mui-selected": {
              backgroundColor: "darkblue",
            },
          },
          "& .MuiPickersMonth-monthButton": {
            padding: "4px", // Reduce month button padding
            margin: "2px", // Reduce month button margin
            fontSize: "0.75rem", // Reduce month button font size
            "&.Mui-selected": {
              backgroundColor: "darkblue",
            },
          },
        }}
      />
    </div>
  );
}

export default Calender;
