"use client";

import React, { useEffect, useState } from "react";
import ECharts from "echarts-for-react";

export default function MyStack() {
  const [options, setOptions] = useState({
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "right",
      top: "middle",
      itemWidth: 15,
      itemHeight: 15,
      itemGap: 10,
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["35%", "65%"],
        center: ["30%", "50%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: [
          {
            value: 1048,
            name: "Javascript",
            itemStyle: { color: "#F7DF1E" },
          },
          { value: 735, name: "Typescript", itemStyle: { color: "#3178c6" } },
          { value: 580, name: "HTML", itemStyle: { color: "#E34F26" } },
          { value: 484, name: "CSS", itemStyle: { color: "#30a9ff" } },
          { value: 300, name: "Solidity", itemStyle: { color: "#363636" } },
        ],
      },
    ],
  });

  return (
    <div className="flex w-[643px] h-[300px] p-[24px_32px] flex-col items-start shrink-0 gap-[12px] rounded-[20px] bg-white shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)]">
      <p className="text-black font-inter text-[20px] font-bold leading-normal">
        📚 My Stack
      </p>
      <div className="flex flex-row items-start gap-[16px]">
        <div className="w-[280px]">
          <ECharts
            option={options}
            opts={{ renderer: "svg", width: 280, height: 200 }}
          />
        </div>
        <div className="w-[280px]">
          <ECharts
            option={options}
            opts={{ renderer: "svg", width: 280, height: 200 }}
          />
        </div>
      </div>
    </div>
  );
}
