import { GroupProductionProgress } from "@/components/sections/GroupProductionProgress/GroupProductionProgress";
import { MaterialTable } from "@/components/sections/MaterialTable/MaterialTable";
import { OverviewSection } from "@/components/sections/Overview/OverviewSection";
import { ProductionPlan } from "@/components/sections/ProductionPlan/ProductionPlan";
import { ProductionReport } from "@/components/sections/ProductionReport/ProductionReport";
import { TopCustomer } from "@/components/sections/TopCustomer/TopCustomer";
import { materialData } from "@/data/material";
import { overviewData } from "@/data/overview";
import { productionData } from "@/data/productionPlan";
import { productionReportData } from "@/data/productionReport";
import { productionProgressData } from "@/data/progress";
import { topCustomersData } from "@/data/topCustomer";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <OverviewSection data={overviewData} />
      <div className="flex gap-8">
        <ProductionPlan data={productionData} />
        <TopCustomer data={topCustomersData} />
      </div>
      <div className="flex w-full gap-4">
        <ProductionReport data={productionReportData} />
        <GroupProductionProgress data={productionProgressData} />
        <MaterialTable data={materialData} />
      </div>
    </div>
  );
}
