"use client";

import { DataTable } from "@/components/my-ui/data-table";
import { MySelect } from "@/components/my-ui/my-select";
import { Card } from "@/components/ui/card";
import { Material } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import { Calendar } from "lucide-react";
import { useState } from "react";

export function MaterialTable({ data }: { data?: Material[] }) {
  const options = ["Tuần này", "Tuần sau"];
  const [selectedOption, setSelectedOption] = useState("Tuần này");
  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };
  const columns: ColumnDef<Material>[] = [
    {
      accessorKey: "Id",
      header: () => <div className="text-center">STT</div>,
      cell: ({ row }) => <p className="text-center">{row.index + 1}</p>,
    },
    {
      accessorKey: "product",
      header: "Nguyên vật liệu",
      cell: ({ row }) => (
        <div className="flex flex-col gap-2 text-xs">
          <p>{row.original.materialName}</p>
          <p>{row.original.additionalInfo.none}</p>
          <p>{row.original.additionalInfo.code}</p>
        </div>
      ),
    },
    {
      accessorKey: "unit",
      header: "Đơn vị tính",
      cell: ({ row }) => <p className="text-xs">{row.original.unit}</p>,
    },

    {
      accessorKey: "quantity",
      header: () => <div className="text-center">Số lượng</div>,
      cell: ({ row }) => (
        <p className="text-xs text-center">{row.original.quantity}</p>
      ),
    },
  ];
  return (
    <Card className="p-4 flex flex-col w-full gap-8 border-0">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-md font-semibold">Nguyên vật liệu cần mua</h3>
        <MySelect
          value={selectedOption}
          onValueChange={handleSelectChange}
          placeholder="Chọn"
          options={options}
          icon={<Calendar />}
        />
      </div>
      <DataTable columns={columns} data={data || []} />
    </Card>
  );
}
