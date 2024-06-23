import React, { useEffect } from "react";
import { useGlobalContextProvider } from "../../../ContextApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { set } from "mongoose";

function TimePicker({
  onSaveTime,
}: {
  onSaveTime: (timeValue: string) => void;
}) {
  const { darkModeObject, openTimePickerObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;
  const { openTimePicker, setOpenTimePicker } = openTimePickerObject;
  const [timeValue, setTimeValue] = React.useState([
    {
      value: "00",
      isSelected: true,
    },
    {
      value: "00",
      isSelected: false,
    },
  ]);
  const [meridiem, setMeridiem] = React.useState([
    {
      value: "AM",
      isSelected: true,
    },
    {
      value: "PM",
      isSelected: false,
    },
  ]);

  const hoursRef = React.useRef<HTMLInputElement>(null);
  const minutesRef = React.useRef<HTMLInputElement>(null);

  function updateMeridiem(index: number) {
    const updateMeridiem = meridiem.map((item, i) => {
      if (i === index) {
        return { ...item, isSelected: true };
      } else {
        return { ...item, isSelected: false };
      }
    });
    setMeridiem(updateMeridiem);
  }

  function updateTimeValue(index: number) {
    const updateTimeValue = timeValue.map((item, i) => {
      if (i === index) {
        return { ...item, isSelected: true };
      } else {
        return { ...item, isSelected: false };
      }
    });
    setTimeValue(updateTimeValue);
  }

  function updateTimeVlauesText(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const timesValuesCopy = [...timeValue];
    const currentText = event.target.value;
    const parsedValue = parseInt(currentText);
    const isNumeric = /^\d*$/.test(currentText);
    if (
      (isNumeric &&
        parsedValue >= 0 &&
        currentText.length <= 2 &&
        parsedValue <= 12 &&
        index === 0) ||
      currentText === ""
    ) {
      timesValuesCopy[index].value = currentText;
      setTimeValue(timesValuesCopy);
    }
    if (
      (isNumeric &&
        parsedValue >= 0 &&
        currentText.length <= 2 &&
        parsedValue <= 59 &&
        index === 1) ||
      currentText === ""
    ) {
      timesValuesCopy[index].value = currentText;
      setTimeValue(timesValuesCopy);
    }
  }

  function handleOnBlur(index: number) {
    const timesValuesCopy = [...timeValue];
    const currentText = timeValue[index].value;
    if (currentText === "") {
      timesValuesCopy[index].value = "00";
    } else if (currentText.length === 1) {
      timesValuesCopy[index].value = `0${currentText}`;
    }

    setTimeValue(timesValuesCopy);
  }

  useEffect(() => {
    if (openTimePicker) {
      if (timeValue[0].isSelected) {
        hoursRef.current?.focus();
      } else if (timeValue[1].isSelected) {
        minutesRef.current?.focus();
      }
    }
  }, [openTimePicker]);

  useEffect(() => {
    function getCuurentTime() {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const meridiem = hours >= 12 ? "PM" : "AM";
      const hours12 = hours % 12 || 12;
      const hoursString = hours12 < 10 ? `0${hours12}` : `${hours12}`;
      const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
      setTimeValue([
        {
          value: hoursString,
          isSelected: true,
        },
        {
          value: minutesString,
          isSelected: false,
        },
      ]);
      setMeridiem([
        {
          value: "AM",
          isSelected: meridiem === "AM",
        },
        {
          value: "PM",
          isSelected: meridiem === "PM",
        },
      ]);
    }
    getCuurentTime();
  }, [openTimePicker]);

  function saveTime() {
    const meridiemSelected = meridiem.filter((item) => item.isSelected)[0]
      .value;
    const selectedTimeFormatted = `${timeValue[0].value}:${timeValue[1].value}  ${meridiemSelected}`;

    onSaveTime(selectedTimeFormatted);
    setOpenTimePicker(false);
  }

  return (
    <div
      className={`bg-white w-[413px] top-[89px] left-1/2 transform -translate-x-1/2 z-50 p-7 rounded-md shadow-md ${
        openTimePicker ? `absolute` : `hidden`
      }`}
    >
      <span className="font-bold flex justify-between items-center ">
        <span>Select Time</span>
        <FontAwesomeIcon
          height={20}
          width={20}
          className={`top-8 right-4 text-gray-300 cursor-pointer`}
          onClick={() => setOpenTimePicker(!openTimePicker)}
          icon={faClose}
        />
      </span>

      <div className="flex gap-8 mt-9 ">
        <div className="flex gap-2 justify-center items-center">
          <input
            ref={hoursRef}
            onChange={(event) => updateTimeVlauesText(event, 0)}
            onBlur={() => handleOnBlur(0)}
            readOnly={!timeValue[0].isSelected}
            value={timeValue[0].value}
            onClick={() => updateTimeValue(0)}
            style={{
              backgroundColor: timeValue[0].isSelected
                ? "lightblue"
                : "#F3F4F6",
              color: isDarkMode ? "white" : "black",
            }}
            className="w-[100px] text-[45px] p-4 rounded-md text-center outline-none"
          ></input>
          <span className="text-2xl font-bold">:</span>
          <input
            ref={minutesRef}
            onChange={(event) => updateTimeVlauesText(event, 1)}
            onBlur={() => handleOnBlur(1)}
            readOnly={!timeValue[1].isSelected}
            value={timeValue[1].value}
            onClick={() => updateTimeValue(1)}
            style={{
              backgroundColor: timeValue[1].isSelected
                ? "lightblue"
                : "#F3F4F6",
              color: isDarkMode ? "white" : "black",
            }}
            className="w-[100px] text-[45px] p-4 rounded-md text-center outline-none"
          ></input>
        </div>

        <div className="flex flex-col gap-3">
          {meridiem.map((item, index) => (
            <span
              key={index}
              onClick={() => updateMeridiem(index)}
              style={{
                backgroundColor: item.isSelected ? "lightblue" : "#F3F4F6",
                color: isDarkMode ? "white" : "black",
              }}
              className="text-xl flex justify-center items-center w-[104px] h-[45px] rounded-md cursor-pointer"
            >
              {item.value}
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={saveTime}
        className="bg-mainColor p-3 text-white w-full rounded-md mt-10 mb-1 hover:bg-blue-900"
      >
        Save
      </button>
    </div>
  );
}

export default TimePicker;
