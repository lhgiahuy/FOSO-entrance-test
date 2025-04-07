"use client";

import { MySelect } from "@/components/my-ui/my-select";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Production } from "@/types/types";
import { Calendar } from "lucide-react";
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

export function ProductionPlan({ data }: { data?: Production[] }) {
  const options = ["Quý này", "Quý sau", "Quý trước"];
  const [selectedOption, setSelectedOption] = useState("Quý này");
  const isDataEmpty = !data || data.length === 0;
  const emptyChartData = [{ product: "", quantity: 0, actual: 0 }];

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };
  const chartConfig = {
    quantity: {
      label: "Kế hoạch",
      color: "var(--primary)",
    },
    actual: {
      label: "Thực hiện",
      color: "var(--secondary)",
    },
  } satisfies ChartConfig;
  return (
    <Card className="p-4 flex flex-col gap-2 w-1/2 border-0">
      <div className="flex w-full justify-between">
        <h3 className="font-semibold">Kế hoạch sản xuất</h3>
        <MySelect
          value={selectedOption}
          onValueChange={handleSelectChange}
          placeholder="Chọn quý"
          options={options}
          icon={<Calendar />}
        />
      </div>
      <CardContent className="mt-4">
        <ChartContainer config={chartConfig} className="p-4">
          <BarChart
            accessibilityLayer
            data={isDataEmpty ? emptyChartData : data}
            barSize={24}
          >
            <ChartLegend verticalAlign="top" content={<ChartLegendContent />} />
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="product"
              tickLine={false}
              tickMargin={16}
              axisLine={false}
              label={{
                value: "Mặt hàng",
                position: "insideBottomLeft",
                offset: 0,
                dy: 0,
                dx: -60,
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              label={{
                value: "Cái",
                position: "top",
                offset: 0,
                dy: -24,
                dx: 10,
              }}
              ticks={[0, 20, 40, 60, 80, 100]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="quantity" fill="var(--color-quantity)" radius={2} />
            <Bar dataKey="actual" fill="var(--color-actual)" radius={2} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
