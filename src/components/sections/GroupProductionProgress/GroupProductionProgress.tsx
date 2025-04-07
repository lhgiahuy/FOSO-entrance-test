"use client";

import { MySelect } from "@/components/my-ui/my-select";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Overview } from "@/types/types";
import { Calendar } from "lucide-react";
import { useState } from "react";

export function GroupProductionProgress({ data }: { data?: Overview[] }) {
  const options = ["Hoàn thành", "Chưa hoàn thành"];
  const [selectedOption, setSelectedOption] = useState("Hoàn thành");
  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };
  return (
    <Card className="p-4 flex flex-col w-full gap-8 border-0">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-md font-semibold">Tiến độ sản xuất theo nhóm</h3>
        <MySelect
          value={selectedOption}
          onValueChange={handleSelectChange}
          placeholder="Chọn"
          options={options}
          icon={<Calendar />}
        />
      </div>
      <div className="flex flex-col gap-4">
        {!data
          ? Array.from({ length: 8 }).map((_item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex w-full justify-between">
                  <p className="text-sm">Chưa có mặt hàng</p>
                  <p>-</p>
                </div>
                <Progress />
              </div>
            ))
          : data?.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="flex w-full justify-between">
                  <p className="text-sm">{item.product}</p>
                  <p className="text-sm">{`${item.quantity} cái (${item.percent}%)`}</p>
                </div>
                <Progress
                  value={item.percent}
                  className="indicator:bg-secondary"
                />
              </div>
            ))}
      </div>
    </Card>
  );
}
