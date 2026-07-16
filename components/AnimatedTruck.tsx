import { PmgTruckAnimation } from "@/components/PmgTruckAnimation";

/** @deprecated Prefer `<PmgTruckAnimation variant="icon" />` */
export function AnimatedTruck({ className = "" }: { className?: string }) {
  return <PmgTruckAnimation variant="icon" className={className} />;
}
