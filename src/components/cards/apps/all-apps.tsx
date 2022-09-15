"use client";

import DesktopIcon from "@/assets/icons/desktop";
import DevicesIcon from "@/assets/icons/devices";
import cardStyle from "@/shared/styles/card";
import { scrollToTop } from "@/shared/utils/window";
import { useState } from "react";
import AppItem from "./app-item";
import { mlApps } from "./data/ml-apps";
import { webApps } from "./data/web-apps";

function AllAppsList() {
  const [selected, setSelected] = useState("ALL");
  const filters = [
    {
      name: "ALL",
      icon: <DevicesIcon />,
    },
    {
      name: "MACHINE LEARNING",
      icon: <DesktopIcon />,
    },
    {
      name: "WEB",
      icon: <DesktopIcon />,
    },
  ];
  const list =
    selected == "MACHINE LEARNING"
      ? mlApps
      : selected == "WEB"
      ? webApps
      : [...mlApps, ...webApps];

  return (
    <div className={cardStyle + "mt-5 !p-1"}>
      <div className="h-6" />
      <div className="flex flex-wrap gap-3.5 sm:sticky sm:!z-50 top-[26px] bg-white dark:bg-dark px-6 rounded-full">
        {filters.map((filter) => (
          <button
            type="button"
            onClick={() => {
              scrollToTop();
              setSelected(filter.name);
            }}
            key={filter.name}
            className={
              "flex items-center justify-start opacity-50 border rounded-full pl-3.5 pr-5 py-2 hover:opacity-100 border-neutral-500/50 hover:border-neutral-500 " +
              (selected == filter.name
                ? "!bg-neutral-500/5 !border-neutral-500 !opacity-100"
                : "")
            }
          >
            {filter.icon}
            <div className="w-2.5" />
            <p className="text-sm font-normal">{filter.name}</p>
            <div className="w-2.5" />
            <p className="text-sm font-normal opacity-40">
              {filter.name == "MACHINE LEARNING"
                ? mlApps.length
                : filter.name == "WEB"
                ? webApps.length
                : mlApps.length + webApps.length}
            </p>
          </button>
        ))}
      </div>
      <div className="h-8" />
      <div className="flex flex-wrap content-center gap-7 px-6">
        {list.map((card) => (
          <AppItem
            key={card.path}
            hideBottomBorder={card.path === list[list.length - 1].path}
            card={card}
          />
        ))}
      </div>
      <div className="h-7" />
    </div>
  );
}

export default AllAppsList;
