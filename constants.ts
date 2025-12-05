import { Domain, Scenario, Action } from './types';

export const DEFAULT_SCENARIOS: Scenario[] = [
  { id: 'S1', name: 'Ransomware Event', sle: 800000, frequency: 0.30 },
  { id: 'S2', name: 'Data Breach (PII)', sle: 4500000, frequency: 0.15 },
  { id: 'S3', name: 'Insider Threat', sle: 500000, frequency: 0.10 }
];

export const DEFAULT_DOMAINS: Domain[] = [
  { 
    id: 'G1', name: 'Governance', coverage: 0.85, 
    kpis: [
      { name: 'Policy Compliance Rate', value: 85, weight: 0.30, dqi: 0.8 },
      { name: 'Security Training Completion', value: 92, weight: 0.20, dqi: 1.0 },
      { name: '3rd Party Risk Assessed', value: 68, weight: 0.25, dqi: 0.6 },
      { name: 'Audit Remediation Rate', value: 72, weight: 0.25, dqi: 0.9 }
    ] 
  },
  { 
    id: 'G2', name: 'Detection', coverage: 0.75, 
    kpis: [
      { name: 'Mean Time to Detect (MTTD)', value: 70, weight: 0.30, dqi: 0.9 },
      { name: 'Log Source Coverage', value: 85, weight: 0.25, dqi: 0.8 },
      { name: 'Endpoint Sensor Health', value: 80, weight: 0.25, dqi: 1.0 },
      { name: 'Alert Fidelity Rate', value: 60, weight: 0.20, dqi: 0.7 }
    ] 
  },
  { 
    id: 'G3', name: 'Architecture', coverage: 0.65, 
    kpis: [
      { name: 'MFA Implementation Rate', value: 90, weight: 0.30, dqi: 1.0 },
      { name: 'PAM Coverage', value: 55, weight: 0.25, dqi: 0.9 },
      { name: 'Network Segmentation', value: 45, weight: 0.25, dqi: 0.5 },
      { name: 'Cloud Security Benchmark', value: 70, weight: 0.20, dqi: 0.8 }
    ] 
  },
  { 
    id: 'G4', name: 'Defense', coverage: 0.60, 
    kpis: [
      { name: 'Mean Time to Patch (Critical)', value: 60, weight: 0.30, dqi: 1.0 },
      { name: 'Vuln Scan Coverage', value: 90, weight: 0.25, dqi: 0.9 },
      { name: 'EDR Blocking Mode', value: 85, weight: 0.25, dqi: 1.0 },
      { name: 'Hardening Compliance', value: 55, weight: 0.20, dqi: 0.6 }
    ] 
  },
  { 
    id: 'G5', name: 'Resilience', coverage: 0.40, // Intentional Low Score for Demo
    kpis: [
      { name: 'Backup Success Rate', value: 98, weight: 0.30, dqi: 1.0 },
      { name: 'Mean Time to Recover (MTTR)', value: 50, weight: 0.30, dqi: 0.7 },
      { name: 'DR Test Success Rate', value: 25, weight: 0.20, dqi: 1.0 },
      { name: 'BCP Readiness Score', value: 60, weight: 0.20, dqi: 0.5 }
    ] 
  },
];

export const DEFAULT_ACTIONS: Action[] = [
  { 
    id: 'A1', name: 'Fix Resilience Gaps (G5)', domainId: 'G5', 
    cost_upfront: 120000, cost_annual: 15000, 
    effectiveness: {
      'S1': { type: 'IMPACT', amount: 600000 } // Reduces Ransomware SLE significantly
    },
    isFloorFix: true, resourceMonths: 6,
    maturity_lift: 35 // Boosting MTTR and DR Test scores
  },
  { 
    id: 'A2', name: 'Identity Overhaul (G3)', domainId: 'G3', 
    cost_upfront: 600000, cost_annual: 90000, 
    effectiveness: {
      'S2': { type: 'PROBABILITY', amount: 0.35 }, // Harder to breach
      'S3': { type: 'PROBABILITY', amount: 0.25 }  // Harder for insider to move laterally
    },
    isFloorFix: false, resourceMonths: 12,
    maturity_lift: 20 // Boosting PAM and Segmentation
  },
  { 
    id: 'A3', name: 'SIEM Upgrade (G2)', domainId: 'G2', 
    cost_upfront: 350000, cost_annual: 120000, 
    effectiveness: {
      'S1': { type: 'PROBABILITY', amount: 0.15 }, // Catch early ransomware
      'S2': { type: 'PROBABILITY', amount: 0.20 }, // Catch breach
      'S3': { type: 'PROBABILITY', amount: 0.30 }  // Catch insider
    },
    isFloorFix: false, resourceMonths: 9,
    maturity_lift: 15 // Boosting Alert Fidelity and Detection
  },
  { 
    id: 'A4', name: 'Patch Automation (G4)', domainId: 'G4', 
    cost_upfront: 150000, cost_annual: 40000, 
    effectiveness: {
      'S1': { type: 'PROBABILITY', amount: 0.20 }, // Less exploit surface
      'S2': { type: 'PROBABILITY', amount: 0.15 }
    },
    isFloorFix: false, resourceMonths: 3,
    maturity_lift: 25 // Boosting MTTP
  },
  { 
    id: 'A5', name: 'Advanced EDR (G2)', domainId: 'G2', 
    cost_upfront: 200000, cost_annual: 80000, 
    effectiveness: {
      'S1': { type: 'PROBABILITY', amount: 0.25 }, // Stop execution
      'S2': { type: 'PROBABILITY', amount: 0.10 }
    },
    isFloorFix: false, resourceMonths: 6,
    maturity_lift: 10 // Boosting Sensor Health
  },
  { 
    id: 'A6', name: 'DLP Implementation (G1)', domainId: 'G1', 
    cost_upfront: 450000, cost_annual: 100000, 
    effectiveness: {
      'S2': { type: 'IMPACT', amount: 2000000 }, // Prevent massive data egress (Reduces SLE)
      'S3': { type: 'IMPACT', amount: 300000 }   // Prevent insider egress
    },
    isFloorFix: false, resourceMonths: 14,
    maturity_lift: 15 // Boosting Policy and Audit
  },
];

// Deprecated: using dynamic state now
export const DISCOUNT_RATE = 0.10; 
export const FLOOR_THRESHOLD = 0.50;