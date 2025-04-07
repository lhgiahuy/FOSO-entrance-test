"use client";

import { useState } from "react";
import { Label, Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { MySelect } from "@/components/my-ui/my-select";
import { Calendar } from "lucide-react";
import { Report } from "@/types/types";
const chartConfig = {
  production: {
    label: "Đang sản xuất",
    color: "var(--primary)",
  },
  incomplete: {
    label: "Chưa hoàn thành",
    color: "#ff8f0d",
  },
  completed: {
    label: "Đã hoàn thành",
    color: "var(--secondary)",
  },
} satisfies ChartConfig;

export function ProductionReport({ data }: { data?: Report[] }) {
  const options = ["Hôm nay", "Ngày mai", "Hôm qua"];
  const [selectedOption, setSelectedOption] = useState("Hôm nay");
  const isDataEmpty = !data || data.length === 0;
  const emptyChartData = [
    { type: "production", quantity: 1, percent: 33 },
    { type: "incomplete", quantity: 1, percent: 33 },
    { type: "completed", quantity: 1, percent: 33 },
  ];
  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };
  const totalReport = data?.reduce(
    (acc, item) => {
      acc.quantity += item?.quantity ?? 0; // Sum of quantities
      acc.percent += item?.percent ?? 0; // Sum of percentages
      return acc;
    },
    { quantity: 0, percent: 0 } // Initial values for the accumulator
  );
  return (
    <Card className="p-4 flex flex-col w-full gap-2 border-0">
      <div className="flex w-full justify-between">
        <h3 className="font-semibold">Tình hình sản xuất</h3>
        <MySelect
          value={selectedOption}
          onValueChange={handleSelectChange}
          placeholder="Chọn ngày"
          options={options}
          icon={<Calendar />}
        />
      </div>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="m-auto max-h-[300px] h-full w-full"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={isDataEmpty ? emptyChartData : data}
              dataKey="percent"
              nameKey="type"
              innerRadius={80}
              paddingAngle={6}
              cornerRadius={10}
              className={`${!data && "fill-muted"} `}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalReport?.quantity || "0"}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Lệnh sản xuất
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <div className="flex w-full gap-4">
        {data
          ? data.map((item, index) => (
              <Card
                key={index}
                className="p-4 flex flex-col gap-2 w-full border-0"
              >
                <div className="text-2xl font-bold text-primary">
                  {item?.quantity}
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <h3 className="text-xs">
                      {item?.type === "incomplete"
                        ? "Chưa hoàn thành"
                        : item?.type === "production"
                        ? "Đang sản xuất"
                        : item?.type === "completed"
                        ? "Đã hoàn thành"
                        : "Unknown"}
                    </h3>
                  </div>
                </div>
              </Card>
            ))
          : emptyChartData.map((item, index) => (
              <Card
                key={index}
                className="p-4 flex flex-col gap-2 w-full border-0"
              >
                <div className="text-2xl font-bold text-primary">0</div>
                <div className="flex items-center gap-2">
                  <div>
                    <h3 className="text-xs">
                      {item?.type === "incomplete"
                        ? "Chưa hoàn thành"
                        : item?.type === "production"
                        ? "Đang sản xuất"
                        : item?.type === "completed"
                        ? "Đã hoàn thành"
                        : "Unknown"}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
      </div>
    </Card>
  );
}
