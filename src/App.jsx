import React, { useState } from 'react';
import { Home, Users, Activity, Shield, FileText, Settings } from 'lucide-react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Patients from './components/Patients';
import Scores from './components/Scores';
import Audit from './components/Audit';
import Rapports from './components/Rapports';
import Parametres from './components/Parametres';

const HealthFlowApp = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Navigation items
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'patients', label: 'Patients a Risque', icon: Users },
    { id: 'scores', label: 'Scores FHIR', icon: Activity },
    { id: 'audit', label: 'Audit Fairness', icon: Shield },
    { id: 'rapports', label: 'Rapports', icon: FileText },
    { id: 'parametres', label: 'Parametres', icon: Settings },
  ];

  // Sample data
  const patientsData = [
    { id: 'P-2024-1547', name: 'Ahmed Bennani', sortie: '07/12/2025', score: 0.87, statut: 'CRITIQUE', age: 72, sexe: 'M', diagnostic: 'Insuffisance cardiaque' },
    { id: 'P-2024-1623', name: 'Sarah El Amrani', sortie: '06/12/2025', score: 0.82, statut: 'ELEVE', age: 65, sexe: 'F', diagnostic: 'Pneumonie' },
    { id: 'P-2024-1598', name: 'Mohammed Khalil', sortie: '06/12/2025', score: 0.76, statut: 'ELEVE', age: 68, sexe: 'M', diagnostic: 'BPCO' },
    { id: 'P-2024-1612', name: 'Fatima Zahra', sortie: '05/12/2025', score: 0.71, statut: 'ELEVE', age: 58, sexe: 'F', diagnostic: 'Diabete Type 2' },
    { id: 'P-2024-1589', name: 'Hassan Idrissi', sortie: '05/12/2025', score: 0.68, statut: 'MOYEN', age: 55, sexe: 'M', diagnostic: 'Hypertension' },
  ];

  const scoresData = [
    { id: 'FHIR-001', patient: 'Ahmed Bennani', date: '07/12/2025 14:30', score: 0.87, features: ['Comorbidites multiples', 'Age >70', 'Readmission anterieure'] },
    { id: 'FHIR-002', patient: 'Sarah El Amrani', date: '06/12/2025 09:15', score: 0.82, features: ['Observation anormale', 'Medication complexe', 'Lab tests critiques'] },
    { id: 'FHIR-003', patient: 'Mohammed Khalil', date: '06/12/2025 11:20', score: 0.76, features: ['Diagnostic chronique', 'Sejour prolonge', 'Comorbidites'] },
  ];

  const auditData = {
    age: { score: 85, status: 'good' },
    sexe: { score: 91, status: 'good' },
    origine: { score: 78, status: 'warning' },
    comorbidite: { score: 88, status: 'good' },
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard patientsData={patientsData} />;
      case 'patients':
        return <Patients patientsData={patientsData} />;
      case 'scores':
        return <Scores scoresData={scoresData} />;
      case 'audit':
        return <Audit auditData={auditData} />;
      case 'rapports':
        return <Rapports />;
      case 'parametres':
        return <Parametres />;
      default:
        return <Dashboard patientsData={patientsData} />;
    }
  };

  return (
    <Layout
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
      navItems={navItems}
    >
      {renderPage()}
    </Layout>
  );
};

export default HealthFlowApp;
