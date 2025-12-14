// Mock data - will be replaced with real API calls

export const mockPatientsData = [
  { 
    id: 'P-2024-1547', 
    name: 'Ahmed Bennani', 
    sortie: '07/12/2025', 
    score: 0.87, 
    statut: 'CRITIQUE', 
    age: 72, 
    sexe: 'M', 
    diagnostic: 'Insuffisance cardiaque' 
  },
  { 
    id: 'P-2024-1623', 
    name: 'Sarah El Amrani', 
    sortie: '06/12/2025', 
    score: 0.82, 
    statut: 'ELEVE', 
    age: 65, 
    sexe: 'F', 
    diagnostic: 'Pneumonie' 
  },
  { 
    id: 'P-2024-1598', 
    name: 'Mohammed Khalil', 
    sortie: '06/12/2025', 
    score: 0.76, 
    statut: 'ELEVE', 
    age: 68, 
    sexe: 'M', 
    diagnostic: 'BPCO' 
  },
  { 
    id: 'P-2024-1612', 
    name: 'Fatima Zahra', 
    sortie: '05/12/2025', 
    score: 0.71, 
    statut: 'ELEVE', 
    age: 58, 
    sexe: 'F', 
    diagnostic: 'Diabete Type 2' 
  },
  { 
    id: 'P-2024-1589', 
    name: 'Hassan Idrissi', 
    sortie: '05/12/2025', 
    score: 0.68, 
    statut: 'MOYEN', 
    age: 55, 
    sexe: 'M', 
    diagnostic: 'Hypertension' 
  },
];

export const mockScoresData = [
  { 
    id: 'FHIR-001', 
    patient: 'Ahmed Bennani', 
    date: '07/12/2025 14:30', 
    score: 0.87, 
    features: ['Comorbidites multiples', 'Age >70', 'Readmission anterieure'] 
  },
  { 
    id: 'FHIR-002', 
    patient: 'Sarah El Amrani', 
    date: '06/12/2025 09:15', 
    score: 0.82, 
    features: ['Observation anormale', 'Medication complexe', 'Lab tests critiques'] 
  },
  { 
    id: 'FHIR-003', 
    patient: 'Mohammed Khalil', 
    date: '06/12/2025 11:20', 
    score: 0.76, 
    features: ['Diagnostic chronique', 'Sejour prolonge', 'Comorbidites'] 
  },
];

export const mockAuditData = {
  age: { score: 85, status: 'good' },
  sexe: { score: 91, status: 'good' },
  origine: { score: 78, status: 'warning' },
  comorbidite: { score: 88, status: 'good' },
};

export const mockStatsData = {
  highRiskPatients: 42,
  highRiskTrend: '+12%',
  averageScore: 0.64,
  averageScoreTrend: '-5%',
  alertsToday: 8,
  alertsTrend: '+3',
  readmissionRate: 12.3,
  readmissionTrend: '-2%',
};

export const mockReportsData = [
  { titre: 'Rapport Mensuel - Novembre 2025', date: '01/12/2025', type: 'Mensuel', size: '2.4 MB' },
  { titre: 'Audit Fairness - Q4 2025', date: '28/11/2025', type: 'Audit', size: '1.8 MB' },
  { titre: 'Performance Modele - Semaine 48', date: '24/11/2025', type: 'Performance', size: '890 KB' },
  { titre: 'Analyse Readmissions - Octobre 2025', date: '15/11/2025', type: 'Analyse', size: '1.2 MB' },
];
