"use client";

import type { ReactNode } from "react";
import { FloatingActions } from "@/components/FloatingActions";
import { TruckBookingProvider } from "@/components/TruckBookingProvider";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <TruckBookingProvider>
      {children}
      <FloatingActions />
    </TruckBookingProvider>
  );
}
