"use client";

import { MySelect } from "@/components/my-ui/my-select";
import { Calendar } from "lucide-react";
import { useState } from "react";
import { OverviewCard } from "./components/OverviewCard";
import { Overview } from "@/types/types";

export function OverviewSection({ data }: { data?: Overview[] }) {
  const options = ["Tháng này", "Tháng sau", "Tháng trước"];
  const [selectedOption, setSelectedOption] = useState("Tháng này");

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-md font-semibold">
          Top Sản Phẩm Sản Xuất Nhiều Nhất
        </h3>
        <MySelect
          value={selectedOption}
          onValueChange={handleSelectChange}
          placeholder="Chọn tháng"
          options={options}
          icon={<Calendar />}
        />
      </div>
      <div className="flex w-full gap-4">
        {data && data.length > 0
          ? data.map((item, index) => (
              <div key={index} className="w-full">
                <OverviewCard data={item} />
              </div>
            ))
          : Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-full">
                <OverviewCard />
              </div>
            ))}
      </div>
    </div>
  );
}
