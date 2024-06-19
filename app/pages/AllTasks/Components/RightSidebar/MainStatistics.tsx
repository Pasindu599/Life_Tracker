"use client";
import { CircularProgress } from "@mui/material";
import { PieChart } from "recharts";
import { Pie, Cell } from "recharts";
import React from "react";

function MainStatistics() {
  const statisticsInfo = [
    {
      id: 1,
      num: 7,
      subtitle: "Best Streaks",
    },
    {
      id: 2,
      num: 3,
      subtitle: "Perfect Days",
    },
  ];
  return (
    <div className="flex mx-4 flex-col gap-6 justify-center items-center mt-14 bg-blue-100 rounded-xl w-full pt-7">
      <span className="font-bold text-xl cursor-pointer  hover:text-mainColor">
        Statistics
      </span>

      {/* circular bar */}
      <div className="relative pt-3 ">
        <CircularProgressBarProps progress={89} />
        <div className="flex flex-col justify-center items-center absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="font-bold text-xl text-mainColor">89%</span>
          <span className="text-[11px] ">{`Today's Progress`}</span>
        </div>
      </div>

      {/* bottom of chart */}
      <div className="my-4 flex justify-center gap-6 flex-wrap items-center w-full">
        {statisticsInfo.map((singleItem, singleItemIndex) => (
          <div className="flex items-center gap-3 " key={singleItemIndex}>
            <div className="w-2 h-2 bg-mainColor rounded-full"></div>
            <div className="text-[12px]">
              <span className="flex flex-col font-bold">{singleItem.num}</span>
              <span className="text-gray-500">{singleItem.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CircularProgressBarProps {
  progress: number;
}

const CircularProgressBarProps: React.FC<CircularProgressBarProps> = ({
  progress,
}) => {
  const data = [
    {
      name: "Completed",
      value: progress,
    },
    {
      name: "Remaining",
      value: 100 - progress,
    },
  ];

  const COLORS = ["#5A639C", "#E0E0E0"];

  return (
    <PieChart
      width={200}
      height={200}
      margin={{ top: -20, right: 0, left: 0, bottom: 40 }}
    >
      <Pie
        data={data}
        cx={100}
        cy={100}
        startAngle={180}
        endAngle={-180}
        innerRadius={66}
        outerRadius={progress === 100 ? 80 : 78}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default MainStatistics;
