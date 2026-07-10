"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { TruckBooking } from "@/components/TruckBooking";

type TruckBookingContextValue = {
  openBooking: () => void;
};

const TruckBookingContext = createContext<TruckBookingContextValue | null>(null);

export function useTruckBooking() {
  const ctx = useContext(TruckBookingContext);
  if (!ctx) {
    throw new Error("useTruckBooking must be used within TruckBookingProvider");
  }
  return ctx;
}

export function TruckBookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openBooking = useCallback(() => setIsOpen(true), []);

  return (
    <TruckBookingContext.Provider value={{ openBooking }}>
      {children}
      <TruckBooking isOpen={isOpen} onOpenChange={setIsOpen} />
    </TruckBookingContext.Provider>
  );
}
