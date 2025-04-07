import { GroupProductionProgress } from "@/components/sections/GroupProductionProgress/GroupProductionProgress";
import { MaterialTable } from "@/components/sections/MaterialTable/MaterialTable";
import { OverviewSection } from "@/components/sections/Overview/OverviewSection";
import { ProductionPlan } from "@/components/sections/ProductionPlan/ProductionPlan";
import { ProductionReport } from "@/components/sections/ProductionReport/ProductionReport";
import { TopCustomer } from "@/components/sections/TopCustomer/TopCustomer";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <OverviewSection />
      <div className="flex gap-8">
        <ProductionPlan />
        <TopCustomer />
      </div>
      <div className="flex w-full gap-4">
        <ProductionReport />
        <GroupProductionProgress />
        <MaterialTable />
      </div>
    </div>
  );
}
