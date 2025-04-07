"use client";

import { MySelect } from "@/components/my-ui/my-select";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Customer } from "@/types/types";
import { Calendar } from "lucide-react";
import { useState } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

export function TopCustomer({ data }: { data?: Customer[] }) {
  const options = ["Năm nay", "Năm sau", "Năm trước"];
  const [selectedOption, setSelectedOption] = useState("Năm nay");
  const isDataEmpty = !data || data.length === 0;
  const emptyChartData = [{ customer: "", quantity: 0 }];
  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };
  const chartConfig = {
    quantity: {
      label: "Sản lượng",
      color: "var(--primary)",
    },
  } satisfies ChartConfig;
  return (
    <Card className="p-4 flex flex-col gap-2 w-1/2 border-0">
      <div className="flex w-full justify-between">
        <h3 className="font-semibold">
          Top 5 khách hàng có sản lượng nhiều nhất
        </h3>
        <MySelect
          value={selectedOption}
          onValueChange={handleSelectChange}
          placeholder="Chọn năm"
          options={options}
          icon={<Calendar />}
        />
      </div>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={isDataEmpty ? emptyChartData : data}
            layout="vertical"
            margin={{
              left: 12,
            }}
            barSize={16}
          >
            <XAxis
              type="number"
              dataKey="quantity"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              ticks={[0, 800, 1600, 2400, 3200]}
              label={{
                value: "Sản lượng",
                position: "insideBottomLeft",
                offset: 0,
                dy: -6,
                dx: -80,
              }}
            />
            <YAxis
              dataKey="customer"
              type="category"
              tickLine={false}
              tickMargin={16}
              axisLine={false}
              width={120}
              label={{
                value: "Khách hàng",
                position: "insideLeft",
                offset: 0,
                dy: -156,
                dx: 28,
              }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="quantity" fill="var(--color-quantity)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
