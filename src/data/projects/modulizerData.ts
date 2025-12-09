// Modulizer Phase 2 (X25-RB02) Data
// Flour Bluff CTE Center - Energy, Lighting, and Climate Analysis

export interface ProjectInfo {
  name: string;
  subtitle: string;
  code: string;
  context: string;
  phase: string;
  location: string;
  researchType: string;
  totalHours: number;
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface TimelinePhase {
  phase: string;
  dates: string;
  hours: number;
  status: 'complete' | 'in-progress' | 'pending';
}

export interface Option {
  id: number;
  name: string;
  color: string;
}

export interface ClimateSummary {
  heatingDemand: string;
  coolingDemand: string;
  naturalVentilation: string;
}

export interface WindRoseEntry {
  season: string;
  direction: string;
  speed: string;
  calm: number;
}

export interface ClimateData {
  summary: ClimateSummary;
  windRose: WindRoseEntry[];
}

export interface LightingTargets {
  sda: { target: number; label: string; description: string };
  ase: { target: number; label: string; description: string };
}

export interface LightingResult {
  option: number;
  sda: number;
  ase: number | null;
  sdaStatus: 'pass' | 'fail';
}

export interface LightingData {
  targets: LightingTargets;
  results: LightingResult[];
  observations: string[];
}

export interface EnergyMetricValue {
  value: number;
  delta: number;
}

export interface EnergyOption {
  option: number;
  heating: EnergyMetricValue;
  cooling: EnergyMetricValue;
  lighting: EnergyMetricValue;
  electric: EnergyMetricValue;
  total: EnergyMetricValue;
  [key: string]: number | EnergyMetricValue;
}

export interface EnergyInsight {
  metric: string;
  winner: number;
  note: string;
}

export interface EnergyAverage {
  heating: number;
  cooling: number;
  lighting: number;
  electric: number;
  total: number;
  [key: string]: number;
}

export interface EnergyData {
  metrics: string[];
  average: EnergyAverage;
  options: EnergyOption[];
  insights: EnergyInsight[];
}

export interface FindingReason {
  category: string;
  detail: string;
  impact: string;
}

export interface KeyFindings {
  winner: string;
  reasons: FindingReason[];
  nextSteps: string[];
}

export interface PrecedentStrategy {
  name: string;
  precedent: string;
  impact: string;
  application: string;
}

// Data exports

export const projectInfo: ProjectInfo = {
  name: "The Modulizer Phase 2",
  subtitle: "Sculpting Light",
  code: "X25-RB02",
  context: "Flour Bluff CTE Center",
  phase: "Schematic Design → Design Development",
  location: "Corpus Christi, TX (Climate Zone 2A)",
  researchType: "Long Form - Experimental Design",
  totalHours: 140,
};

export const researchTeam: TeamMember[] = [
  { name: "Leah van der Sanden", role: "Researcher" },
  { name: "Agustin Salinas", role: "Researcher" },
  { name: "Chris Olivarez", role: "Researcher" },
  { name: "Brandon Jacobson", role: "Researcher" },
];

export const timeline: TimelinePhase[] = [
  { phase: "Background Research", dates: "Oct 20", hours: 4, status: "complete" },
  { phase: "Hypothesis & Design", dates: "Oct 20-23", hours: 8, status: "complete" },
  { phase: "Simulation Setup", dates: "Oct 27 - Nov 3", hours: 8, status: "complete" },
  { phase: "Run Analysis (SD)", dates: "Nov 3-5", hours: 16, status: "complete" },
  { phase: "Interpretation & Selection", dates: "Nov 5-11", hours: 40, status: "complete" },
  { phase: "DD Phase Iteration", dates: "Nov 11 - Mar 30", hours: 44, status: "in-progress" },
  { phase: "Documentation & Publication", dates: "Mar - Apr", hours: 20, status: "pending" },
];

export const options: Option[] = [
  { id: 1, name: "Option 1", color: "#6366f1" },
  { id: 2, name: "Option 2", color: "#10b981" },
  { id: 3, name: "Option 3", color: "#f59e0b" },
];

export const climateData: ClimateData = {
  summary: {
    heatingDemand: "Minimal - Dec-Feb nighttime lows (50-65°F)",
    coolingDemand: "Dominant - 7-month season (Apr-Oct), peaks 95-100°F+",
    naturalVentilation: "Good potential - SE winds 14-24+ mph",
  },
  windRose: [
    { season: "Spring", direction: "SE-ESE", speed: "14-24 mph", calm: 1.71 },
    { season: "Summer", direction: "SE-SSE", speed: "17-24+ mph", calm: 2.77 },
    { season: "Fall", direction: "N-NNE / SE-S", speed: "14-28+ mph", calm: 4.06 },
    { season: "Winter", direction: "SE-SSE", speed: "14-24 mph", calm: 2.78 },
  ],
};

export const lightingData: LightingData = {
  targets: {
    sda: { target: 55, label: "SDA ≥ 55%", description: "Spatial Daylight Autonomy" },
    ase: { target: 10, label: "ASE ≤ 10%", description: "Annual Sunlight Exposure" },
  },
  results: [
    { option: 1, sda: 51, ase: null, sdaStatus: "fail" },
    { option: 2, sda: 61, ase: null, sdaStatus: "pass" },
    { option: 3, sda: 57, ase: null, sdaStatus: "pass" },
  ],
  observations: [
    "Support spaces: 0% SDA (no daylight - expected for cores/storage)",
    "Perimeter spaces: Highly overlit (excessive daylight, potential glare)",
    "Core spaces: Highly underlit (requires artificial lighting)",
    "Design challenge: Shallow daylight penetration with excessive glazing at perimeter",
  ],
};

export const energyData: EnergyData = {
  metrics: ["Heating", "Cooling", "Lighting", "Electric", "Total"],
  average: {
    heating: 3.459,
    cooling: 83.189,
    lighting: 7.544,
    electric: 21.719,
    total: 116.163,
  },
  options: [
    {
      option: 1,
      heating: { value: 2.951, delta: -0.51 },
      cooling: { value: 83.372, delta: 0.18 },
      lighting: { value: 7.623, delta: 0.08 },
      electric: { value: 21.751, delta: 0.03 },
      total: { value: 115.881, delta: -0.28 },
    },
    {
      option: 2,
      heating: { value: 3.405, delta: -0.05 },
      cooling: { value: 79.752, delta: -3.44 },
      lighting: { value: 7.619, delta: 0.08 },
      electric: { value: 21.253, delta: -0.47 },
      total: { value: 112.523, delta: -3.64 },
    },
    {
      option: 3,
      heating: { value: 4.020, delta: 0.56 },
      cooling: { value: 86.443, delta: 3.25 },
      lighting: { value: 7.390, delta: -0.15 },
      electric: { value: 22.152, delta: 0.43 },
      total: { value: 120.085, delta: 3.92 },
    },
  ],
  insights: [
    { metric: "Heating", winner: 1, note: "Best: Option 1 (Δ -0.51)" },
    { metric: "Cooling", winner: 2, note: "Best: Option 2 (Δ -3.44) - Critical for CUP" },
    { metric: "Lighting", winner: 3, note: "Best: Option 3 (Δ -0.15)" },
    { metric: "Electric", winner: 2, note: "Best: Option 2 (Δ -0.47)" },
    { metric: "Total EUI", winner: 2, note: "Winner: Option 2 (Δ -3.64 kBtu/sf)" },
  ],
};

export const keyFindings: KeyFindings = {
  winner: "Option 2",
  reasons: [
    {
      category: "Energy",
      detail: "Lowest Total EUI (Δ -3.64 kBtu/sf) and best Cooling EUI (Δ -3.44)",
      impact: "Critical for campus CUP power demand constraints",
    },
    {
      category: "Lighting",
      detail: "Best SDA at 61%, exceeding LEED target (≥55%) by 6 points",
      impact: "Only option significantly exceeding compliance threshold",
    },
    {
      category: "Climate Fit",
      detail: "Cooling represents ~70% of total energy use",
      impact: "Option 2's cooling advantage directly reduces peak power demand",
    },
  ],
  nextSteps: [
    "Implement exterior screens/fins on south and west façades",
    "Orient operable openings to capture SE breezes (14-24+ mph)",
    "Add light shelves/clerestories for better daylight penetration to core",
    "Provide shading structures for outdoor learning areas",
  ],
};

export const precedentStrategies: PrecedentStrategy[] = [
  {
    name: "Massing Rotation",
    precedent: "John Lewis Elementary",
    impact: "9% energy reduction",
    application: "Test optimal solar orientation for fabrication spaces",
  },
  {
    name: "Aperture Optimization",
    precedent: "Alice West Fleet Elementary",
    impact: "Maximum daylight, minimal heat gain",
    application: "Customize glazing ratio by orientation",
  },
  {
    name: "Shading Solutions",
    precedent: "Alice West Fleet Elementary",
    impact: "Mitigated heat gain on poor orientations",
    application: "Deep overhangs and custom shading devices",
  },
  {
    name: "Envelope Optimization",
    precedent: "Multiple COTE projects",
    impact: "Reduced operational EUI",
    application: "Balance transparency with thermal performance",
  },
];
