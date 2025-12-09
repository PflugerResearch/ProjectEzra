// Mass Timber Cost Analysis Data (X25-RB05)
// Source: Timberlab, Inc. estimate for AISD Crockett ECHS Gym Modernization

export const projectInfo = {
  code: 'X25-RB05',
  name: 'Mass Timber Cost Analysis',
  subtitle: 'AISD Crockett Early College High School - Gym Modernization',
  contractor: 'Timberlab, Inc.',
  date: 'October 14, 2025',
  area: 23043, // SF
  researcher: 'TBD',
  researchType: 'Cost Feasibility Study',
  totalHours: 40,
};

export interface BudgetCategory {
  name: string;
  amount: number;
  color: string;
}

export const baseBudget = {
  total: 1701376,
  categories: [
    { name: 'CLT and Glulam Supply', amount: 1234443, color: '#3b82f6' },
    { name: 'Hardware and Connection Supply', amount: 120031, color: '#10b981' },
    { name: 'Diaphragm Strapping Allowance', amount: 48918, color: '#f59e0b' },
    { name: 'CLT and Glulam Install', amount: 297984, color: '#8b5cf6' },
  ] as BudgetCategory[],
};

export interface Alternate {
  id: number;
  description: string;
  amount: number;
  type: 'add' | 'deduct';
}

export const alternates: Alternate[] = [
  { id: 1, description: 'Shop Applied-Membrane on CLT', amount: 53077, type: 'add' },
  { id: 2, description: 'Delegated Timber Design', amount: 45463, type: 'add' },
  { id: 3, description: 'Remove CLT from Gym Roof', amount: -504838, type: 'deduct' },
  { id: 4, description: 'Remove Gym Roof CLT and Glulam Beams', amount: -1192757, type: 'deduct' },
];

export interface Scenario {
  name: string;
  total: number;
  costPerSF: number;
}

export const scenarios: Scenario[] = [
  { name: 'Base Only', total: 1701376, costPerSF: 73.84 },
  { name: 'Base + Alt 1 + Alt 2', total: 1799916, costPerSF: 78.12 },
  { name: 'Base + Deduct Alt 3', total: 1196538, costPerSF: 51.93 },
  { name: 'Base + Deduct Alt 4', total: 508619, costPerSF: 22.07 },
];

// Key findings for summary display
export const keyFindings = [
  {
    title: 'Base Budget',
    value: '$1.7M',
    detail: '$73.84/SF for full mass timber scope',
    icon: 'dollar',
  },
  {
    title: 'Potential Savings',
    value: 'Up to 70%',
    detail: 'With Alt 4 deduct reducing to $22.07/SF',
    icon: 'savings',
  },
  {
    title: 'Material Cost',
    value: '73%',
    detail: 'CLT and Glulam supply is largest cost driver',
    icon: 'material',
  },
  {
    title: 'Installation',
    value: '18%',
    detail: 'Labor for CLT and Glulam installation',
    icon: 'install',
  },
];
