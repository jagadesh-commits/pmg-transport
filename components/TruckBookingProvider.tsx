"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { TruckBooking } from "@/components/TruckBooking";

export type WeightUnit = "Tons" | "KG";

export type BookingOpenOptions = {
  initialDestination?: string;
  initialWeight?: string;
  initialWeightUnit?: WeightUnit;
  /** 1 = Route, 2 = Truck & Goods (1-indexed to match UI step labels) */
  initialStep?: 1 | 2;
};

type TruckBookingContextValue = {
  openBooking: (options?: BookingOpenOptions) => void;
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
  const [options, setOptions] = useState<BookingOpenOptions>({});

  const openBooking = useCallback((opts?: BookingOpenOptions) => {
    setOptions(opts ?? {});
    setIsOpen(true);
  }, []);

  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open);
    if (!open) setOptions({});
  }, []);

  return (
    <TruckBookingContext.Provider value={{ openBooking }}>
      {children}
      <TruckBooking
        isOpen={isOpen}
        onOpenChange={handleOpenChange}
        initialDestination={options.initialDestination}
        initialWeight={options.initialWeight}
        initialWeightUnit={options.initialWeightUnit}
        initialStep={options.initialStep}
      />
    </TruckBookingContext.Provider>
  );
}
