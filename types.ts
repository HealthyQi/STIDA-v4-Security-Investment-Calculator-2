export type Tier = 'TIER_1' | 'TIER_2';

export interface KPI {
  name: string;
  value: number; // 0-100
  weight: number; // 0-1
  dqi: number; // 0-1 (Data Quality Index: Confidence/Freshness)
}

export interface Domain {
  id: string;
  name: string;
  kpis: KPI[];
  coverage: number; // 0-1
}

export interface DomainScore extends Domain {
  rawScore: number;
  sStar: number;
  meetsFloor: boolean;
  projectedRawScore: number; // Post-investment maturity
  projectedSStar: number;    // Post-investment effectiveness
}

export interface Scenario {
  id: string;
  name: string;
  sle: number; // Single Loss Expectancy (P50)
  frequency: number; // Annual Probability
}

export interface ActionEffectiveness {
  type: 'PROBABILITY' | 'IMPACT';
  amount: number; // deltaP (0-1) or deltaSLE (currency amount)
}

export interface Action {
  id: string;
  name: string;
  domainId: string;
  cost_upfront: number;
  cost_annual: number;
  effectiveness: Record<string, ActionEffectiveness>; // Keyed by Scenario ID
  isFloorFix: boolean;
  resourceMonths: number;
  maturity_lift?: number; // Estimated increase in Domain Maturity (0-100) if funded
}

export interface CalculatedAction extends Action {
  nbd: number;
  paybackMonths: number;
  npv: number;
  roi: number;
  bcr: number;
  totalDeltaALE: number;
  reason?: string;
  year1Cost: number; // cost_upfront + cost_annual
}

export interface PortfolioResult {
  selectedActions: CalculatedAction[];
  totalYear1Cost: number;
  totalUpfront: number;
  totalAnnual: number;
}