import { Overview } from "@/types/types";
import { Card } from "../../../ui/card";
import { ChevronsDown, ChevronsUp } from "lucide-react";

function OverviewCard({ data }: { data?: Overview }) {
  return (
    <Card className="p-4 flex flex-col gap-2 min-w-[200px] border-0">
      <div className="flex w-full justify-between">
        <div className="text-2xl font-bold text-primary">
          {data?.quantity || "0"}
        </div>
        {data && (
          <div className="flex gap-1 items-center text-sm">
            {data.percent > 0 ? (
              <ChevronsUp className="text-secondary w-4 h-4" />
            ) : (
              <ChevronsDown className="text-destructive w-4 h-4" />
            )}
            <p className="text-sm">{Math.abs(data.percent)}%</p>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <div>
          <h3 className="text-sm">{data?.product || "Chưa có mặt hàng"}</h3>
        </div>
      </div>
    </Card>
  );
}

export { OverviewCard };
