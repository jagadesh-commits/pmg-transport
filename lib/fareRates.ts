export const PICKUP_LOCATION = "Manali Steel Yard";

export type FareRate = {
  destination: string;
  rateFor10Tons: number;
  perExtraTon: number;
};

export const FARE_RATES: FareRate[] = [
  { destination: "Chengalpattu & Madhavaram", rateFor10Tons: 9000, perExtraTon: 900 },
  { destination: "Kanchipuram", rateFor10Tons: 9000, perExtraTon: 900 },
  { destination: "Maraimalai Nagar", rateFor10Tons: 8000, perExtraTon: 800 },
  { destination: "Sriperumbudur", rateFor10Tons: 5000, perExtraTon: 500 },
  { destination: "Oragadam", rateFor10Tons: 6000, perExtraTon: 600 },
  { destination: "Poothandi", rateFor10Tons: 4500, perExtraTon: 450 },
  { destination: "Ambattur & Kattur, Chennai", rateFor10Tons: 4500, perExtraTon: 450 },
  { destination: "Vichoor", rateFor10Tons: 2500, perExtraTon: 250 },
  { destination: "Vyasarpadi", rateFor10Tons: 2500, perExtraTon: 250 },
  { destination: "Ernavoor", rateFor10Tons: 2000, perExtraTon: 200 },
  { destination: "Thiruttani", rateFor10Tons: 8000, perExtraTon: 800 },
  { destination: "Perungudi", rateFor10Tons: 5000, perExtraTon: 500 },
  { destination: "Velachery", rateFor10Tons: 5000, perExtraTon: 500 },
  { destination: "Tambaram", rateFor10Tons: 5500, perExtraTon: 550 },
  { destination: "Thiruporur", rateFor10Tons: 8000, perExtraTon: 800 },
  { destination: "Tiruvallur & Kakkalur", rateFor10Tons: 5000, perExtraTon: 500 },
  { destination: "Guindy", rateFor10Tons: 5000, perExtraTon: 500 },
  { destination: "Sri City", rateFor10Tons: 8000, perExtraTon: 800 },
];

export function getFareRate(destination: string): FareRate | undefined {
  return FARE_RATES.find((r) => r.destination === destination);
}

/**
 * Returns the estimated fare in INR, or null if the destination is not in the
 * rate table (caller should show a custom-quote message).
 */
export function calculateFare(destination: string, weightKg: number): number | null {
  const rate = getFareRate(destination);
  if (!rate || weightKg <= 0) return null;

  const tons = weightKg / 1000;
  if (tons <= 10) return rate.rateFor10Tons;

  const extraTons = Math.ceil(tons - 10);
  return rate.rateFor10Tons + rate.perExtraTon * extraTons;
}
