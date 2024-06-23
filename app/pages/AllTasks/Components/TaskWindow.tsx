import React, { memo, useEffect, useRef } from "react";
import { useGlobalContextProvider } from "@/app/ContextApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faClose,
  faIcons,
} from "@fortawesome/free-solid-svg-icons";
import { setTimeout } from "timers/promises";
import IconsWindow from "./IconsWindow/IconsWindow";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import TimePicker from "./TimePicker";

type TaskType = {
  _id: string;
  name: string;
  icon: IconProp;
  frequency: FrequencyType[];
  notificationTime: string;
  isNotification: boolean;
};

type RepeatOption = {
  name: string;
  isSelected: boolean;
};

type DayOption = {
  id: number;
  name: string;
  isSelected: boolean;
};

type FrequencyType = {
  type: string;
  days?: string[];
  numberOfWeeks?: number;
};

const HeaderMemo = memo(Header);
const InputNameButtonMemo = memo(InputNameButton);

function TaskWindow() {
  const { openTaskObject, darkModeObject, openTimePickerObject } =
    useGlobalContextProvider();
  const { openTask, setOpenTask } = openTaskObject;
  const { openTimePicker, setOpenTimePicker } = openTimePickerObject;
  const { isDarkMode } = darkModeObject;
  const [taskName, setTaskName] = React.useState<TaskType>({
    _id: "",
    name: "",
    icon: faIcons,
    frequency: [
      {
        type: "Daily",
        days: [],
        numberOfWeeks: 1,
      },
    ],
    notificationTime: "",
    isNotification: false,
  });
  const [openIconsWindow, setOpenIconsWindow] = React.useState<boolean>(false);
  const [iconSelected, setIconSelected] = React.useState<IconProp>(
    taskName.icon
  );
  const onUpdateTaskName = (inputText: string) => {
    setTaskName({
      ...taskName,
      name: inputText,
    });
  };

  useEffect(() => {
    setOpenTimePicker(false);
  }, [openTask]);

  function changeRepeatOption(repeatOptions: RepeatOption[]) {
    const filterIsSlected = repeatOptions.filter(
      (singleOption) => singleOption.isSelected
    );
    const nameOfSelectedOption = filterIsSlected[0].name;
    const copyTasksItems = { ...taskName };
    copyTasksItems.frequency[0].type = nameOfSelectedOption;

    setTaskName(copyTasksItems);
  }

  function changeDayOption(allDays: DayOption[]) {
    const selectedDays = allDays
      .filter((day) => day.isSelected)
      .map((day) => day.name);

    const copyTasksItems = { ...taskName };
    copyTasksItems.frequency[0].days = selectedDays;

    setTaskName(copyTasksItems);
  }

  function changeWeeksOption(weeks: number) {
    const copyTasksItems = { ...taskName };
    copyTasksItems.frequency[0].numberOfWeeks = weeks;
    setTaskName(copyTasksItems);
  }

  function updateReminderTime(timeValue: string) {
    const copyTaskItem = { ...taskName };
    copyTaskItem.notificationTime = timeValue;
    setTaskName(copyTaskItem);
  }

  useEffect(() => {
    setTaskName({
      ...taskName,
      icon: iconSelected,
    });
  }, [iconSelected]);

  useEffect(() => {
    if (taskName.isNotification === false) {
      setTaskName({ ...taskName, notificationTime: "" });
    }
  }, [taskName.isNotification]);
  return (
    <div
      className={`top-[3%] left-1/2 transform -translate-x-1/2 w-[80%] z-50 p-10 rounded-md shadow-md ${
        openTask ? `absolute` : `hidden`
      } bg-thirdColor`}
    >
      <TimePicker onSaveTime={updateReminderTime} />
      <IconsWindow
        openIconsWindow={openIconsWindow}
        setOpenIconsWindow={setOpenIconsWindow}
        setIconSelected={setIconSelected}
        iconSelected={iconSelected}
      />
      <Header />
      <InputNameButton
        onUpdateTaskName={onUpdateTaskName}
        taskName={taskName.name}
        setOpenIconsWindow={setOpenIconsWindow}
        iconSelected={iconSelected}
      />
      <Repeat
        onChangeOption={changeRepeatOption}
        onChangeDayOption={changeDayOption}
        onChangeWeeksOption={changeWeeksOption}
      />
      <Reminder task={taskName} setTask={setTaskName} />
      <SaveButton task={taskName} />
    </div>
  );
}

export default TaskWindow;

function Header() {
  const { openTaskObject, darkModeObject } = useGlobalContextProvider();
  const { openTask, setOpenTask } = openTaskObject;
  const { isDarkMode } = darkModeObject;
  return (
    <div className="flex justify-between items-center  ">
      <span className="font-bold text-xl">Add New Task</span>
      <FontAwesomeIcon
        icon={faClose}
        onClick={() => setOpenTask(false)}
        className="text-gray-500 cursor-pointer hover:text-gray-800"
      />
    </div>
  );
}

function InputNameButton({
  onUpdateTaskName,
  taskName,
  setOpenIconsWindow,
  iconSelected,
}: {
  onUpdateTaskName: (inputText: string) => void;
  taskName: string;
  setOpenIconsWindow: React.Dispatch<React.SetStateAction<boolean>>;
  iconSelected: IconProp;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { openTaskObject, darkModeObject } = useGlobalContextProvider();
  const { openTask, setOpenTask } = openTaskObject;
  const { isDarkMode } = darkModeObject;

  function updateInputTask(event: React.ChangeEvent<HTMLInputElement>) {
    onUpdateTaskName(event.target.value);
  }

  useEffect(() => {
    inputRef?.current?.focus();
  }, [iconSelected]);

  return (
    <div className="flex flex-col gap-2 mt-10 px-3">
      <span className="opacity-80 font-semibold">Task Name</span>
      <div className="flex gap-4 justify-between items-center">
        <input
          style={{
            backgroundColor: isDarkMode ? "#1A202C" : "white",
            color: isDarkMode ? "#D1D5DB" : "#111827",
          }}
          ref={inputRef}
          value={taskName}
          onChange={(event) => updateInputTask(event)}
          className={`border w-full border-gray-200 ouline-none p-4 rounded-lg text-md`}
          placeholder="Enter Task Name"
        />
        <FontAwesomeIcon
          icon={iconSelected}
          onClick={() => setOpenIconsWindow(true)}
          className="text-white mt-[1px] p-4  cursor-pointer bg-mainColor hover:text-gray-800"
          height={16}
          width={20}
        />
      </div>
    </div>
  );
}

function SaveButton({ task }: { task: TaskType }) {
  return (
    <div className="w-full flex justify-end mt-9">
      <button
        className="bg-mainColor text-white p-4 rounded-md w-[50%] hover:bg-secondColor"
        onClick={() => {
          console.log(task);
        }}
      >
        Add Task
      </button>
    </div>
  );
}

function Repeat({
  onChangeOption,
  onChangeDayOption,
  onChangeWeeksOption,
}: {
  onChangeOption: (repeatOptions: RepeatOption[]) => void;
  onChangeDayOption: (allDays: DayOption[]) => void;
  onChangeWeeksOption: (weeks: number) => void;
}) {
  const [repeatOptions, setRepeatOptions] = React.useState<RepeatOption[]>([
    {
      name: "Daily",
      isSelected: true,
    },
    {
      name: "Weekly",
      isSelected: false,
    },
  ]);

  const days: DayOption[] = [
    { id: 1, name: "Mo", isSelected: false },
    { id: 2, name: "Tu", isSelected: false },
    { id: 3, name: "We", isSelected: false },
    { id: 4, name: "Th", isSelected: false },
    { id: 5, name: "Fr", isSelected: false },
    { id: 6, name: "Sa", isSelected: false },
    { id: 7, name: "Su", isSelected: false },
  ];

  const [allDays, setAllDays] = React.useState<DayOption[]>(days);
  const [weeks, setWeeks] = React.useState<number>(1);
  const { openTaskObject, darkModeObject } = useGlobalContextProvider();
  const { openTask, setOpenTask } = openTaskObject;
  const { isDarkMode } = darkModeObject;
  const [nameOfSelectedOption, setNameOfSelectedOption] =
    React.useState<string>("");

  function changeOption(indexClicked: number) {
    const updateRepeatOptions = repeatOptions.map((option, index) => {
      if (index === indexClicked) {
        return {
          ...option,
          isSelected: true,
        };
      }
      return {
        ...option,
        isSelected: false,
      };
    });
    setRepeatOptions(updateRepeatOptions);
    onChangeOption(updateRepeatOptions);
  }
  useEffect(() => {
    onChangeDayOption(allDays);
  }, [allDays]);

  useEffect(() => {
    onChangeWeeksOption(weeks);
  }, [weeks]);

  useEffect(() => {
    const getNameOptionSelected = repeatOptions.filter(
      (singleOption) => singleOption.isSelected
    )[0].name;

    setNameOfSelectedOption(getNameOptionSelected);
  }, [repeatOptions]);

  return (
    <div className="flex flex-col gap-2 mt-10 px-3 ">
      <span className="font-semibold text-[17px]">Repeat</span>
      <div className="flex gap-4 mt-2 items-center">
        {repeatOptions.map((option, index) => {
          return (
            <button
              key={index}
              onClick={() => changeOption(index)}
              className={`p-2 rounded-md border border-gray-200 ${
                option.isSelected ? `bg-mainColor text-white` : `bg-white`
              }`}
            >
              {option.name}
            </button>
          );
        })}
      </div>
      {nameOfSelectedOption === "Daily" ? (
        <DailyOptions allDays={allDays} setAllDays={setAllDays} />
      ) : (
        <WeeklyOption weeks={weeks} setWeeks={setWeeks} />
      )}
    </div>
  );
}

function DailyOptions({
  allDays,
  setAllDays,
}: {
  allDays: DayOption[];
  setAllDays: React.Dispatch<React.SetStateAction<DayOption[]>>;
}) {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;

  function IsSelectedDays(singleDayIndex: number) {
    const selectedCount: number = allDays.filter(
      (day) => day.isSelected
    ).length;

    const updatedAllDays = allDays.map((day, index) => {
      if (selectedCount === 1 && day.isSelected && index === singleDayIndex) {
        return day;
      }

      if (index === singleDayIndex) {
        return {
          ...day,
          isSelected: !day.isSelected,
        };
      }
      return day;
    });
    setAllDays(updatedAllDays);
  }

  return (
    <div className="mt-5 flex flex-col gap-4">
      <span className="font-medium opacity-85">On these days</span>
      <div className="flex gap-3 w-full">
        {allDays.map((day, index) => (
          <span
            onClick={() => IsSelectedDays(index)}
            key={index}
            className={`p-2 px-3 w-11 text-center rounded-md selected-none cursor-pointer ${
              day.isSelected ? `bg-mainColor text-white` : `bg-white text-black`
            }`}
          >
            {day.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function WeeklyOption({
  weeks,
  setWeeks,
}: {
  weeks: number;
  setWeeks: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;

  function updateCountWeeks(option: string) {
    if (option === "up") {
      setWeeks((prev) => (prev < 7 ? prev + 1 : 7));
    }
    if (option === "down") {
      setWeeks((prev) => (prev > 1 ? prev - 1 : 1));
    }
  }

  return (
    <div className="mt-7 flex gap-20">
      <div className="flex flex-col gap-2 ">
        <span className="font-semibold">Frequency</span>
        <span className="text-sm font-light text-white">
          {weeks} times a week
        </span>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="p-3 w-10 rounded-md text-white bg-mainColor hover:bg-blue-800 "
          onClick={() => updateCountWeeks("down")}
        >
          -{" "}
        </button>
        <span className="p-4 px-5 select-none">{weeks}</span>
        <button
          className="p-3 w-10 rounded-md text-white bg-mainColor hover:bg-blue-800 "
          onClick={() => updateCountWeeks("up")}
        >
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
}

function Reminder({
  task,
  setTask,
}: {
  task: TaskType;
  setTask: React.Dispatch<React.SetStateAction<TaskType>>;
}) {
  const { openTaskObject, darkModeObject, openTimePickerObject } =
    useGlobalContextProvider();
  const { openTask, setOpenTask } = openTaskObject;
  const { openTimePicker, setOpenTimePicker } = openTimePickerObject;
  const { isDarkMode } = darkModeObject;
  const [isOn, setIsOn] = React.useState<boolean>(false);

  function updateToggle() {
    const copyTaskItem = { ...task };
    copyTaskItem.isNotification = !isOn;
    setTask(copyTaskItem);

    setIsOn((prev) => !prev);
  }

  // useEffect(() => {
  //   const copyTaskItem = { ...task };
  //   if (copyTaskItem.isNotification === false) {
  //     copyTaskItem.notificationTime = " ";
  //   }
  //   setTask(copyTaskItem);
  // }, [task.isNotification]);

  function handleOpenTimerPicker() {
    setOpenTimePicker(!openTimePicker);
  }

  return (
    <div className="flex flex-col gap-2 mt-10 px-3">
      <div className="flex justify-between">
        <span className="font-semibold text-[17px]">Daily Notification</span>
        <ToggleSwitch />
      </div>
      {isOn && (
        <div className="flex justify-between p-4 m-2 mt-8 rounded-md border ">
          <span>Select Time</span>
          <div
            onClick={handleOpenTimerPicker}
            className="flex gap-2 items-center justify-center cursor-pointer select-none"
          >
            <span>
              {task.notificationTime === "" ? "none" : task.notificationTime}
            </span>
            <FontAwesomeIcon icon={faChevronDown} height={12} width={12} />
          </div>
        </div>
      )}
    </div>
  );

  function ToggleSwitch() {
    return (
      <div
        className={`
      ${isOn ? "bg-mainColor" : "bg-gray-500"}
      w-16 h-[30px] relative rounded-lg flex`}
      >
        <div onClick={updateToggle} className="w-1/2 h-full"></div>
        <div onClick={updateToggle} className="w-1/2 h-full"></div>
        <div
          className={`
        bg-white h-6 w-6 rounded-full ${
          isOn ? "right-[3px]" : "left-[3px]"
        } top-[3px] absolute
        `}
        ></div>
      </div>
    );
  }
}
