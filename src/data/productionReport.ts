import { Report } from "@/types/types";

export const productionReportData: Report[] = [
  {
    type: "incomplete",
    quantity: 5,
    percent: 30,
    fill: "var(--color-incomplete)",
  },
  {
    type: "production",
    quantity: 6,
    percent: 40,
    fill: "var(--color-production)",
  },
  {
    type: "completed",
    quantity: 5,
    percent: 30,
    fill: "var(--color-completed)",
  },
];
